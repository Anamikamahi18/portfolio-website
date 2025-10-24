import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

function Experience() {
  const timeline = [
    {
      type: 'work',
      icon: <FaBriefcase className="text-blue-600" />,
      title: 'Full Stack Web Developer Intern',
      org: 'MashupStack, Thiruvananthapuram',
      date: '2025',
      desc: 'Worked on full stack web applications using React and Django.',
    },
    {
      type: 'edu',
      icon: <FaGraduationCap className="text-green-600" />,
      title: 'M.Sc. Mathematics',
      org: 'Mar Ivanios College, Thiruvananthapuram',
      date: '2023',
      desc: 'Master of Science in Mathematics.',
    },
    {
      type: 'edu',
      icon: <FaGraduationCap className="text-green-600" />,
      title: 'B.Sc. Mathematics',
      org: 'Mar Ivanios College, Thiruvananthapuram',
      date: '',
      desc: 'Bachelor of Science in Mathematics.',
    },
  ];

  return (
    <motion.section
      id="experience"
      className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">Experience & Education</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 w-1 h-full bg-blue-100 rounded"></div>
          <ul className="space-y-8 sm:space-y-10">
            {timeline.map((item, idx) => (
              <li key={idx} className="relative flex items-start">
                <div className="z-10 w-12 h-12 flex items-center justify-center bg-white border-2 border-blue-200 rounded-full shadow text-2xl absolute left-0 top-0">
                  {item.icon}
                </div>
                <div className="ml-20 bg-white rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition-shadow duration-300 w-full">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <div className="text-blue-700 font-medium mb-1">{item.org}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Experience;