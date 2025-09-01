import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter, Sparkles, Code, Rocket } from 'lucide-react';

const Home = () => {
  const profileImagePath = '/IMG-20190701-WA0001.jpg';
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sabir111', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sabirali111', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/@ImSabir_', label: 'Twitter' },
  ];

  const floatingIcons = [
    { icon: Code, delay: 0, x: -20, y: -30 },
    { icon: Rocket, delay: 0.5, x: 25, y: -15 },
    { icon: Sparkles, delay: 1, x: -15, y: 25 },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="section-padding min-h-screen flex items-center relative">
        {/* Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {floatingIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0], 
                scale: [0, 1, 0],
                x: [0, item.x, 0],
                y: [0, item.y, 0]
              }}
              transition={{ 
                duration: 6, 
                delay: item.delay, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute text-primary-400/20 dark:text-primary-600/20"
              style={{
                left: `${50 + item.x}%`,
                top: `${50 + item.y}%`
              }}
            >
              <item.icon size={40} />
            </motion.div>
          ))}
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
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    Hello, I'm
                  </p>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    Sabir
                  </motion.span>{' '}
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-primary-600 dark:text-primary-400"
                  >
                    Ali
                  </motion.span>
                </motion.h1>
                
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
                >
                  Full Stack Developer
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
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
                  className="btn-primary flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
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
                    className="btn-secondary flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
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
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      rotate: [0, -10, 10, 0]
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px]">
                <motion.div
                  animate={{ 
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 1) 100%)",
                      "linear-gradient(135deg, rgba(147, 197, 253, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(255, 255, 255, 1) 100%)",
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 50%, rgba(255, 255, 255, 1) 100%)"
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl"
                />
                
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-700 rounded-full opacity-60"
                />
                
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-32 right-20 w-16 h-16 bg-primary-300 dark:bg-primary-600 rounded-full opacity-60"
                />
                
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-32 left-20 w-12 h-12 bg-primary-400 dark:bg-primary-500 rounded-full opacity-60"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
                    className="text-center space-y-6"
                  >
                    <motion.div
                      // whileHover={{ scale: 1.05, rotate: 5 }}
                      className="relative"
                    >
                      <motion.img
                        src={profileImagePath}
                        alt="Sabir Ali - Full Stack Developer"
                        className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover mx-auto shadow-2xl border-4 border-white dark:border-gray-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                        whileHover={{ 
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                          borderColor: "rgb(59, 130, 246)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white dark:border-gray-700" style={{display: 'none'}}>
                        <span className="text-white text-4xl lg:text-5xl font-bold">S</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                      className="space-y-2"
                    >
                      <motion.p
                        animate={{ 
                          color: ["rgb(107, 114, 128)", "rgb(59, 246, 202)", "rgb(107, 114, 128)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="text-gray-600 dark:text-gray-400 font-medium"
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

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-padding bg-white dark:bg-gray-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '1+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Completed' },
              { number: '15+', label: 'Happy Clients' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
