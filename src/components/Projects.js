
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Projects() {
  // Only show specified projects
  const projects = [
    {
      name: 'Recipe Sharing Platform',
      description: 'Share and discover recipes. Built with React and Django.',
      tags: ['React', 'Django', 'Recipes'],
      github: 'https://github.com/Anamikamahi18/Recipe-Sharing-Platform',
      demo: 'https://github.com/Anamikamahi18/Recipe-Sharing-Platform',
    },
    {
      name: 'OTT Streaming Platform',
      description: 'A full-featured OTT streaming platform with user authentication, video streaming, and admin dashboard. Built with React, Django, and MySQL.',
      tags: ['React', 'Django', 'MySQL', 'Streaming', 'API'],
      github: 'https://github.com/Anamikamahi18/OTT-Streaming-Platform',
      demo: 'https://github.com/Anamikamahi18/OTT-Streaming-Platform',
    },
    {
      name: 'Daily Water Intake Tracker',
      description: 'Track your daily water intake and hydration stats. Built with React and Django REST API.',
      tags: ['React', 'Django', 'API', 'Health'],
      github: 'https://github.com/Anamikamahi18/Water-Intake-Tracker',
      demo: 'https://github.com/Anamikamahi18/Water-Intake-Tracker',
    },
    {
      name: 'Bookmarking Site',
      description: 'Save and organize your favorite links. Built with React and Django.',
      tags: ['React', 'Django', 'Bookmarks'],
      github: 'https://github.com/Anamikamahi18/personal-bookmarking-site',
      demo: 'https://personal-bookmarking-site.vercel.app',
    },
    {
      name: 'Scientific Calculator',
      description: 'A scientific calculator with advanced functions. Built with React.',
      tags: ['React', 'Calculator', 'Science'],
      github: 'https://github.com/Anamikamahi18/scientific-calculator',
      demo: 'https://scientific-calculator-six-nu.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-yellow-50 via-blue-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-blue-700 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col">
              {/* No image shown as requested */}
              <h3 className="font-semibold text-lg mb-2 text-blue-700 dark:text-white">{project.name}</h3>
              <p className="mb-2 text-gray-700 dark:text-gray-200">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-xs rounded text-blue-700 dark:text-blue-200">{tag}</span>
                ))}
              </div>
              <div className="mt-auto flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default Projects;