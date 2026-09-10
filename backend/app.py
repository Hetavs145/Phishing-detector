from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os
import json

from features import FEATURE_NAMES, extract_url_features

app = Flask(__name__)

allowed_origins = [o.strip() for o in os.environ.get('CLIENT_URL', 'http://localhost:5173').split(',') if o.strip()]
CORS(app, origins=allowed_origins)

MODEL_DIR = os.path.join(os.path.dirname(__file__), 'model')
MODEL_PATH = os.path.join(MODEL_DIR, 'phishing_url_model.pkl')
METRICS_PATH = os.path.join(MODEL_DIR, 'model_metrics.json')

if not os.path.exists(MODEL_PATH):
    raise RuntimeError(
        f"Model not found at {MODEL_PATH}. Run `python train_model.py` first "
        "to train it from ../phishing_site_urls.csv."
    )
model = joblib.load(MODEL_PATH)

model_metrics = {}
if os.path.exists(METRICS_PATH):
    with open(METRICS_PATH) as f:
        model_metrics = json.load(f)

MAX_URL_LENGTH = 2048


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(silent=True) or {}
        url = data.get('url')

        if not url or not isinstance(url, str) or not url.strip():
            return jsonify({'error': 'URL is required'}), 400
        url = url.strip()
        if len(url) > MAX_URL_LENGTH:
            return jsonify({'error': f'URL exceeds maximum length of {MAX_URL_LENGTH} characters'}), 400

        features = extract_url_features(url)
        if features is None:
            return jsonify({'error': 'Invalid URL format'}), 400

        feature_df = pd.DataFrame([features], columns=FEATURE_NAMES)

        prediction = model.predict(feature_df)[0]
        prediction_proba = model.predict_proba(feature_df)[0]
        confidence = max(prediction_proba)

        # Model classes are 'good' / 'bad'
        result = "phishing" if prediction == "bad" else "safe"

        return jsonify({
            'prediction': result,
            'confidence': round(float(confidence), 3),
            'url': url,
            'features': features,
        })

    except Exception as e:
        print(f"Error in prediction: {e}")
        return jsonify({'error': 'Internal server error'}), 500


@app.route('/model-info', methods=['GET'])
def model_info():
    return jsonify(model_metrics)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'model_loaded': model is not None})


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    debug = os.environ.get('FLASK_DEBUG', 'false').lower() == 'true'
    app.run(debug=debug, host='0.0.0.0', port=port)
