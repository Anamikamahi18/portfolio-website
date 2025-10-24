import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-100 via-blue-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 overflow-hidden transition-colors px-4 sm:px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse left-[-5rem] top-[-5rem]" />
        <div className="absolute w-56 h-56 bg-purple-200 rounded-full opacity-30 blur-2xl animate-pulse right-[-4rem] bottom-[-4rem]" />
      </div>
  <div className="flex flex-col items-center z-10 w-full max-w-2xl">
        {/* Profile Image */}
        <img
          src="/profile.png"
          alt="Anamika M"
          loading="lazy"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-6 border-4 border-white shadow transition-transform duration-300 hover:scale-105"
        />
  <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Hi, I'm Anamika M. 👋</h1>
  <h2 className="text-lg sm:text-xl font-medium mb-2 text-center">
          <Typewriter
            words={["Full Stack Developer", "Python Enthusiast", "AI Learner", "React | Django"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h2>
  <p className="mb-4 text-center max-w-xl text-base sm:text-lg">I love building modern web applications and solving problems.</p>
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 w-full justify-center items-center">
          <a href="#projects" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">View My Work</a>
          <a
            href="/ANAMIKA M-Resume.pdf"
            download
            className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            Download Resume
          </a>
        </div>
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center items-center">
          <a href="https://github.com/Anamikamahi18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com/in/anamika-m-16a09321b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href="mailto:anamikamahi18@gmail.com" className="hover:text-blue-600">Email</a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;