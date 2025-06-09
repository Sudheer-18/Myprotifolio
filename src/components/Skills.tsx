import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  Settings, 
  Monitor,
  Cpu,
  Palette,
  Zap,
  Cloud,
  Terminal,
  FileCode
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C', icon: FileCode },
        { name: 'C++', icon: Cpu },
        { name: 'Java', icon: Code },
        { name: 'Python', icon: Code },
        { name: 'JavaScript', icon: FileCode }
      ],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'HTML5', icon: Globe },
        { name: 'CSS3', icon: Palette },
        { name: 'React.js', icon: Zap },
        { name: 'Next.js', icon: Zap },
        { name: 'Tailwind CSS', icon: Palette },
        { name: 'Bootstrap', icon: Palette }
      ],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', icon: Server },
        { name: 'Express.js', icon: Server },
        { name: 'REST APIs', icon: Zap },
        { name: 'GraphQL', icon: Zap },
        { name: 'JWT', icon: Settings },
        { name: 'OAuth', icon: Settings }
      ],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', icon: Database },
        { name: 'MySQL', icon: Database },
        { name: 'PostgreSQL', icon: Database },
        { name: 'Firebase', icon: Cloud },
        { name: 'Redis', icon: Database },
        { name: 'SQLite', icon: Database }
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Tools & Technologies',
      icon: Settings,
      skills: [
        { name: 'Git', icon: Settings },
        { name: 'Docker', icon: Settings },
        { name: 'AWS', icon: Cloud },
        { name: 'Vercel', icon: Cloud },
        { name: 'Postman', icon: Settings },
        { name: 'VS Code', icon: FileCode }
      ],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Operating Systems',
      icon: Monitor,
      skills: [
        { name: 'Linux', icon: Terminal },
        { name: 'Unix', icon: Terminal },
        { name: 'Windows', icon: Monitor },
        { name: 'Ubuntu', icon: Terminal },
        { name: 'CentOS', icon: Terminal },
        { name: 'macOS', icon: Monitor }
      ],
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  const allSkills = skillCategories.flatMap(category => category.skills.map(skill => skill.name));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I work with
          </p>
        </motion.div>

        {/* Animated Marquee */}
        <div className="mb-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl py-6">
            <motion.div
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {[...allSkills, ...allSkills].map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium border border-gray-200 dark:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <category.icon size={24} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg border border-gray-200 dark:border-gray-600 cursor-default hover:shadow-md transition-all duration-200"
                  >
                    <skill.icon size={16} className="text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Code size={32} />
              </div>
              <div className="text-lg font-bold mb-1">5+</div>
              <div className="text-blue-100 text-sm">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Globe size={32} />
              </div>
              <div className="text-lg font-bold mb-1">6+</div>
              <div className="text-blue-100 text-sm">Frontend Technologies</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Server size={32} />
              </div>
              <div className="text-lg font-bold mb-1">6+</div>
              <div className="text-blue-100 text-sm">Backend Tools</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Database size={32} />
              </div>
              <div className="text-lg font-bold mb-1">6+</div>
              <div className="text-blue-100 text-sm">Database Systems</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;