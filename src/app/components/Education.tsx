"use client";

import Image from "next/image";

const Education = () => {
  const educationData = [
    {
      institution: "COMSATS University Islamabad, Abbottabad Campus, KPK, Pakistan",
      degree: "BS Computer Science",
      period: "2020 - 2024",
      cgpa: "3.15",
      coreCourses: [
        "Data Structures & Algorithms",
        "Web Development",
        "Software Engineering",
        "Artificial Intelligence",
        "Machine Learning",
        "VR Development",
        "Database Systems",
        "Operating Systems",
      ],
      logo: "/Logos/COMSATS.jpg",
      link: "https://www.cuiatd.edu.pk/",
    },
    {
      institution: "Aspire College Mian Channu",
      degree: "Intermediate in Faculty of Science (Fsc)",
      period: "2018 - 2020",
      coreSubjects: ["Physics", "Chemistry", "Mathematics"],
      logo: "/Logos/logo.jpg",
      link: "https://www.facebook.com/groups/1766404973482849",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
        Education
      </h1>

      <div className="space-y-12 max-w-4xl w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Logo Section */}
            <div className="w-28 h-28 mr-0 md:mr-8 mb-6 md:mb-0 flex-shrink-0 flex items-center justify-center">
              <Image
                src={edu.logo}
                alt={`${edu.institution} Logo`}
                width={112}
                height={112}
                className="rounded-full shadow-md"
              />
            </div>

            {/* Education Details */}
            <div className="flex-grow">
              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                {edu.degree}
              </a>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-2">
                {edu.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {edu.period}
              </p>

              {/* CGPA */}
              {edu.cgpa && (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>CGPA:</strong> {edu.cgpa}
                </p>
              )}

              {/* Core Courses / Subjects */}
              <ul className="text-gray-600 dark:text-gray-400 list-disc pl-5 space-y-1">
                <strong>{edu.coreCourses ? "Core Courses:" : "Core Subjects:"}</strong>
                {(edu.coreCourses || edu.coreSubjects)?.map((course, idx) => (
                  <li key={idx}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
