#!/bin/bash

echo "🚀 Preparing PhishGuard Backend for Deployment..."
echo ""

# Check if we're in the backend directory
if [ ! -f "app.py" ]; then
    echo "❌ Error: Please run this script from the backend directory"
    exit 1
fi

echo "✅ Checking required files..."

# Check for required files
files=("app.py" "requirements.txt" "Procfile" "runtime.txt")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✓ $file found"
    else
        echo "  ✗ $file missing"
    fi
done

# Check if model file exists
if [ -f "model/phishing_site_model_nb.pkl" ]; then
    echo "  ✓ model/phishing_site_model_nb.pkl found"
    echo "  📊 Model size: $(du -h model/phishing_site_model_nb.pkl | cut -f1)"
else
    echo "  ✗ model/phishing_site_model_nb.pkl missing"
fi

echo ""
echo "📦 Creating deployment package..."

# Create a zip file for easy upload (excluding venv)
zip -r ../phishguard-backend.zip . -x "venv/*" -x "__pycache__/*" -x "*.pyc" -x ".DS_Store"

echo ""
echo "✅ Deployment package created: phishguard-backend.zip"
echo ""
echo "📝 Next steps:"
echo "1. Go to https://railway.app or https://render.com"
echo "2. Create a new project"
echo "3. Upload the backend folder or connect GitHub"
echo "4. Railway/Render will automatically deploy your Flask app"
echo "5. Get your deployment URL"
echo "6. Update frontend URLChecker.jsx with new backend URL"
echo ""
echo "🔗 Useful links:"
echo "  Railway: https://railway.app"
echo "  Render: https://render.com"
echo "  PythonAnywhere: https://www.pythonanywhere.com"
echo ""
