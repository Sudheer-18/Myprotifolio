import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Star, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "1st Place - Programmer's Day",
      description: "Won first place in the coding competition organized during Programmer's Day, showcasing problem-solving skills and coding efficiency.",
      icon: Trophy,
      color: 'from-yellow-500 to-orange-600',
      year: '2024'
    },
    {
      title: '400+ LeetCode Problems',
      description: 'Successfully solved over 400 coding problems on LeetCode, demonstrating consistent practice and strong algorithmic thinking.',
      icon: Code,
      color: 'from-green-500 to-emerald-600',
      year: 'Ongoing'
    },
    {
      title: '4-Star HackerRank Rating',
      description: 'Achieved 4-star rating in Problem Solving on HackerRank, ranking among top performers in competitive programming.',
      icon: Star,
      color: 'from-blue-500 to-cyan-600',
      year: '2024'
    },
    {
      title: 'Codeforces Active Participant',
      description: 'Regular participant in Codeforces contests, continuously improving problem-solving skills and competitive programming expertise.',
      icon: Target,
      color: 'from-purple-500 to-indigo-600',
      year: 'Ongoing'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and milestones that reflect my dedication to continuous learning and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <achievement.icon size={32} />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Decorative border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Quick Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">400+</div>
              <div className="text-blue-100">LeetCode Problems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4⭐</div>
              <div className="text-blue-100">HackerRank Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1st</div>
              <div className="text-blue-100">Competition Place</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">Certifications</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;