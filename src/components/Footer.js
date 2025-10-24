import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center py-4 border-t border-gray-100 dark:border-gray-800 mt-8 transition-colors px-4 sm:px-0">
      <div className="text-xs sm:text-sm">
        © 2025 Anamika M. | Built with <span role="img" aria-label="love">❤️</span> using React.js
      </div>
      <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
        <a href="https://github.com/Anamikamahi18" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/anamika-m-16a09321b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:anamikamahi18@gmail.com" className="hover:text-blue-600">Email</a>
      </div>
    </footer>
  );
}

export default Footer;