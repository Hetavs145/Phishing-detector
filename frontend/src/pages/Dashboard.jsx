import { motion } from 'framer-motion';
import URLChecker from '../components/URLChecker';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink bg-clip-text text-transparent">
            Welcome to PhishGuard
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Protect yourself from phishing attacks with our advanced AI-powered URL detection system. 
            Our model has a 90% accuracy rate in identifying malicious websites.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <URLChecker />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-cyber-blue mb-2">Advanced Protection</h3>
            <p className="text-gray-300">
              Our Decision Tree model analyzes multiple URL features to detect phishing attempts with high accuracy.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-cyber-green mb-2">Real-time Analysis</h3>
            <p className="text-gray-300">
              Get instant results with our fast and efficient URL analysis system.
            </p>
          </div>

          <div className="glass-effect rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-cyber-pink mb-2">High Accuracy</h3>
            <p className="text-gray-300">
              Trained on 549,346 URLs with 89% accuracy in detecting malicious websites.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
