"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava, FaPython, FaHtml5, FaCss3, FaGithub,
  FaJsSquare, FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb, SiRedux, SiTailwindcss, SiTypescript, SiIntellijidea, SiCsharp,
  SiMysql, SiFirebase, SiGraphql, SiPostgresql,
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
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12">
        Skills
      </h1>

      <div className="flex w-full max-w-6xl">
        {/* Vertical Category Buttons */}
        <div className="w-1/4 flex flex-col space-y-4">
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category as Category)}
              className={`text-xs md:text-lg font-medium px-4 py-2 rounded-lg transition-colors text-start shadow-lg ${
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
        <div className="w-3/4 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 p-4">
          {skillCategories[activeCategory].map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 rounded-lg transition-all bg-gray-200 dark:bg-gray-700 shadow-md hover:shadow-xl"
            >
              <div className="relative group">
                {/* Skill Icon */}
                {skill.icon}
                {/* Skill Name Tooltip */}
                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
