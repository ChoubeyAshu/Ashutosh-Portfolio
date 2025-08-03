import React from "react";
import { motion } from "framer-motion";
import cg from "../assets/card.png";
import mypic from "../assets/myImage.jpeg";
import { TypeAnimation } from "react-type-animation";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#0c0e1e] text-white flex flex-col items-center py-16"
      style={{
        backgroundImage: `url(${cg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-[#16f2b3] mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col items-center lg:flex-row gap-16 px-8 lg:px-16">
        {/* Profile Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden shadow-lg mb-8 lg:mb-0">
          <img
            src={mypic}
            alt="Ashutosh Kumar Choubey"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <motion.div
          className="text-center lg:text-left max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-2xl font-semibold text-[#16f2b3] mb-4">
            Who I Am?
          </h3>
          <TypeAnimation
            sequence={[
              "Hi, I’m Ashutosh Kumar Choubey, a final-year B.Tech student at GNIOT, passionate about full stack development using the MERN stack. I love building scalable web apps and solving problems with clean, efficient code. Skilled in React, Node, Express, and MongoDB, I also enjoy practicing DSA on LeetCode and GFG. Currently, I’m focused on developing real-world projects and growing as a software developer. Let’s connect and collaborate!",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="text-gray-300 text-lg"
            repeat={0}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
