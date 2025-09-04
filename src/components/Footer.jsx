import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sabir111', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sabirali111', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/@ImSabir_', label: 'Twitter' },
    { icon: Mail, href: 'mailto:sabiralitanveer6@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 glass-card">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
              >
                <span className="text-white font-bold text-lg">S</span>
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Sabir Ali
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Full-stack developer passionate about creating exceptional digital experiences and innovative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '/about' },
                { name: 'Skills', href: '/skills' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5, color: "rgb(59, 130, 246)" }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Get In Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotate: [0, -10, 10, 0]
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Sabir. All rights reserved.
          </p>
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0 flex items-center space-x-1"
          >
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>using</span>
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400"
            >
              <Code size={14} />
              <span>React & TailwindCSS</span>
            </motion.div>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
