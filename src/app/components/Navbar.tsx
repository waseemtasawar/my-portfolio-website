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
      } fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-transform duration-300 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Pacifico Font */}
          <a  href="/">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white font-logo">
              WASEEM TASAWAR
            </h1>
          </a >

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <a href="#profile" className="text-gray-600 dark:text-gray-300 hover:underline">
              Profile
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:underline">
              Skills
            </a>
            <a href="#education" className="text-gray-600 dark:text-gray-300 hover:underline">
              Education
            </a>
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:underline">
              Experience
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:underline">
              Projects
            </a>
            <a href="#honors" className="text-gray-600 dark:text-gray-300 hover:underline">
              Honors
            </a>
            <a href="#cv" className="text-gray-600 dark:text-gray-300 hover:underline">
              My CVs
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:underline">
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <div className="mr-8 md:mr-0 md:flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300">
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
          <a
            href="#profile"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Profile
          </a>
          <a
            href="#skills"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#education"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Education
          </a>
          <a
            href="#experience"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#honors"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Honors
          </a>
          <a
            href="#cv"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            My CVs
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-gray-600 dark:text-gray-300 hover:underline"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
