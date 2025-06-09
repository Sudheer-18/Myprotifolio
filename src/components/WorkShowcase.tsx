import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Laptop, Coffee, Lightbulb, Zap } from 'lucide-react';

const WorkShowcase: React.FC = () => {
  const workImages = [
    {
      title: 'Coding Environment',
      description: 'My daily development setup with multiple monitors and clean workspace',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Problem Solving',
      description: 'Deep focus sessions working on complex algorithms and data structures',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Lightbulb,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Full Stack Development',
      description: 'Building responsive web applications with modern technologies',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Laptop,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Terminal Mastery',
      description: 'Command line proficiency for efficient development workflow',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Terminal,
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { label: 'Lines of Code', value: '50K+', icon: Code },
    { label: 'Projects Completed', value: '15+', icon: Zap },
    { label: 'Coffee Consumed', value: '∞', icon: Coffee },
    { label: 'Problems Solved', value: '400+', icon: Lightbulb }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Development Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into my coding environment, problem-solving approach, and development workflow
          </p>
        </motion.div>

        {/* Work Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {workImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Icon overlay */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg`}
                >
                  <item.icon size={24} />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Development Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Coding Philosophy
            </h3>
            <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic max-w-3xl mx-auto">
              "Clean code is not written by following a set of rules. You don't become a software craftsman by learning a list of heuristics. Professionalism and craftsmanship come from values that drive disciplines."
            </blockquote>
            <p className="text-gray-500 dark:text-gray-400 mt-4">- Robert C. Martin</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkShowcase;