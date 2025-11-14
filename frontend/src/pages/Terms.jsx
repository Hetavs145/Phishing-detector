import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-effect rounded-xl p-8 space-y-8"
        >
          <section>
            <h2 className="text-2xl font-semibold text-cyber-blue mb-4">Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By using PhishGuard, you agree to be bound by these Terms of Service. If you do not agree 
              to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-green mb-4">Service Description</h2>
            <p className="text-gray-300 leading-relaxed">
              PhishGuard provides URL analysis services to help detect potential phishing websites. 
              Our service is provided "as is" and we make no guarantees about the accuracy of our 
              detection results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-pink mb-4">User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed">
              Users are responsible for their own security decisions. PhishGuard is a tool to assist 
              in making informed decisions, but users should exercise their own judgment and follow 
              best security practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-blue mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              PhishGuard shall not be liable for any damages arising from the use of our service. 
              Users acknowledge that phishing detection is not 100% accurate and should not rely 
              solely on our service for security decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyber-green mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
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

export default Terms;
