import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Globe, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const internships = [
    {
      role: 'Java Intern',
      company: 'Technical Hub',
      duration: '2024',
      description: 'Developed Java applications focusing on object-oriented programming principles, data structures, and algorithm implementation.',
      icon: Code,
      color: 'from-orange-500 to-red-600'
    },
    {
      role: 'Web Development Intern',
      company: 'Technical Hub',
      duration: '2024',
      description: 'Built responsive web applications using modern frameworks including React, Node.js, and implemented RESTful APIs.',
      icon: Globe,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      role: 'DSA Intern',
      company: 'Technical Hub',
      duration: '2024',
      description: 'Focused on data structures and algorithms, problem-solving techniques, and competitive programming strategies.',
      icon: Database,
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My internship experiences that have shaped my technical skills and professional growth
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${internship.color} text-white`}>
                        <internship.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {internship.role}
                        </h3>
                        <div className="flex items-center space-x-2 mb-4">
                          <Briefcase size={16} className="text-gray-500 dark:text-gray-400" />
                          <span className="text-gray-600 dark:text-gray-300 font-medium">
                            {internship.company}
                          </span>
                          <span className="text-gray-400 dark:text-gray-500">•</span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {internship.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {internship.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${internship.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <internship.icon size={24} />
                  </motion.div>
                  {index < internships.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>
                  )}
                </div>

                <div className="flex-1 lg:opacity-0"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;