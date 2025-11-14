from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import numpy as np
import re
from urllib.parse import urlparse
import os

app = Flask(__name__)
CORS(app)

# Load the trained Decision Tree model
model_path = os.path.join(os.path.dirname(__file__), 'model', 'phishing_site_model_nb.pkl')
model = joblib.load(model_path)

def extract_url_features(url):
    """Extract features from URL for prediction"""
    try:
        # Check if URL has protocol, if not add http:// for parsing
        original_url = url
        if not url.startswith(('http://', 'https://')):
            url = 'http://' + url
            has_protocol = False
        else:
            has_protocol = True
            
        parsed = urlparse(url)
        domain = parsed.netloc
        path = parsed.path
        query = parsed.query

        features = {
            'url_length': len(original_url),
            'domain_length': len(domain),
            'path_length': len(path),
            'num_dots': original_url.count('.'),
            'num_hyphens': original_url.count('-'),
            'num_digits': sum(c.isdigit() for c in original_url),
            'num_at': original_url.count('@'),
            'num_eq': original_url.count('='),
            'num_qmark': original_url.count('?'),
            'num_slash': original_url.count('/'),
            'num_underscore': original_url.count('_'),
            'num_percent': original_url.count('%'),
            'has_ip': 1 if re.match(r'^\d+\.\d+\.\d+\.\d+$', domain.split(':')[0]) else 0,
            'num_subdomains': domain.count('.'),
            'has_https': 1 if parsed.scheme == 'https' else 0,
            'contains_login': 1 if 'login' in original_url.lower() else 0,
            'contains_secure': 1 if 'secure' in original_url.lower() else 0,
            'contains_bank': 1 if 'bank' in original_url.lower() else 0
        }
        return features
    except Exception as e:
        print(f"Error extracting features from URL: {url} - {e}")
        return None

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        url = data.get('url')
        
        if not url:
            return jsonify({'error': 'URL is required'}), 400
        
        # Check if URL uses HTTP (insecure) - flag as phishing immediately
        if url.startswith('http://'):
            return jsonify({
                'prediction': 'phishing',
                'confidence': 0.95,
                'url': url,
                'reason': 'HTTP (insecure) protocol detected'
            })
        
        # Extract features
        features = extract_url_features(url)
        if features is None:
            return jsonify({'error': 'Invalid URL format'}), 400
        
        # Convert to DataFrame
        feature_df = pd.DataFrame([features])
        
        # Make prediction with Decision Tree
        prediction = model.predict(feature_df)[0]
        prediction_proba = model.predict_proba(feature_df)[0]
        
        # Get confidence score
        confidence = max(prediction_proba)
        
        # Convert prediction to readable format
        # Decision Tree returns 'good' or 'bad'
        result = "phishing" if prediction == "bad" else "safe"
        
        return jsonify({
            'prediction': result,
            'confidence': round(confidence, 3),
            'url': url
        })
        
    except Exception as e:
        print(f"Error in prediction: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'model_loaded': model is not None})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(debug=False, host='0.0.0.0', port=port)