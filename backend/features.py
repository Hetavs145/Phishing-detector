import re
from urllib.parse import urlparse

FEATURE_NAMES = [
    'url_length', 'domain_length', 'path_length', 'num_dots', 'num_hyphens',
    'num_digits', 'num_at', 'num_eq', 'num_qmark', 'num_slash', 'num_underscore',
    'num_percent', 'has_ip', 'num_subdomains', 'has_https', 'contains_login',
    'contains_secure', 'contains_bank',
]


def extract_url_features(url):
    """Extract features from a URL for the phishing classifier. Used both at
    training time and at prediction time, so the two can never drift apart."""
    try:
        original_url = url
        if not url.startswith(('http://', 'https://')):
            url = 'http://' + url

        parsed = urlparse(url)
        domain = parsed.netloc
        path = parsed.path

        return {
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
            'contains_bank': 1 if 'bank' in original_url.lower() else 0,
        }
    except Exception as e:
        print(f"Error extracting features from URL: {url} - {e}")
        return None
