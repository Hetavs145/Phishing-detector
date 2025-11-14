import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent mb-6">
            About PhishGuard
          </h1>
          <p className="text-xl text-gray-300">
            Your trusted partner in the fight against phishing attacks
          </p>
        </motion.div>

        <div className="space-y-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold text-cyber-blue mb-6">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At PhishGuard, we believe that everyone deserves to browse the internet safely. Our mission is to 
              provide cutting-edge phishing detection technology that protects users from malicious websites 
              and cyber threats. We combine advanced machine learning with user-friendly design to create 
              a powerful security tool that anyone can use.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold text-cyber-green mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyber-blue rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">URL Analysis</h3>
                  <p className="text-gray-300">
                    Our system analyzes 19+ lexical features from the URL including length, domain structure, 
                    special characters, and suspicious patterns.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyber-purple rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Machine Learning Detection</h3>
                  <p className="text-gray-300">
                    Our Decision Tree model processes the extracted features to identify phishing patterns 
                    with 89% accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyber-pink rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instant Results</h3>
                  <p className="text-gray-300">
                    Get immediate feedback with confidence scores and clear safety recommendations.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-effect rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold text-cyber-pink mb-6">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Machine Learning Model</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Decision Tree Classifier</li>
                  <li>• Trained on 549,346 URLs</li>
                  <li>• 90% accuracy rate</li>
                  <li>• Real-time processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Security Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• HTTP protocol detection</li>
                  <li>• Domain analysis</li>
                  <li>• Suspicious pattern recognition</li>
                  <li>• Confidence scoring</li>
                </ul>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-xl p-8"
          >
            <h2 className="text-3xl font-semibold text-cyber-blue mb-6">Why Phishing Detection Matters</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Phishing attacks are one of the most common and dangerous cyber threats today. Attackers use 
              deceptive websites to steal personal information, financial data, and login credentials. 
              PhishGuard helps you stay one step ahead by identifying these malicious sites before they 
              can cause harm.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h4 className="font-semibold text-white mb-2">Protect Your Data</h4>
                <p className="text-sm text-gray-400">Keep your personal information safe</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <h4 className="font-semibold text-white mb-2">Prevent Financial Loss</h4>
                <p className="text-sm text-gray-400">Avoid falling victim to financial scams</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <h4 className="font-semibold text-white mb-2">Stay Secure</h4>
                <p className="text-sm text-gray-400">Browse with confidence and peace of mind</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
