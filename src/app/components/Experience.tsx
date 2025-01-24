"use client";

import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      title: "Web Developer",
      company: "Firnas.tech",
      companyLink: "https://firnas.tech/",
      logo: "/Logos/firnas.png", // Replace with actual logo path
      period: "Jan 2024 – Jan 2025 | Onsite",
      description: [
        "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js), ensuring robust performance and scalability.",
        "Built dynamic mobile applications with React Native, delivering high-quality user experiences across both iOS and Android platforms.",
        "Implemented state management using Redux and RTK for both web and mobile applications to streamline data flow and enhance performance.",
        "Collaborated with cross-functional teams to design and deliver modern, interactive user interfaces, ensuring seamless cross-platform compatibility.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "InternnCraft",
      companyLink: "https://internncraft.com/",
      logo: "/Logos/intercraft.jpeg", // Replace with actual logo path
      period: "June 2024 – Aug 2024 | Remote",
      description: [
        "Developed a car renting website using the MERN stack (MongoDB, Express, React, Node.js) with an admin panel for managing rentals and users.",
        "Implemented user registration, login, and session management with JWT and cookies.",
        "Built a car booking system with real-time availability checks and date selection.",
        "Created an admin section for CRUD operations on cars, users, and rental transactions.",
      ],
    },
    {
      title: "React Developer",
      company: "CodeAlpha",
      companyLink: "https://www.codealpha.tech/", // No company link for freelance work
      logo: "/Logos/codealpha.jpeg", // Replace with actual logo path
      period: "May 2024 – Aug 2024 | Remote",
      description: [
        "Developed ”AGRI APP,” a mobile application for farmers and renters, enhancing agricultural operations with sensor integration and machinery management.",
        "Machinery rentals with order management and updates for renters.",
        "User authentication and real-time database synchronization using Firebase.",
      ],
    },
    {
      title: "STEM Writer - Java, C#, Python, C/C++",
      company: "EssayShark",
      companyLink: "https://assignmentshark.com/expert.html?id=askhan963",
      logo: "/Logos/Shark.jpg", // Replace with actual logo path
      period: "March 2023 - Present | Remote",
      description: [
        "Crafting detailed and accurate technical content for Java, C#, Python, and C/C++ projects.",
        "Consistently delivering high-quality documentation and guides, helping students and professionals enhance their coding skills and technical knowledge.",
        "Specialized in bridging the gap between complex programming concepts and practical applications.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12 tracking-tight">
        <span>Experience</span>
      </h1>

      <div className="space-y-12 max-w-5xl w-full">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative bg-gray-200 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col sm:flex-row items-start space-y-6 sm:space-y-0 sm:space-x-8 border-l-4 border-teal-400 dark:border-teal-600"
          >
            {/* Logo Section */}
            <div className="w-20 h-20 flex-shrink-0 mx-auto sm:mx-0 relative overflow-hidden rounded-full border-2 border-teal-400 dark:border-teal-600 shadow-lg">
              <Image
                src={experience.logo}
                alt={`${experience.company} Logo`}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Experience Details */}
            <div className="flex-1">
              <a
                href={experience.companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center sm:text-left"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 hover:underline">
                  {experience.title}
                </h2>
                <h3 className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                  {experience.company}
                </h3>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 text-center sm:text-left">
                {experience.period}
              </p>

              <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400 list-disc pl-5">
                {experience.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="hover:text-teal-500 dark:hover:text-teal-400 transition duration-300"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Line */}
            <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-teal-400 to-teal-600 dark:from-teal-600 dark:to-teal-400 rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}
