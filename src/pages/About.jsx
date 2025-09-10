import { motion } from 'framer-motion';
import { Calendar, MapPin, Mail, Phone, Globe, Award, GraduationCap, Briefcase, Heart, Coffee, Music, Book } from 'lucide-react';

const About = () => {
  const profileImagePath = '/IMG-20190701-WA0001.jpg';
  
  const personalInfo = [
    { icon: Calendar, label: 'Birthday', value: 'July 02 1998' },
    { icon: MapPin, label: 'Location', value: 'Mayur Vihar Phase-3, New Delhi, India' },
    { icon: Mail, label: 'Email', value: 'sabiralitanveer6@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9759998880' },
    
  ];

  const journey = [
    {
      year: '2024 - Present',
      title: 'Full Stack Developer',
      company: 'Freelance',
      description: 'Building modern web applications using React, Node.js, and modern technologies.',
      icon: Briefcase
    },
    {
      year: '2023 - 2024',
      title: 'Frontend Developer',
      company: 'Learning & Projects',
      description: 'Focused on mastering React, JavaScript, and modern frontend development.',
      icon: GraduationCap
    },
    {
      year: '2022 - 2023',
      title: 'Web Development',
      company: 'Self Learning',
      description: 'Started learning HTML, CSS, and JavaScript fundamentals.',
      icon: Book
    }
  ];

  const interests = [
    { icon: Coffee, label: 'Coffee', description: 'Love exploring new coffee shops' },
    { icon: Music, label: 'Music', description: 'Listening to various genres' },
    { icon: Book, label: 'Reading', description: 'Tech blogs and programming books' },
    { icon: Heart, label: 'Fitness', description: 'Staying active and healthy' }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-super-contrast mb-4">
              About Me
            </h1>
            <p className="text-xl text-super-contrast max-w-2xl mx-auto">
              Get to know me better - my journey, skills, and what drives me in the world of technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image Section - No animations as requested */}
            <div className="lg:col-span-1">
              <div className="relative">
                <img
                  src={profileImagePath}
                  alt="Sabir Ali - Full Stack Developer"
                  className="w-48 h-48 mx-auto mb-6 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-700" style={{display: 'none'}}>
                  <span className="text-white text-6xl font-bold">S</span>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-super-contrast">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-super-contrast leading-relaxed">
                  I'm a passionate Full Stack Developer with a love for creating innovative digital solutions. 
                  My journey in technology started with curiosity and has evolved into a deep passion for building 
                  applications that make a difference in people's lives.
                </p>
                <p className="text-lg text-super-contrast leading-relaxed">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
                  When I'm not coding, you'll find me exploring new coffee shops, listening to music, or reading 
                  about the latest tech trends.
                </p>
              </motion.div>

              {/* Personal Information */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -2,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="flex items-center space-x-3 p-4 rounded-lg glass-card-hover hover-scale-up transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-300"
                    >
                      <info.icon size={20} />
                    </motion.div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {info.label}
                      </p>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-padding bg-gray-50 dark:bg-gray-800"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The path that led me to where I am today in the world of technology.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800 z-10"
                  />
                  
                  {/* Content */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
                    }}
                    className={`w-full lg:w-5/12 p-6 rounded-xl glass-card-hover transition-all duration-300 cursor-pointer ${
                      index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4"
                    >
                      <item.icon size={24} />
                    </motion.div>
                    
                    <div className="space-y-2">
                      <motion.p
                        whileHover={{ color: "rgb(59, 130, 246)" }}
                        className="text-sm font-semibold text-primary-600 dark:text-primary-400"
                      >
                        {item.year}
                      </motion.p>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interests Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-padding"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              When I'm Not Coding
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These are the things that keep me inspired and balanced in life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="p-6 rounded-xl glass-card-hover transition-all duration-300 cursor-pointer text-center group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    color: "rgb(59, 130, 246)"
                  }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-300"
                >
                  <interest.icon size={32} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {interest.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
