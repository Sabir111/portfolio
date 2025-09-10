import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, Sparkles, Code, Rocket, Star, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ParticleSystem from '../components/ParticleSystem';

const Home = () => {
  const { isDark } = useTheme();
  const profileImagePath = '/IMG-20190701-WA0001.jpg';
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sabir111', label: 'GitHub', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sabirali111', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/@ImSabir_', label: 'Twitter', color: 'hover:text-sky-500 dark:hover:text-sky-400' },
  ];

  const floatingIcons = [
    { icon: Code, delay: 0, x: -20, y: -30, color: 'text-blue-500/30' },
    { icon: Rocket, delay: 0.5, x: 25, y: -15, color: 'text-purple-500/30' },
    { icon: Sparkles, delay: 1, x: -15, y: 25, color: 'text-pink-500/30' },
    { icon: Star, delay: 1.5, x: 30, y: 20, color: 'text-yellow-500/30' },
    { icon: Zap, delay: 2, x: -25, y: -10, color: 'text-green-500/30' },
  ];

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Particle System Background */}
      <ParticleSystem particleCount={60} isDark={isDark} />
      
      <section className="section-padding min-h-screen flex items-center relative z-10">
        {/* Enhanced Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0.4, 0.8, 0], 
                scale: [0, 1.2, 0.8, 1.2, 0],
                x: [0, item.x * 2, item.x, item.x * 1.5, 0],
                y: [0, item.y * 2, item.y, item.y * 1.5, 0],
                rotate: [0, 180, 360, 540, 720]
              }}
              transition={{ 
                duration: 8, 
                delay: item.delay, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute ${item.color} floating-3d transform-3d`}
              style={{
                left: `${50 + item.x}%`,
                top: `${50 + item.y}%`,
                filter: 'blur(0.5px)',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.5, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <item.icon size={50} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Gradient Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 60%)",
                "radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.4) 0%, transparent 60%)",
                "radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.4) 0%, transparent 60%)",
                "radial-gradient(circle at 60% 60%, rgba(255, 180, 120, 0.3) 0%, transparent 60%)",
                "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 60%)"
              ]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 cosmic-bg"
          />
          
          {/* Additional morphing blobs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-primary opacity-20 morphing-blob"
            animate={{
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-secondary opacity-25 morphing-blob"
            animate={{
              scale: [0.8, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-3 h-3 bg-primary-500 rounded-full"
                  />
                  <p className="text-lg font-semibold text-super-contrast">
                    Hello, I'm
                  </p>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="text-5xl lg:text-6xl font-bold leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-super-contrast"
                  >
                    Sabir
                  </motion.span>{' '}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                    style={{
                      WebkitTextStroke: '1px rgba(102, 126, 234, 0.3)',
                      // textShadow: '0 0 20px rgba(102, 126, 234, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)',
                      fontWeight: '800',
                      // filter: 'drop-shadow(0 0 10px rgba(102, 126, 234, 0.3))'
                    }}
                  >
                    Ali
                  </motion.span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"
                  style={{
                    WebkitTextStroke: '1px rgba(240, 147, 251, 0.3)',
                    // textShadow: '0 0 15px rgba(240, 147, 251, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)',
                    fontWeight: '700',
                    filter: 'drop-shadow(0 0 8px rgba(240, 147, 251, 0.3))'
                  }}
                >
                  Full Stack Developer
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-lg leading-relaxed max-w-lg text-theme-secondary"
              >
                I build exceptional digital experiences that combine beautiful design with powerful functionality. 
                Passionate about creating innovative solutions that make a difference.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/CV.pdf"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary btn-bounce btn-ripple flex items-center justify-center space-x-2 shadow-glass hover:shadow-xl transition-all duration-300"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="btn-secondary btn-bounce btn-ripple flex items-center justify-center space-x-2 shadow-glass hover:shadow-xl transition-all duration-300"
                  >
                    <Mail size={20} />
                    <span>Contact Me</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      rotate: [0, -15, 15, 0],
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative p-4 rounded-xl glass-ultra text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-glass hover:shadow-2xl group overflow-hidden magnetic`}
                    aria-label={social.label}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <social.icon size={24} />
                    </motion.div>
                    
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-primary rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      whileHover={{ scale: 1.2 }}
                    />
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                    />
                    
                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      whileHover={{ opacity: 1, y: -50, scale: 1 }}
                      className="absolute left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 text-xs rounded-lg pointer-events-none"
                    >
                      {social.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 dark:border-t-gray-200"></div>
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Background decoration */}
                <motion.div
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 0.9) 100%)",
                      "linear-gradient(135deg, rgba(147, 197, 253, 0.1) 0%, rgba(255, 119, 198, 0.1) 50%, rgba(255, 255, 255, 0.9) 100%)",
                      "linear-gradient(135deg, rgba(255, 119, 198, 0.1) 0%, rgba(120, 219, 255, 0.1) 50%, rgba(255, 255, 255, 0.9) 100%)",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 0.9) 100%)"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl glass-card -z-10"
                />
                
                {/* Subtle decorative elements */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-sm"
                />
                
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 5, 0],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-secondary rounded-full opacity-25 blur-sm"
                />
                
                <div className="relative p-8 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    className="text-center space-y-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative w-48 h-48 lg:w-56 lg:h-56 mx-auto">
                        <motion.img
                          src={profileImagePath}
                          alt="Sabir Ali - Full Stack Developer"
                          className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                          whileHover={{ 
                            borderColor: "rgb(59, 130, 246)",
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Fallback avatar */}
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-700" style={{display: 'none'}}>
                          <span className="text-white text-5xl lg:text-6xl font-bold">SA</span>
                        </div>
                        
                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 blur-xl"
                          whileHover={{ opacity: 0.2 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                      className="space-y-3"
                    >
                      <motion.h3
                        className="text-2xl font-bold text-super-contrast"
                        whileHover={{ scale: 1.05 }}
                      >
                        Sabir Ali
                      </motion.h3>
                      <motion.p
                        className="text-lg text-primary-980 dark:text-primary-200 font-semibold"
                      >
                        Full Stack Developer
                      </motion.p>
                      <motion.p
                        animate={{ 
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="font-semibold text-super-contrast"
                      >
                        Ready to build something amazing?
                      </motion.p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
