import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setError("");
    setSent(false);
    setLoading(true);
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
    try {
      await axios.post('http://localhost:8000/api/contact/', data);
      setSent(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
  <div className="container mx-auto max-w-xl px-4 sm:px-0">
        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
  <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-3 bg-[#f8f9fa] p-4 sm:p-6 rounded shadow">
          <input name="name" type="text" placeholder="Name" className="p-3 border rounded" required />
          <input name="email" type="email" placeholder="Email" className="p-3 border rounded" required />
          <textarea name="message" placeholder="Message" className="p-3 border rounded h-32" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
          {sent && <p className="text-green-600 text-center">Message sent successfully!</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
  <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <a href="https://github.com/Anamikamahi18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
          <a href="https://linkedin.com/in/anamika-m-16a09321b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
          <a href="mailto:anamikamahi18@gmail.com" className="hover:text-blue-600">Email</a>
        </div>
        {/* Interactive Map (Google Maps Embed) */}
  <div className="mt-8 rounded-lg overflow-hidden shadow">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.969234857839!2d76.9566843147936!3d8.50568499387637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05be1e2e2e2e2e%3A0x2e2e2e2e2e2e2e2e!2sMar%20Ivanios%20College!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  </motion.section>
  );
}

export default Contact;