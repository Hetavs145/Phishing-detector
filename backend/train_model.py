#!/usr/bin/env python3
"""
Trains the phishing-URL DecisionTreeClassifier from phishing_site_urls.csv
(columns: URL, Label ["good"/"bad"]) using the exact same feature extraction
as app.py's /predict endpoint, so training and serving can never drift apart.
"""

import json
import os

import joblib
import pandas as pd
from sklearn.metrics import accuracy_score, f1_score, precision_score, recall_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

from features import FEATURE_NAMES, extract_url_features

HERE = os.path.dirname(__file__)
DATA_PATH = os.path.join(HERE, '..', 'phishing_site_urls.csv')
MODEL_DIR = os.path.join(HERE, 'model')
MODEL_PATH = os.path.join(MODEL_DIR, 'phishing_url_model.pkl')
METRICS_PATH = os.path.join(MODEL_DIR, 'model_metrics.json')


def main():
    print('Loading dataset...')
    df = pd.read_csv(DATA_PATH)
    df.columns = [c.strip() for c in df.columns]
    df = df.dropna(subset=['URL', 'Label'])
    df['Label'] = df['Label'].str.strip().str.lower()
    df = df[df['Label'].isin(['good', 'bad'])]
    print(f'Dataset shape: {df.shape}')

    print('Extracting features (this takes a couple of minutes for ~500k rows)...')
    records = []
    labels = []
    for url, label in zip(df['URL'], df['Label']):
        feats = extract_url_features(str(url))
        if feats is None:
            continue
        records.append(feats)
        labels.append(label)

    X = pd.DataFrame(records, columns=FEATURE_NAMES)
    y = pd.Series(labels)
    print(f'Usable rows after feature extraction: {len(X)}')

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    print('Training DecisionTreeClassifier...')
    model = DecisionTreeClassifier(criterion='entropy', random_state=42, max_depth=25)
    model.fit(X_train, y_train)

    preds = model.predict(X_test)
    metrics = {
        'accuracy': round(accuracy_score(y_test, preds), 4),
        'precision': round(precision_score(y_test, preds, pos_label='bad'), 4),
        'recall': round(recall_score(y_test, preds, pos_label='bad'), 4),
        'f1_score': round(f1_score(y_test, preds, pos_label='bad'), 4),
        'test_size': int(len(y_test)),
        'positive_class': 'bad (phishing)',
    }
    print('Metrics:', metrics)

    os.makedirs(MODEL_DIR, exist_ok=True)
    joblib.dump(model, MODEL_PATH)
    with open(METRICS_PATH, 'w') as f:
        json.dump(metrics, f, indent=2)

    print(f'Saved {MODEL_PATH} and {METRICS_PATH}')


if __name__ == '__main__':
    main()
