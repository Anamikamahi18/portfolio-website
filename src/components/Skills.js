
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGitAlt, FaAws, FaGithub } from 'react-icons/fa';
import { SiDjango, SiMysql, SiVercel } from 'react-icons/si';

function Skills() {

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend */}
          <div className="bg-white p-4 sm:p-6 rounded shadow text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center space-x-3 text-3xl mb-2 text-orange-500">
              <FaHtml5 /> <FaCss3Alt className="text-blue-500" /> <FaJs className="text-yellow-400" /> <FaReact className="text-blue-400" />
            </div>
            <h3 className="font-semibold mb-2">Frontend</h3>
            <p className="mb-2">HTML, CSS, JavaScript, React</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
          {/* Backend */}
          <div className="bg-white p-4 sm:p-6 rounded shadow text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center space-x-3 text-3xl mb-2 text-green-700">
              <FaPython /> <SiDjango className="text-green-900" />
            </div>
            <h3 className="font-semibold mb-2">Backend</h3>
            <p className="mb-2">Python, Django, REST API</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
          {/* Database */}
          <div className="bg-white p-4 sm:p-6 rounded shadow text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center space-x-3 text-3xl mb-2 text-blue-800">
              <SiMysql /> <FaDatabase />
            </div>
            <h3 className="font-semibold mb-2">Database</h3>
            <p className="mb-2">MySQL</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <span className="text-xs text-gray-500">Intermediate</span>
          </div>
          {/* Tools & Deployment */}
          <div className="bg-white p-4 sm:p-6 rounded shadow text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <div className="flex justify-center space-x-3 text-3xl mb-2 text-gray-700">
              <FaGitAlt /> <FaGithub /> <FaAws className="text-yellow-600" /> <SiVercel />
            </div>
            <h3 className="font-semibold mb-2">Tools & Deployment</h3>
            <p className="mb-2">Git, GitHub, AWS, Vercel, VS Code</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <span className="text-xs text-gray-500">Advanced</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
export default Skills;