"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaGithub,
  FaJsSquare,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiIntellijidea,
  SiCsharp,
  SiMysql,
  SiFirebase,
  SiGraphql,
  SiPostgresql,
} from "react-icons/si";

type Category = "Frontend" | "Backend" | "Languages" | "Tools";

interface Skill {
  name: string;
  icon: JSX.Element;
}

const skillCategories: Record<Category, Skill[]> = {
  Frontend: [
    { name: "React.js", icon: <FaReact size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "HTML5", icon: <FaHtml5 size={40} /> },
    { name: "CSS3", icon: <FaCss3 size={40} /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "Redux", icon: <SiRedux size={40} /> },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "Firebase", icon: <SiFirebase size={40} /> },
    { name: "GraphQL", icon: <SiGraphql size={40} /> },
    { name: "RESTful APIs", icon: <FaDatabase size={40} /> },
  ],
  Languages: [
    { name: "JavaScript", icon: <FaJsSquare size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "Python", icon: <FaPython size={40} /> },
    { name: "Java", icon: <FaJava size={40} /> },
    { name: "C#", icon: <SiCsharp size={40} /> },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea size={40} /> },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("Frontend");

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12 tracking-wide">
        Skills
      </h1>

      <div className="flex flex-col md:flex-row w-full max-w-6xl">
        {/* Vertical Category Buttons */}
        <div className="md:w-1/4 flex md:flex-col space-y-4 mb-6 md:mb-0">
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category as Category)}
              className={`text-xs md:text-lg font-medium px-4 py-2 rounded-lg shadow-md transition-colors text-start ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="md:w-3/4 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 p-4">
          {skillCategories[activeCategory].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex flex-col items-center p-4 rounded-lg bg-gray-200 dark:bg-gray-700 shadow-md transition-all hover:shadow-2xl group"
            >
              {/* Skill Icon */}
              <div className="text-blue-500 dark:text-teal-400 group-hover:animate-bounce">
                {skill.icon}
              </div>
              {/* Skill Name Tooltip */}
              <p className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
