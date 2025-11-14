# PhishGuard - Phishing URL Detection WebApp

A modern web application that combines React frontend with Flask ML backend to detect phishing URLs using a Decision Tree model with 90% accuracy.

## 🚀 Features

- **Modern UI**: React + Vite with TailwindCSS and Framer Motion animations
- **Authentication**: Firebase Authentication (Email/Password + Google Sign-In)
- **ML Backend**: Flask API with Decision Tree model integration
- **Real-time Detection**: Instant URL analysis with confidence scores
- **Responsive Design**: Cyber-themed UI with neon accents

## 🏗️ Project Structure

```
phishguard/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components (Login, Signup, Dashboard)
│   │   ├── firebase.js     # Firebase configuration
│   │   └── App.jsx         # Main app component with routing
│   └── package.json
├── backend/                 # Flask ML backend
│   ├── model/
│   │   └── phishing_url_detector.pkl  # Trained Decision Tree model
│   ├── app.py              # Flask application
│   └── requirements.txt    # Python dependencies
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Python 3.8 or higher
- Firebase project setup

### 1. Backend Setup

```bash
cd phishguard/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the Flask server
python app.py
```

The backend will run on `http://localhost:8000`

### 2. Frontend Setup

```bash
cd phishguard/frontend

# Install dependencies
npm install

# Configure Firebase (see Firebase Setup below)
# Update src/firebase.js with your Firebase config

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password and Google providers
4. Get your Firebase config:
   - Go to Project Settings > General
   - Scroll down to "Your apps" and add a web app
   - Copy the config object
5. Update `frontend/src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 🎯 Usage

1. **Sign Up/Login**: Create an account or sign in with Google
2. **Check URLs**: Enter any URL in the dashboard to check for phishing
3. **View Results**: Get instant feedback with confidence scores
4. **Stay Protected**: Use PhishGuard to verify suspicious links

## 🔧 API Endpoints

### Backend API

- `POST /predict` - Check URL for phishing
  - Input: `{"url": "https://example.com"}`
  - Output: `{"prediction": "safe/phishing", "confidence": 0.95, "url": "https://example.com"}`

- `GET /health` - Health check
  - Output: `{"status": "healthy", "model_loaded": true}`

## 🧠 ML Model Details

- **Algorithm**: Decision Tree Classifier
- **Training Data**: 549,346 URLs (392,924 safe, 156,422 phishing)
- **Accuracy**: 90%
- **Features**: 19 lexical features including URL length, domain analysis, special characters, etc.

## 🎨 Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- Framer Motion
- Firebase Authentication
- React Router

### Backend
- Flask
- scikit-learn
- pandas
- numpy
- joblib

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist folder
```

### Backend (Heroku/Railway)
```bash
cd backend
# Add Procfile: web: python app.py
# Deploy with your preferred platform
```

## 📝 Notes

- The model file `phishing_url_detector.pkl` should be placed in `backend/model/`
- Make sure to update CORS settings in Flask if deploying to different domains
- Firebase project must have Authentication enabled
- Backend must be running for URL checking to work

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
