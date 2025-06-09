import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate B.Tech student specializing in Electronics and Communication Engineering 
                at Aditya College of Engineering and Technology. My journey in technology spans across 
                full-stack development, competitive programming, and problem-solving.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                With a strong foundation in multiple programming languages and frameworks, I enjoy 
                creating innovative solutions and continuously learning new technologies. I've solved 
                400+ problems on LeetCode and actively participate in coding competitions.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Education</h3>
                    <p className="text-gray-600 dark:text-gray-300">B.Tech ECE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">College</h3>
                    <p className="text-gray-600 dark:text-gray-300">ACET</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Mail className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">sudheer13ks@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <Phone className="text-orange-600 dark:text-orange-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 8885711813</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>LeetCode Problems</span>
                  <span className="font-bold">400+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>HackerRank Rating</span>
                  <span className="font-bold">4 ⭐</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Internships</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Certifications</span>
                  <span className="font-bold">3+</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 transform scale-105"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;