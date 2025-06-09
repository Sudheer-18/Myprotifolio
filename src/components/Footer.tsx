import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <span>Built with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </motion.div>
              <span>and</span>
              <Code size={16} className="text-blue-500" />
              <span>by Sudheer Kosireddi</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 text-sm"
          >
            © 2024 Sudheer Kosireddi. All rights reserved.
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
              B.Tech ECE Student | Full Stack Developer | Problem Solver
            </p>
            <p className="mt-1">
              "Code is poetry written in logic"
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;