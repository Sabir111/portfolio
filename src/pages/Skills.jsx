import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Users, Zap, TrendingUp, Star } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'React.js', level: 90, icon: Code, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 85, icon: Code, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Node.js', level: 80, icon: Code, color: 'from-green-500 to-green-600' },
    { name: 'HTML/CSS', level: 95, icon: Code, color: 'from-orange-500 to-orange-600' },
    { name: 'MongoDB', level: 75, icon: Database, color: 'from-emerald-500 to-emerald-600' },
    { name: 'Express.js', level: 80, icon: Code, color: 'from-gray-500 to-gray-600' },
    { name: 'TailwindCSS', level: 90, icon: Palette, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Git/GitHub', level: 85, icon: Code, color: 'from-purple-500 to-purple-600' },
    { name: 'REST APIs', level: 85, icon: Cloud, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Responsive Design', level: 90, icon: Palette, color: 'from-pink-500 to-pink-600' },
    { name: 'TypeScript', level: 70, icon: Code, color: 'from-blue-600 to-blue-700' },
    { name: 'Next.js', level: 75, icon: Code, color: 'from-black to-gray-800' }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90, icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Communication', level: 85, icon: Users, color: 'from-blue-400 to-cyan-500' },
    { name: 'Team Collaboration', level: 88, icon: Users, color: 'from-green-400 to-emerald-500' },
    { name: 'Time Management', level: 82, icon: TrendingUp, color: 'from-purple-400 to-indigo-500' },
    { name: 'Adaptability', level: 87, icon: Zap, color: 'from-pink-400 to-rose-500' },
    { name: 'Creativity', level: 85, icon: Star, color: 'from-amber-400 to-yellow-500' }
  ];

  const categories = [
    {
      title: 'Frontend Development',
      description: 'Creating beautiful and responsive user interfaces',
      icon: Palette,
      skills: ['React.js', 'JavaScript', 'HTML/CSS', 'TailwindCSS', 'Responsive Design']
    },
    {
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs',
      icon: Code,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'TypeScript']
    },
    {
      title: 'Tools & Version Control',
      description: 'Managing code and collaborating with teams',
      icon: Cloud,
      skills: ['Git/GitHub', 'VS Code', 'Postman', 'npm/yarn']
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and soft skills that I bring to every project.
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My expertise in various programming languages, frameworks, and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <skill.icon size={24} />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      className="text-sm font-semibold text-primary-600 dark:text-primary-400"
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ 
                          x: [-100, 100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: 2 + index * 0.1,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 bg-white opacity-30 rounded-full"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Essential interpersonal and professional skills that complement my technical expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer text-center group"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, 0],
                    color: "rgb(59, 130, 246)"
                  }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <skill.icon size={32} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                <div className="relative">
                  <div className="w-24 h-24 mx-auto relative">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        className={`text-gradient-to-r ${skill.color}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.level / 100) }}
                        transition={{ duration: 1.5, delay: 1.5 + index * 0.1, ease: "easeOut" }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Skill Categories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Organized overview of my skills across different development areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors duration-300"
                >
                  <category.icon size={28} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 + index * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ x: 5, color: "rgb(59, 130, 246)" }}
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full"
                      />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
