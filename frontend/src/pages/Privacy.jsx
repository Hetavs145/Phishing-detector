import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300">
            Your privacy is important to us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-semibold text-cyber-blue mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              PhishGuard collects minimal information necessary to provide our service. We only collect 
              your email address for authentication purposes and URLs you choose to analyze for phishing detection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-green mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Your information is used solely to provide the phishing detection service. URLs are analyzed 
              using our machine learning model and are not stored permanently. We do not share your 
              personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-pink mb-4">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your data. All communications 
              are encrypted, and we use secure authentication methods to ensure your account safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-blue mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:vaquahedits@gmail.com" className="text-cyber-blue hover:text-cyber-pink transition-colors duration-200">
                vaquahedits@gmail.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
