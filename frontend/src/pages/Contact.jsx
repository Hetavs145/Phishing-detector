import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-pink bg-clip-text text-transparent mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team for support, feedback, or questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-900/20 border border-green-500 rounded-lg text-green-400"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-card border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyber-blue focus:border-transparent text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:from-cyber-purple hover:to-cyber-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cyber-glow"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Support</h3>
                    <p className="text-gray-300 mb-2">Get help with your account or technical issues</p>
                    <a 
                      href="mailto:vaquahedits@gmail.com" 
                      className="text-cyber-blue hover:text-cyber-pink transition-colors duration-200"
                    >
                      vaquahedits@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyber-green/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">General Inquiries</h3>
                    <p className="text-gray-300 mb-2">Questions about our service or partnerships</p>
                    <a 
                      href="mailto:vaquahedits@gmail.com" 
                      className="text-cyber-blue hover:text-cyber-pink transition-colors duration-200"
                    >
                      vaquahedits@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyber-pink/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🐛</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Bug Reports</h3>
                    <p className="text-gray-300 mb-2">Found a bug? Let us know so we can fix it</p>
                    <a 
                      href="mailto:vaquahedits@gmail.com" 
                      className="text-cyber-blue hover:text-cyber-pink transition-colors duration-200"
                    >
                      vaquahedits@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Response Time</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Support requests:</span>
                  <span className="text-cyber-green">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>General inquiries:</span>
                  <span className="text-cyber-blue">Within 48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Bug reports:</span>
                  <span className="text-cyber-pink">Within 72 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
