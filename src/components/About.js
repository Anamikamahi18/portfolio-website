import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Install fuzzywuzzy alternative for JS: fuse.js
import Fuse from 'fuse.js';

const ANAMIKA_FAQ = [
  { key: "name", answer: "My name is Anamika M." },
  { key: "full name", answer: "My full name is Anamika M." },
  { key: "location", answer: "I am from Kerala, India." },
  { key: "email", answer: "My email is anamikamahi18@gmail.com." },
  { key: "skills", answer: "Python, Django, React, AWS, JavaScript, HTML, CSS, SQL, Git, REST APIs, and more." },
  { key: "languages", answer: "English, Malayalam, Hindi." },
  { key: "projects", answer: "I have built an OTT Streaming Platform, Daily Water Intake Tracker, Student Management System, Weather App, and Expense Tracker." },
  { key: "ott", answer: "My OTT Streaming Platform is a full-stack project for streaming video content." },
  { key: "water intake", answer: "My Daily Water Intake Tracker helps users monitor their daily water consumption." },
  { key: "student management", answer: "My Student Management System is a web app for managing student records." },
  { key: "weather app", answer: "My Weather App shows real-time weather data for any city." },
  { key: "expense tracker", answer: "My Expense Tracker helps users manage their personal finances." },
  { key: "education", answer: "M.Sc. Mathematics from Mar Ivanios College, Thiruvananthapuram." },
  { key: "college", answer: "I studied at Mar Ivanios College, Thiruvananthapuram." },
  { key: "linkedin", answer: "Here is my LinkedIn: https://www.linkedin.com/in/anamika-m-16a09321b" },
  { key: "linkedin summary", answer: "I am a passionate full stack developer with experience in Python, Django, React, and AWS. I love building web applications and learning new technologies." },
  { key: "github", answer: "Here is my GitHub: https://github.com/Anamikamahi18" },
  { key: "github repos", answer: "Some of my public repositories: OTT-Streaming-Platform, Water-Intake-Tracker, Student-Management-System, Weather-App, Expense-Tracker." },
  { key: "repositories", answer: "My repositories include projects on Django, React, and full-stack web development." },
  { key: "experience", answer: "Full Stack Developer Intern at MashupStack. Experience in building full-stack web apps." },
  { key: "internship", answer: "I interned at MashupStack as a Full Stack Developer." },
  { key: "interests", answer: "I enjoy building apps, learning new technologies, and solving real-world problems." },
  { key: "achievements", answer: "Completed several successful projects and internships. Always eager to learn and grow." },
  { key: "contact", answer: "You can contact me at anamikamahi18@gmail.com or via the contact form below." },
  { key: "resume", answer: "You can download my resume from the About section." },
  { key: "about", answer: "I am Anamika M, a full stack developer passionate about coding and technology." },
  { key: "profile", answer: "I am a full stack developer with experience in Python, Django, React, and AWS." },
  { key: "hobbies", answer: "I enjoy reading, coding, and exploring new technologies." },
  { key: "goal", answer: "My goal is to create impactful digital experiences with clean, efficient code." },
  // Add more as needed!
];

// Set up Fuse.js for fuzzy searching
const fuse = new Fuse(ANAMIKA_FAQ, {
  keys: ['key'],
  threshold: 0.4, // Lower = stricter, Higher = more tolerant
});

function About() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! Ask me anything about Anamika." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setLoading(true);

    // Fuzzy match the question
    const userQ = input.trim().toLowerCase();
    let answer = null;

    // Try direct match first
    for (let qa of ANAMIKA_FAQ) {
      if (userQ.includes(qa.key)) {
        answer = qa.answer;
        break;
      }
    }
    // If no direct match, use fuzzy search
    if (!answer) {
      const result = fuse.search(userQ);
      if (result.length > 0 && result[0].score < 0.5) {
        answer = result[0].item.answer;
      }
    }
    if (!answer) {
      answer = "Sorry, I can only answer questions about Anamika M's profile, Education, Experience, skills, projects, LinkedIn, and GitHub.";
    }

    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: answer }
      ]);
      setLoading(false);
    }, 500);
    setInput("");
  };

  return (
    <motion.section
      id="about"
      className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-8">
        {/* Profile Photo with hover effect */}
        <div className="flex justify-center mb-6 md:mb-0">
          <img
            src="/profile.png"
            alt="Anamika M"
            loading="lazy"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-full max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">About Me</h2>
          <p className="mb-2 text-base sm:text-lg">Hi, I'm <span className="font-semibold">Anamika M.</span></p>
          <p className="mb-2 text-base">Full Stack Developer Intern at <span className="font-semibold">MashupStack</span></p>
          <p className="mb-2 text-base">M.Sc. Mathematics, Mar Ivanios College, Thiruvananthapuram</p>
          <p className="mb-4 text-base">I enjoy building apps with <span className="font-semibold">React</span> & <span className="font-semibold">Django</span>, and I'm passionate about learning new technologies and solving real-world problems. My goal is to create impactful digital experiences with clean, efficient code.</p>
          <a
            href="/ANAMIKA M-Resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-6 w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
          {/* Chatbot/Interactive Q&A */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full">
            <div className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Ask Me Anything!</div>
            <div className="h-40 overflow-y-auto mb-2 space-y-2">
              {messages.map((msg, idx) => (
                <div key={idx} className={
                  msg.from === 'bot'
                    ? 'text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded px-3 py-1 w-fit mb-1'
                    : 'text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded px-3 py-1 w-fit ml-auto mb-1'
                }>
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="text-sm text-blue-500 dark:text-blue-300">Thinking...</div>
              )}
            </div>
            <form onSubmit={handleSend} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                placeholder="Type your question..."
                autoComplete="off"
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;