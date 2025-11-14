import { useState } from 'react';
import { motion } from 'framer-motion';

const URLChecker = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkURL = async () => {
    if (!url.trim()) {
      setError('Please enter a URL to check');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || 'Failed to check URL');
      }
    } catch (err) {
      setError('Network error. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkURL();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-effect rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent">
          URL Security Checker
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Enter URL to check
            </label>
            <div className="flex gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="https://example.com"
                className="flex-1 px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={checkURL}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cyber-glow"
              >
                {loading ? 'Checking...' : 'Check URL'}
              </motion.button>
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400"
            >
              {error}
            </motion.div>
          )}

          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center py-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin"></div>
                <span className="text-cyber-blue">Analyzing URL...</span>
              </div>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-xl border-2 ${
                result.prediction === 'safe'
                  ? 'bg-green-900/20 border-green-500 cyber-glow-green'
                  : 'bg-red-900/20 border-red-500 cyber-glow-pink'
              }`}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {result.prediction === 'safe' ? '✅' : '🚨'}
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${
                  result.prediction === 'safe' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {result.prediction === 'safe' ? 'Safe URL' : 'Phishing Detected'}
                </h3>
                <p className="text-gray-300 mb-4">
                  Confidence: {(result.confidence * 100).toFixed(1)}%
                </p>
                <div className="text-sm text-gray-400">
                  <p>URL: {result.url}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default URLChecker;
