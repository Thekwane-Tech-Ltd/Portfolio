"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "/image/Core1.svg",
    title: "Web Application Development",
    description:
      "We build high-performance web applications using React, Next.js, Node.js, and modern cloud infrastructure optimized for SEO, speed, and security.",
  },
  {
    icon: "/image/Core2.svg",
    title: "Blockchain Development Services",
    description:
      "Smart contracts, DeFi solutions, and blockchain integration for decentralized applications.",
  },
  {
    icon: "/image/Core3.svg",
    title: "Mobile App Development (Android & iOS)",
    description:
      "Custom Android and iOS apps using Flutter, React Native, and Expo, ensuring scalability and excellent user experience.",
  },
  {
    icon: "/image/Core4.svg",
    title: "Custom Software & IT Consulting",
    description:
      "Tailored software solutions, API development, system architecture, code audits, and technical consulting.",
  },
  {
    icon: "/image/Core5.svg",
    title: "Bot Development & Automation",
    description:
      "Secure Telegram, Discord, trading, and automation bots integrated with APIs, databases, and blockchain networks.",
  },
  {
    icon: "/image/Core6.svg",
    title: "Game Development",
    description:
      "High-quality game development solutions using modern tools and engines.",
  },
  {
    icon: "/image/Core7.svg",
    title: "2D & 3D Animation Services",
    description:
      "Professional 2D explainer videos, 3D animation, motion graphics, and character animation.",
  },
  {
    icon: "/image/Core8.svg",
    title: "3D Modeling & Character Design",
    description:
      "High-quality 3D modeling, character design, and product visualization.",
  },
];

// Parent container animation (stagger)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08, // faster stagger
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,        // stronger movement
    scale: 0.95,  // subtle pop
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};


const CoreServices = () => {
  return (
    <section>
      <div className="mx-1 lg:mx-17 my-10 p-6 lg:p-10 font-quantico">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="w-fit mx-auto text-center mb-10"
        >
          <button className="border border-black py-1 px-5 rounded-xl text-[15px] md:text-[27.11px] font-bold leading-none">
            OUR CORE SERVICES
          </button>
          <p className="text-[20px] font-medium mt-2">
            We offer comprehensive digital solutions to bring your vision to life
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-fit mx-1 md:mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                bg-[#FFFFFF0D]
                shadow-lg
                rounded-xl
                w-full
                h-auto
                md:w-[234px]
                md:h-[312px]
                p-5
                flex flex-col
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:bg-[#FFFFFF14]
              "
            >
              <img
                src={service.icon}
                alt="serviceIcon"
                className="my-3 size-18"
              />

              <h4 className="font-bold text-[18px] leading-none mb-3">
                {service.title}
              </h4>

              <p className="font-medium text-[12.44px] leading-snug flex-grow">
                {service.description}
              </p>

              <button
                className="
                  bg-[#64EE97]
                  text-black
                  text-[12.44px]
                  py-1
                  px-4
                  rounded-full
                  mt-4
                  self-center
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-[#64EE97]
                  hover:scale-105
                "
              >
                GET STARTED
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CoreServices;
