import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="hidden md:block bg-dark-card/30 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent mb-4">
                PhishGuard
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Advanced phishing detection powered by machine learning. 
                Protect yourself from malicious websites with 90% accuracy.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyber-blue">🛡️</span>
                </div>
                <div className="w-8 h-8 bg-cyber-green/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyber-green">⚡</span>
                </div>
                <div className="w-8 h-8 bg-cyber-pink/20 rounded-lg flex items-center justify-center">
                  <span className="text-cyber-pink">🎯</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Support */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:vaquahedits@gmail.com"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vaquahedits@gmail.com"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    Bug Reports
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:vaquahedits@gmail.com"
                    className="text-gray-400 hover:text-cyber-blue transition-colors duration-200"
                  >
                    General Inquiries
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 PhishGuard. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-cyber-blue transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-cyber-blue transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
