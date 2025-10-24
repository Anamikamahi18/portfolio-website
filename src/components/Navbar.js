import React from 'react';

function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl text-gray-900 dark:text-white">Anamika M</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a></li>
        </ul>
        <button
          onClick={() => setDark(d => !d)}
          className="ml-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-800 transition"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <span role="img" aria-label="Light mode">🌞</span>
          ) : (
            <span role="img" aria-label="Dark mode">🌙</span>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;