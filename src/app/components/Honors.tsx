"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const honors = [
  {
    image: "/Awards/freeCodeCamp.png",
    title: "Relational Database",
  },
  {
    image: "/Awards/googleDSC.png",
    title: "Project Submission GDSC Solution Challenge 2024",
  },
  {
    image: "/Awards/googleTop100.png",
    title: "Global Top 100 Finalist GDSC Solution Challenge 2024",
  },
  {
    image: "/Awards/generativeAI.png",
    title: "Generative AI Fundamentals",
  },
  {
    image: "/Awards/simplilearn.png",
    title: "Introduction to Front End Development",
  },
  {
    image: "/Awards/futureTech.png",
    title: "Certificate of Appreciation",
  },
  {
    image: "/Awards/gitGithubParticipation.png",
    title: "Certificate of Participation in Git & GitHub for Developers",
  },
  {
    image: "/Awards/IntroductionToAI.png",
    title: "Certificate of Introduction to AI & ML using Cloud",
  },
  {
    image: "/Awards/IntroToMERN.png",
    title: "Certificate of Introduction to MERN Stack",
  },
  {
    image: "/Awards/IntroToGenAI.png",
    title: "Certificate of Intro to Gen AI Studio",
  }
];

export default function Honors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once when the section comes into view

  return (
    <section id='honors'
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6"
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-12">
        Honors & Certifications
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {honors.map((honor, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Only animate when in view
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Certification Image */}
            <Image
              src={honor.image}
              alt={honor.title}
              width={350}
              height={350}
              className="object-cover"
            />

            {/* Title on Hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60"
            >
              <h2 className="text-xl font-semibold text-white text-center px-4">
                {honor.title}
              </h2>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
