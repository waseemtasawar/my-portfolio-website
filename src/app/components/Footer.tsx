"use client";

import { FaHeart, FaCoffee } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 p-6 flex items-center justify-center">
      <p className="flex items-center text-gray-700 dark:text-gray-300 text-lg">
        Developed with{" "}
        <FaHeart className="text-red-600 dark:text-red-400 mx-2" /> and{" "}
        <FaCoffee className="text-yellow-600 dark:text-yellow-400 mx-2" />
      </p>
    </footer>
  );
};

export default Footer;
