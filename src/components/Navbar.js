import React, { useState } from 'react';

function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];
 

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 transition-colors">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl text-gray-900 dark:text-white">Anamika M</div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400">{link.label}</a>
            </li>
          ))}
        </ul>
       
        {/* Hamburger Icon for mobile/tablet */}
        <button
          className="md:hidden ml-4 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle navigation menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-900 dark:text-white">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        {/* Dark mode toggle */}
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
      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800">
          <ul className="flex flex-col py-2 px-6 space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 px-2 rounded hover:bg-blue-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Social links always in a line for mobile */}
          <div className="flex flex-row justify-center items-center gap-4 py-2 px-6 border-t border-gray-200 dark:border-gray-800">
            {socialLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? "_blank" : undefined}
                rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-900 dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;