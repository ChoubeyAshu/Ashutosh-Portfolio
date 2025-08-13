import React from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CraftConnect",
      description:
        "A web platform that connects village stores with global buyers, enabling the online sale of regional and handcrafted products with a user-friendly shopping experience.",
      link: "https://craft-connect-6xp2.vercel.app/", // Replace with actual repo link if different
    },
    {
      title: "Co-Draw.AI",
      description:
      "CoDraw.AI is an AI-enhanced collaborative drawing platform that lets users sketch together in real time while the system intelligently suggests shapes, colors, and enhancements to elevate everyone’s artwork.",
      link: "https://codraw-ai.onrender.com",
    },
    {
      title: "FoodKalash",
      description:
        "A full-stack food delivery website with menu browsing, order placement, and donation features, ensuring a seamless user experience.",
      link: "",
    },
    {
      title: "Nebbulon AI",
      description:
        "React-based AI chatbot interface powered by Gemini, allowing users to interact with the bot, view chat history by session, and manage conversations. It features session persistence, local/session storage handling.",
      link: "https://nebbuulon-ai.vercel.app/",
    },
    {
      title: "Co-Code",
      description:
        "Co-Code is a MERN stack, microservices-based collaborative coding platform where multiple users can code together in real-time and chat simultaneously. It leverages WebSockets for live interaction, integrates Nodemailer for communication.",
      link: "https://co-code-g1bo.onrender.com/",
    },
    {
      title: "NutriDates",
      description:
      "NutriDates is an e-commerce platform dedicated to selling a variety of nutritious dates, combining health-focused offerings with a smooth online shopping experience.",      
      link: "https://nutri-dates-39fv9rcir-ashutoshs-projects-4481ae56.vercel.app/",
    }
    // {
    //   title: "ChitChat",
    //   description:
    //     "A real-time messaging app that allows users to communicate with each other seamlessly, featuring group chats, private messaging, and media sharing.",
    //   link: "https://github.com/imangadydv/chitchat",
    // },
    // {
    //   title: "Bus Booking",
    //   description:
    //     "A web-based application that enables users to search, book, and manage bus tickets with ease, featuring seat selection, booking history, and admin controls.",
    //   link: "https://github.com/imangadydv/Bus-Booking",
    // },
    
    // {
    //   title: "ToDo(Redux)",
    //   description:
    //     "A task management app developed with Redux for efficient state handling, allowing users to add, delete, and update their to-do tasks seamlessly.",
    //   link: "https://github.com/imangadydv/todoredux",
    // }
    
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div id="projects" className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16">
      <motion.h2
        className="text-3xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col bg-[#0f0b34] p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-[#14124a]"
          >
            <h3 className="text-xl font-bold text-[#16f2b3]">{project.title}</h3>
            <p className="text-gray-300 mt-4">{project.description}</p>
            <div className="flex">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-[#16f2b3] underline hover:text-white"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
