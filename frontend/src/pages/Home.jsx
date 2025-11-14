import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
              PhishGuard
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect yourself from phishing attacks with our advanced AI-powered URL detection system
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Our machine learning model analyzes URLs in real-time to identify malicious websites with 90% accuracy
            </p>
            
            {user ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/dashboard"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-xl hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 cyber-glow"
                >
                  Go to Dashboard
                </Link>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-xl hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 cyber-glow"
                >
                  Sign up to start checking URLs
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose PhishGuard?</h2>
            <p className="text-xl text-gray-400">Advanced protection powered by machine learning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-effect rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-2xl font-semibold text-cyber-blue mb-4">Advanced Protection</h3>
              <p className="text-gray-300">
                Our Decision Tree model analyzes 19+ URL features to detect phishing attempts with high accuracy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-effect rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-semibold text-cyber-green mb-4">Real-time Analysis</h3>
              <p className="text-gray-300">
                Get instant results with our fast and efficient URL analysis system
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-effect rounded-xl p-8 text-center"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-2xl font-semibold text-cyber-pink mb-4">High Accuracy</h3>
              <p className="text-gray-300">
                Trained on 549,346 URLs with 90% accuracy in detecting malicious websites
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass-effect rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Stay Protected?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of users who trust PhishGuard to keep them safe online
            </p>
            {!user && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-cyber-pink to-cyber-blue text-white font-semibold rounded-xl hover:from-cyber-blue hover:to-cyber-pink transition-all duration-300 cyber-glow-pink"
                >
                  Get Started Now
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
