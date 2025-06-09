import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Python IT Specialist',
      issuer: 'Certiport',
      description: 'Comprehensive certification covering Python programming fundamentals, data structures, and application development.',
      color: 'from-blue-500 to-indigo-600',
      year: '2024'
    },
    {
      title: 'C++ Programming Certificate',
      issuer: 'Cisco',
      description: 'Advanced certification in C++ programming covering object-oriented programming, memory management, and advanced concepts.',
      color: 'from-green-500 to-teal-600',
      year: '2024'
    },
    {
      title: 'Java Programming',
      issuer: 'HackerRank',
      description: 'Professional certification demonstrating proficiency in Java programming, algorithms, and software development practices.',
      color: 'from-orange-500 to-red-600',
      year: '2024'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my technical expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden perspective-1000"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} text-white shadow-lg`}
                  >
                    <Award size={24} />
                  </motion.div>
                  <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Issued by:
                  </span>
                  <span className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.issuer}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r ${cert.color} text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always working on expanding my skill set and staying current with the latest technologies. 
              Currently pursuing additional certifications in cloud computing and advanced web development.
            </p>
            <div className="flex justify-center space-x-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                AWS in Progress
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Docker Certification
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;