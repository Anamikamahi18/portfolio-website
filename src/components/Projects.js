
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Projects() {
  // Manually define your projects (excluding the portfolio itself)
  const projects = [
    {
      name: 'OTT Streaming Platform',
      description: 'A full-featured OTT streaming platform built with React, Django, and MySQL. Includes user authentication, video streaming, and admin dashboard.',
      tags: ['React', 'Django', 'MySQL', 'Streaming', 'API'],
      github: 'https://github.com/Anamikamahi18/OTT-Streaming-Platform',
      demo: 'https://ott-demo.example.com',
      image: '',
    },
    {
      name: 'Daily Water Intake Tracker',
      description: 'A web app to track daily water intake and hydration stats. Built with React and Django REST API.',
      tags: ['React', 'Django', 'API', 'Health'],
      github: 'https://github.com/Anamikamahi18/Water-Intake-Tracker',
      demo: 'https://watertracker-demo.example.com',
      image: '',
    },
    {
      name: 'Student Management System',
      description: 'A management system for schools to handle students, courses, and grades. Built with Django and MySQL.',
      tags: ['Django', 'MySQL', 'Admin', 'Education'],
      github: 'https://github.com/Anamikamahi18/Student-Management-System',
      demo: '',
      image: '',
    },
    {
      name: 'Weather App',
      description: 'A simple weather dashboard using React and OpenWeatherMap API.',
      tags: ['React', 'API', 'Weather'],
      github: 'https://github.com/Anamikamahi18/Weather-App',
      demo: '',
      image: '',
    },
    {
      name: 'Expense Tracker',
      description: 'Track your expenses and visualize spending habits. Built with React and local storage.',
      tags: ['React', 'Finance'],
      github: 'https://github.com/Anamikamahi18/Expense-Tracker',
      demo: '',
      image: '',
    },
    // Add more projects as needed
  ];

  return (
    <>
      <motion.section
        id="projects"
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9fa] p-4 sm:p-6 rounded shadow cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                {/* Project thumbnail placeholder or image */}
                <div className="w-full h-32 sm:h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500 text-4xl">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name + ' thumbnail'}
                      loading="lazy"
                      className="object-cover w-full h-full rounded"
                    />
                  ) : (
                    <span>📦</span>
                  )}
                </div>
                <h3 className="font-semibold mb-2 text-lg flex items-center">
                  {project.name}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:underline" onClick={e => e.stopPropagation()}><FaExternalLinkAlt /></a>
                  )}
                </h3>
                <p className="mb-2 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">{tag}</span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
  </motion.section>
    </>
  );
}

export default Projects;