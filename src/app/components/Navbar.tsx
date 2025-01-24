"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isVisible, setIsVisible] = useState(true); // State for navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);

  // Check localStorage for the theme preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle theme and save preference in localStorage
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll behavior to show/hide navbar
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scroll down, hide the navbar
        setIsVisible(false);
      } else {
        // If scroll up, show the navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white font-logo tracking-wide transition-transform duration-300 hover:scale-105">
              WASEEM TASAWAR
            </h1>
          </a>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 hover:scale-110 transition duration-300">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            {["Profile", "Skills", "Education", "Experience", "Projects", "Honors", "My CVs", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform duration-300">
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden bg-white dark:bg-gray-800 shadow-md`}
        >
          {["Profile", "Skills", "Education", "Experience", "Projects", "Honors", "My CVs", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition duration-300"
              onClick={toggleMenu}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
