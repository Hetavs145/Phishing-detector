import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const MobileBottomNav = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: 'ℹ️' },
    { path: '/contact', label: 'Contact', icon: '📞' },
    ...(user ? [{ path: '/dashboard', label: 'Dashboard', icon: '🛡️' }] : [{ path: '/login', label: 'Login', icon: '🔐' }])
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-card/90 backdrop-blur-md border-t border-gray-700 z-50">
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex flex-col items-center justify-center flex-1 py-2"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={`text-2xl mb-1 transition-colors duration-200 ${
                isActive(item.path) ? 'text-cyber-blue' : 'text-gray-400'
              }`}
            >
              {item.icon}
            </motion.div>
            <span
              className={`text-xs font-medium transition-colors duration-200 ${
                isActive(item.path) ? 'text-cyber-blue' : 'text-gray-400'
              }`}
            >
              {item.label}
            </span>
            {isActive(item.path) && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-cyber-blue rounded-full"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomNav;
