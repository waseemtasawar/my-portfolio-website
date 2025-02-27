"use client";

import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

interface ProjectCategory {
  category: string;
  projects: Project[];
}

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  images: string[];
  awards?: string[];
}

const projects: ProjectCategory[] = [
  {
    category: "Computer Sciecne",
    projects: [
      {
        title: "UniPortal A management tool where a student and teacher can manage the their record",
        description:
          "UniPortal is a management tool designed for both students and teachers to efficiently manage their records. It allows students to track their academic progress and access important information. Teachers can use it to manage course materials, student performance, and communication. The platform simplifies record-keeping and enhances organizational efficiency for both parties.",
          techStack: [
            "React",
             "Tailwind CSS",
              "Node.js",
               "MongoDB",
          ],
        githubLink: "https://github.com/waseemtasawar/uni_portal",
        images: [
          "/Projects/uni-portal/1.png",
          "/Projects/uni-portal/2.png",
          "/Projects/uni-portal/3.png",
          "/Projects/uni-portal/4.png",
          "/Projects/uni-portal/5.png",
          "/Projects/uni-portal/6.png",
          "/Projects/uni-portal/7.png",
          "/Projects/uni-portal/8.png",
        ],
      },
      {
        title: "AgriApp An AI-Powered App for purchasing heavy machinery and monitring crops",
        description:
          "AgriApp is an AI-powered mobile application designed to streamline the purchase of heavy machinery and monitor crop growth. It provides users with personalized recommendations for machinery based on farm needs. The app also integrates real-time monitoring of crop health, using AI to analyze soil, weather, and growth patterns. This helps farmers make data-driven decisions for improved productivity and efficiency.",
        techStack: [
          "React Native",
           "Tailwind CSS",
           "Nodemecu",
           "Firebase",
        ],
        githubLink: "https://github.com/waseemtasawar/Agri_App",
        images: [
          "/Projects/agritech/1.jpg",
          "/Projects/agritech/2.jpg",
          "/Projects/agritech/3.jpg",
          "/Projects/agritech/4.jpg",
          "/Projects/agritech/5.jpg",
          "/Projects/agritech/6.jpg",
          "/Projects/agritech/7.jpg",
          "/Projects/agritech/8.jpg",
        ],
      }
      
    ],
  },
  {
    category: "MERN Stack",
    projects: [
      {
        title: "Book Store",
        description:
          "Book Store is a web application where a user can purchsed the books. It provides a seamless experience for users to browse, add, and manage books in their library.",
        techStack: [
          "React",
          "Tailwind CSS",
          "Redux Toolkit",
          "Node.js",
        ],
        githubLink: "https://github.com/waseemtasawar/book-store",
        liveLink: "https://myonlinebookstores.netlify.app/",
        images: [
          "/Projects/bookshelfx/1.png",
          "/Projects/bookshelfx/2.png",
          "/Projects/bookshelfx/3.png",
          "/Projects/bookshelfx/4.png",
          "/Projects/bookshelfx/5.png",
          "/Projects/bookshelfx/6.png",
        ],
      },
      // {
      //   title: "Netflix Clone",
      //   description:
      //     "A Netflix clone developed using the MERN stack. It includes features such as user authentication, a main page showcasing available content, and team information.",
      //   techStack: ["React", "Redux", "Node.js", "MongoDB", "Firebase"],
      //   githubLink: "https://github.com/askhan963/netflix-clone-mern",
      //   liveLink: "https://adorable-biscochitos-00323b.netlify.app/",
      //   images: [
      //     "/Projects/netflix-clone/1.png",
      //     "/Projects/netflix-clone/2.png",
      //     "/Projects/netflix-clone/3.png",
      //     "/Projects/netflix-clone/4.png",
      //     "/Projects/netflix-clone/5.png",
      //   ],
      // },
      {
        title: "Food Order App",
        description:
          "Food Order App is a free, user-friendly web application where a user can order Fast Food .",
        techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
        githubLink: "https://github.com/waseemtasawar/food-order-app",
        liveLink: "",
        images: [
          "/Projects/cleanslate/1.png",
          "/Projects/cleanslate/2.png",
          "/Projects/cleanslate/3.png",
          "/Projects/cleanslate/4.png",
          "/Projects/cleanslate/5.png",
          "/Projects/cleanslate/6.png",
        ],
      },
      {
        title: "Zara Constructions",
        description:
          "Zara Buliding Constructions is a web application where a user can view the construction projects. It provides a seamless experience for users to browse, add, and manage construction projects.",
        techStack: ["HTML", "CSS", "Django", "Tailwind CSS"],
        githubLink: "https://github.com/waseemtasawar/building-Project",
        liveLink: "https://zarabuildings.com/",
        images: [
          "/Projects/e-com-p/1.png",
          "/Projects/e-com-p/2.png",
          "/Projects/e-com-p/3.png",
          "/Projects/e-com-p/4.png",
          "/Projects/e-com-p/5.png",
          "/Projects/e-com-p/6.png",
          "/Projects/e-com-p/7.png",
        ],
      },
      {
        title: "Angel Studio",
        description:
          "Angle Studio focuses on delivering exceptional photo booth rental experiences designed to make every event unforgettable. It combines creativity, innovation, and attention to detail to craft moments filled with joy, laughter, and lasting memories. From seamless setup to user-friendly technology, this project ensures that every special occasion is elevated with a touch of magic",
        techStack: [
          "React",
          "Node.js",
          "MongoDB",
          "Tailwind CSS",
        ],
        // githubLink: "",
        liveLink: "https://angel-studio-final.vercel.app/",
        images: [
          "/Projects/dream-minder/1.png",
          "/Projects/dream-minder/2.png",
          "/Projects/dream-minder/3.png",
          "/Projects/dream-minder/4.png",
          "/Projects/dream-minder/5.png",
          "/Projects/dream-minder/6.png",
          "/Projects/dream-minder/7.png",
          "/Projects/dream-minder/8.png",
          "/Projects/dream-minder/9.png",
        ],
      },
      // {
      //   title: "URL Shortener Service",
      //   description:
      //     "A full-stack URL shortener service built using Node.js, TypeScript, Express, MongoDB for the backend, and React with Vite for the frontend.",
      //   techStack: [
      //     "React",
      //     "Node.js",
      //     "MongoDB",
      //     "TypeScript",
      //     "Tailwind CSS",
      //   ],
      //   githubLink: "https://github.com/askhan963/url-shortener-mern",
      //   liveLink: "https://url-shortener-askhan.netlify.app/",
      //   images: [
      //     "/Projects/url-shortner/1.png",
      //     "/Projects/url-shortner/2.png",
      //     "/Projects/url-shortner/3.png",
      //     "/Projects/url-shortner/4.png",
      //     "/Projects/url-shortner/5.png",
      //     "/Projects/url-shortner/6.png",
      //     "/Projects/url-shortner/7.png",
      //     "/Projects/url-shortner/8.png",
      //   ],
      // },
      {
        title: "My Personal Portfolio",
        description:
          "This project showcases my skills, experience, projects, and more. Built with modern web technologies for an engaging, responsive experience.",
        techStack: [
          "Next.js",
          "React",
          "Tailwind CSS",
          "TypeScript",
          "Framer Motion",
        ],
        githubLink: "https://github.com/waseemtasawar/my-portfolio-website",
        liveLink: "https://waseem-tasawar.netlify.app/",// change netlify
        images: [
          "/Projects/my-portfolio/1.png",
          "/Projects/my-portfolio/2.png",
          "/Projects/my-portfolio/3.png",
          "/Projects/my-portfolio/4.png",
          "/Projects/my-portfolio/5.png",
          "/Projects/my-portfolio/6.png",
          "/Projects/my-portfolio/7.png",
        ],
      },
    ],
  },
  // {
  //   category: "React Native",
  //   projects: [
  //     {
  //       title: "Installment Management System (IMS)",
  //       description:
  //         "A React Native application to assist users in managing their installments, allowing them to schedule, view, and keep track of various payments.",
  //       techStack: ["React Native", "React Navigation", "React Native Paper"],
  //       githubLink:
  //         "https://github.com/askhan963/installments-management-system",
  //       liveLink: "https://www.youtube.com/shorts/6tMjFW5JxcA",
  //       images: ["/Projects/installment-management-image.png"],
  //     },
  //     {
  //       title: "Intro Social App using React Native",
  //       description:
  //         "A semester project using React Native, providing basic chat functionality with Firebase, profile customization, and post creation.",
  //       techStack: ["React Native", "Firebase", "React Navigation"],
  //       githubLink: "https://github.com/askhan963/social-app",
  //       images: ["/Projects/social-chat-app-image.png"],
  //     },
  //   ],
  // },
];

const categories = [
  "All",
  ...projects.map((projectCategory) => projectCategory.category),
];

function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  images,
}: Project) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 p-8 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 transition duration-300 hover:shadow-2xl">
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <div className="flex flex-wrap space-x-2 mt-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-teal-600 dark:bg-teal-700 my-2 md:mt-0 text-sm px-3 py-1 rounded-full text-white"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4 mt-6">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-teal-500 dark:text-teal-400 hover:text-teal-300 transition duration-300"
            >
              <FaGithub />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-teal-500 dark:text-teal-400 hover:text-teal-300 transition duration-300"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation={true}
          className="rounded-lg shadow-lg w-full max-w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-[500px] h-[300px]">
                <Image
                  src={img}
                  alt={`${title} Image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover transition duration-300 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects.flatMap((category) => category.projects)
      : projects.find((category) => category.category === selectedCategory)
          ?.projects || [];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg mb-1 font-semibold ${
              selectedCategory === category
                ? "bg-teal-600 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-12 max-w-6xl w-full">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}
