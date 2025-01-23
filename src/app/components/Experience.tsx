"use client";

import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      "title": "Senior Associate Software Engineer",
      "company": "Tech Avenue Pvt Ltd",
      "companyLink": "https://techavenue.biz/",
      "logo": "/Logos/tech-avenue.jpeg", // Replace with actual logo path
      "period": "Jan 2024 – Present | Onsite",
      "description": [
        "Developed and maintained full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js), ensuring robust performance and scalability.",
        "Built dynamic mobile applications with React Native, delivering high-quality user experiences across both iOS and Android platforms.",
        "Implemented state management using Redux and RTK for both web and mobile applications to streamline data flow and enhance performance.",
        "Collaborated with cross-functional teams to design and deliver modern, interactive user interfaces, ensuring seamless cross-platform compatibility.",
        // "Utilized Tailwind CSS for responsive, scalable, and visually appealing web designs, significantly improving user engagement and satisfaction."
      ]
    },    
    {
      title: "React JS Developer",
      company: "Chromadesignhub",
      companyLink: "https://chromadesignhub.com/",
      logo: "/Logos/chroma.png", // Replace with actual logo path
      period: "Aug 2024 – Present | Remote",
      description: [
        "Developed responsive front-end applications using React.js, with state management through Redux and RTK for efficient data handling and improved performance. ",
        "Collaborated with a team to deliver high-quality, interactive websites, enhancing user engagement and ensuring cross-platform compatibility. ",
        "Utilized Tailwind CSS to create scalable, modern designs that significantly boosted user satisfaction and overall user experience. ",
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      companyLink: "https://www.upwork.com/freelancers/~01ba14073aeac384ea", // No company link for freelance work
      logo: "/Logos/freelance.jpeg", // Replace with actual logo path
      period: "Feb 2023 – Present | Remote",
      description: [
        "Successfully completed over 10 full-stack projects using the MERN Stack, helping clients enhance productivity and streamline processes.",
        "Delivered custom CMS solutions and e-commerce platforms, integrating third-party services such as payment gateways for seamless transactions.",
        "Consistently received 5-star client ratings for high-quality work delivered within tight deadlines, resulting in a 30% increase in client business productivity.",
      ],
    },
    {
      title: " Web Development Lead",
      company:
        "Google Developer Student Club - GDSC CUI-ATD (COMSATS University) ",
      companyLink:
        "https://gdsc.community.dev/comsats-university-islamabad-abbottabad-pakistan/",
      logo: "/Logos/GDSC.png", // Replace with actual logo path
      period: "September 2023 –August 2024 | Onsite",
      description: [
        "Oversaw the creation of various websites throughout 2023-2024.",
        "Led and coordinated a team to successfully deliver multiple projects, demonstrating strong team management and coordination skills.",
        "Trained 25 students in web development, enhancing their practical skills and industry readiness.",
        "Member of a top 100 team in the GDSC Solution Challenge 2024, focusing on developing innovative tech solutions.",
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
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
        Experience
      </h1>

      <div className="space-y-8 max-w-5xl w-full">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6"
          >
            {/* Logo Section */}
            <div className="w-16 h-16 flex-shrink-0 mx-auto sm:mx-0">
              <Image
                src={experience.logo}
                alt={`${experience.company} Logo`}
                width={64}
                height={64}
                className="rounded-full"
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
                <h2 className="text-xl sm:text-2xl font-semibold text-teal-600 dark:text-teal-400">
                  {experience.title}
                </h2>
                <h3 className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                  {experience.company}
                </h3>
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0 text-center sm:text-left">
                {experience.period}
              </p>

              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5">
                {experience.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
