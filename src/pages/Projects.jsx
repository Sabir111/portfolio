import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye, Code, Globe, Calendar, Users, Star } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Developed a Mini Amazon Clone using React, featuring product listing, search, add-to-cart, and checkout functionality. Implemented responsive UI and state management for smooth user experience',
      image: '/project1.jpg',
      technologies: ['React Router DOM', 'React Context API', 'Axios', 'localStorage', 'Hot Module Replacement'],
      category: 'frontend',
      github: 'https://github.com/Sabir111/mini-amazon',
      live: 'https://sabir-mini-amazon.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A task management application built with React. Users can add, mark as complete, edit and delete tasks. The app uses Context API for state management and ensures persistent storage using localStorage. Designed with responsive UI using Tailwind CSS for seamless experience across devices.',
      image: '/project2.jpg',
      technologies: ['React', 'React Context API', 'TailwindCSS', 'useState'],
      category: 'frontend',
      github: 'https://github.com/Sabir111/todo-app',
      live: 'https://sabir-todo.vercel.app',
      featured: true,
    },
    
  ];

  const filters = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { key: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-super-contrast mb-4">
            My Projects
          </h1>
          <p className="text-xl text-super-contrast max-w-2xl mx-auto">
            A collection of projects that showcase my skills, creativity, and passion for building innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <span className="flex items-center space-x-2">
                <span>{filter.label}</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="px-2 py-1 text-xs bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-full"
                >
                  {filter.count}
                </motion.span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 flex items-center justify-center"
                >
                  <div className="text-center p-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-lg flex items-center justify-center text-white"
                    >
                      <Code size={32} />
                    </motion.div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {project.title}
                    </p>
                  </div>
                </motion.div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full shadow-lg"
                  >
                    <Star size={12} className="inline mr-1" />
                    Featured
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  whileHover={{ color: "rgb(59, 130, 246)" }}
                  className="text-xl font-bold text-super-contrast mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-super-contrast mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Stats */}
                

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Github size={16} />
                    </motion.div>
                    <span>Code</span>
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                      <span>Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to life!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Eye size={20} />
              <span>Let's Talk</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
