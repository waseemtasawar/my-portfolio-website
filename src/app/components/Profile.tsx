"use client";
import { TypeAnimation } from "react-type-animation";

export default function Profile() {
  return (
    <section
      id="profile"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 text-center p-6"
    >
      {/* Profile Picture */}
      <div className="relative">
        <img
          src="/my3.jpg"
          alt="Profile Picture"
          className="rounded-full sm:w-48 sm:h-48 lg:w-64 lg:h-64 border-4 border-gray-300 dark:border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 mt-6">
        Waseem Tasawar
      </h1>

      {/* Typewriter Effect using react-type-animation */}
      <TypeAnimation
        sequence={[
          "MERN Stack Developer", // First text
          2000, // Waits 2 seconds
          "Computer Scientist", // Second text
          2000, // Waits 2 seconds
          "Full-Stack Enthusiast", // Third text
          2000, // Waits 2 seconds
          "Problem Solver", // Fourth text
          2000, // Waits 2 seconds
          "Tech Innovator", // Fifth text
          2000, // Waits 2 seconds
        ]}
        wrapper="p"
        cursor={true}
        repeat={Infinity}
        className="text-lg sm:text-2xl font-mono text-gray-600 dark:text-gray-400 mt-4 h-8"
      />

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg text-gray-500 dark:text-gray-300 max-w-xl leading-relaxed">
        Passionate about creating web solutions that solve real-world problems.
        Let's build something great together!
      </p>

      {/* Call to Action */}
      <a
        href="#contact"
        className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
      >
        Get in Touch
      </a>
    </section>
  );
}
