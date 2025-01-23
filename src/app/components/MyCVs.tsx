"use client";

import { FaDownload } from "react-icons/fa";

const MyCVs = () => {
  const cvs = [
    // {
    //   title: "Software Engineer CV",
    //   description: "This is my CV tailored for software engineering roles.",
    //   downloadLink: "/path/to/software-engineer-cv.pdf", // Replace with actual file path
    // },
    {
      title: "Web Developer CV",
      description: "This is my CV focused on web development projects.",
      downloadLink: "/CV/Awais_Khan_Resume.pdf", // Replace with actual file path
    },
    // {
    //   title: "Full Stack Developer CV",
    //   description: "This CV highlights my full-stack development experience.",
    //   downloadLink: "/path/to/fullstack-developer-cv.pdf", // Replace with actual file path
    // },
  ];

  return (
    <section id="cv" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
        My Resume
      </h1>

      <div className="space-y-8 max-w-4xl w-full">
        {cvs.map((cv, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between transition duration-300 hover:shadow-2xl"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {cv.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                {cv.description}
              </p>
            </div>
            <div>
              <a
                href={cv.downloadLink}
                download
                className="inline-flex items-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-500 transition duration-300"
              >
                <FaDownload className="mr-2 text-xl" />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCVs;
