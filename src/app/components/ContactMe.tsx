import React from "react";

const ContactMe: React.FC = () => {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-gray-200 dark:bg-gray-800 shadow-lg rounded-lg p-2 space-y-3 hidden sm:block">
      <a
        href="https://www.linkedin.com/in/askhan963/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        title="LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.71c-.97 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75c.97 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 11.71h-3v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3v-10h3v1.46c.78-.9 1.89-1.46 3.11-1.46 2.21 0 4 1.79 4 4v6z" />
        </svg>
      </a>
      <a
        href="https://github.com/askhan963"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
        title="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.25c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.08 1.86 2.82 1.32 3.51 1.01.1-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.23-3.23-.12-.3-.54-1.51.12-3.15 0 0 1-.32 3.3 1.23a11.46 11.46 0 016.06 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.85.12 3.15.77.84 1.23 1.92 1.23 3.23 0 4.6-2.8 5.63-5.47 5.93.43.36.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 .5z" />
        </svg>
      </a>
      <a
        href="https://linktr.ee/askhan963"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        title="Linktree"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-.5 15h-2v-6h2v6zm3 0h-2v-6h2v6zm-1.5-8c-.83 0-1.5-.67-1.5-1.5S10.67 6 11.5 6s1.5.67 1.5 1.5S12.33 9 11.5 9z" />
        </svg>
      </a>
    </div>
  );
};

export default ContactMe;
