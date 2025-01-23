"use client";

import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form submission (using Formspree or any other service)
    const response = await fetch('https://formspree.io/f/mkgwvrll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Clear the form fields
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert("Your message has been sent!");
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <section id='contact' className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Contact
      </h1>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-2xl">
        Please don’t hesitate to contact me for more information about my work.
        I will reply when I’m available.
      </p>

      {/* Mail me now button */}
      <div className="mb-12">
        <a
          href="mailto:awaiskhanniazi963@gmail.com"
          className="inline-flex items-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-500 transition duration-300"
        >
          <FaEnvelope className="mr-2 text-xl" />
          Mail me now
        </a>
      </div>

      {/* Social Links */}
      <div className="flex space-x-6 mb-12">
        <a
          href="https://pk.linkedin.com/in/askhan963"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-teal-600 dark:text-teal-400 hover:text-teal-500 transition duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/awaisknas963/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-teal-600 dark:text-teal-400 hover:text-teal-500 transition duration-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/as_khan963"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-teal-600 dark:text-teal-400 hover:text-teal-500 transition duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/askhan963"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-teal-600 dark:text-teal-400 hover:text-teal-500 transition duration-300"
        >
          <FaGithub />
        </a>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-2 w-full p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-2 w-full p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700 dark:text-gray-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            required
            className="mt-2 w-full p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
