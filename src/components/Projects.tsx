import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Droplets,
  Brain,
  Briefcase,
  BookOpen,
} from 'lucide-react';
import { Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Blood Donation Stats Tracker',
      description:
        'A comprehensive web application for tracking blood donation statistics, managing donor information, and organizing donation drives with real-time analytics.',
      icon: Droplets,
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      demoLink: 'https://blood-donation-git-main-venus-projects-54ba1281.vercel.app/',
      githubLink: 'https://github.com/Sudheer-18/BloodDonation',
      gradient: 'from-red-500 to-pink-600',
    },
     {
      title: 'Student Analysis',
      description:
        'This app and website shows analysis of a student, including resume ATS scoring and MCQ tests on selected topics for improvement.',
      icon: BookOpen,
      tech: ['ReactNative', 'Nodejs', 'JavaScript'],
      demoLink: 'https://student-placement-analysis.vercel.app/',
      githubLink: 'https://github.com/Sudheer-18/StudentPlacementAnalysis',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'E-Commerce Website',
      description:
        'Full-featured e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard.',
      icon: ShoppingCart,
      tech: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
      demoLink: '#',
      githubLink: '#',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Memory Game',
      description:
        'Interactive memory game built with vanilla JavaScript featuring different difficulty levels, scoring system, and responsive design.',
      icon: Brain,
      tech: ['React', 'LocalStorage'],
      demoLink: 'https://memory-game-nu-self.vercel.app/',
      githubLink: 'https://github.com/Sudheer-18/MemoryGame',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Job Navigator',
      description:
        'Job Navigator is a web-based project that displays a list of job roles across various domains. It provides detailed descriptions to help students understand each role’s responsibilities and required skills.',
      icon: Briefcase,
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      demoLink: 'https://job-navigator-navy.vercel.app/',
      githubLink: 'https://github.com/Sudheer-18/JobNavigator',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title : "coding assesment",
      description: 'project about mainly to detect the plagrisum .for detecting plagrisum we created the coding assesment',
      icon : Code,
      tech : ['Nextjs','java','springboot'],
      demoLink : 'https://plagarism-check.vercel.app/',
      githubLink : 'https://github.com/Sudheer-18/Plagarism-Check',
      gradient: 'from-purple-500 to-indigo-600',
    }
  ];



  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="p-8">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white mb-6`}
                >
                  <project.icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>

                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
