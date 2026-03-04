"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const slideDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  const [open, setOpen] = useState(false);

  const projects = useMotionValue(0);
  const [projectsDisplay, setProjectsDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = projects.on("change", latest => {
      setProjectsDisplay(Math.round(latest));
    });
    return () => unsubscribe();
  }, [projects]);

  const runCount = () => {
    projects.set(0);
    animate(projects, 500, { duration: 1.5, ease: "easeOut" });
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid md:grid-cols-4">

        {/* Left Section */}
        <div className="col-span-3 bg-[#001219] pt-5 pb-60 relative">

          {/* NAV */}
          <nav className="flex items-center justify-between ml-11 mr-11">
            <img src="/image/logo.svg" alt="logo" />

            {/* Desktop Nav (UNCHANGED) */}
            <ul className="hidden md:flex items-center gap-8 font-quantico">
              <li className="text-[#64EE97] font-medium text-md"><Link href="/">Home</Link></li>
              <li className="text-[#64EE97] font-medium text-md"><Link href="/Service">Services</Link></li>
              <li className="text-[#64EE97] font-medium text-md"><Link href="/Portfolio">Portfolio</Link></li>
              <li className="text-[#64EE97] font-medium text-md"><Link href="/About">About</Link></li>
            </ul>

            {/* Hamburger (ONLY small screens) */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-black/90 p-8 space-y-6 z-50">
              <ul className="flex flex-col gap-6 font-quantico">
                <li className="text-[#64EE97]"><Link href="/">Home</Link></li>
                <li className="text-[#64EE97]"><Link href="/Service">Services</Link></li>
                <li className="text-[#64EE97]"><Link href="/Portfolio">Portfolio</Link></li>
                <li className="text-[#64EE97]"><Link href="/About">About</Link></li>
              </ul>
              <div className="flex items-center gap-2 pt-4">
              <button className="bg-white px-2 rounded-sm"><Link href="/Contact">Contact Us</Link></button>
              <div className="w-6 h-6 bg-[#64EE97] rounded-full flex items-center justify-center">
                <GoArrowUpRight className="text-white" />
              </div>
            </div>
            </div>
          )}

          {/* HERO TEXT (UNCHANGED for desktop) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
            className="p-5 ml-1 md:ml-10 mt-15 md:mt-30 font-quantico"
          >
            <motion.h1 variants={slideDown} className="text-[#64EB95] font-bold text-[20px] md:text-[39.61px] leading-[100%]">
              BRINGING IDEAS TO LIFE THROUGH
            </motion.h1>

            <motion.h2 variants={slideDown} className="font-bold text-[29px] md:text-[63.08px] leading-[100%] bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
              SOFTWARE INNOVATIVE
            </motion.h2>

            <motion.h3 variants={slideDown} className="font-bold text-[36px] md:text-[101.14px] leading-[100%] bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
              & 3D ANIMATION
            </motion.h3>

            <motion.p variants={slideDown} className="font-md text-[18px] md:text-[24px] leading-6 mt-5 text-[#FFFFFF]">
              We build immersive visuals and scalable <br />
              software, all tailored to help your brand stand out.
            </motion.p>
          </motion.div>

          {/* BUTTONS (stack only on small screens) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-5 ml-7 md:ml-17 mt-5"
          >
            <motion.button variants={slideDown} className="bg-[#64EB95] py-2 px-3 flex items-center gap-2">
              Request a
              <span className="font-bold text-sm">Free Consultation</span>
              <GoArrowUpRight />
            </motion.button>

            <motion.button variants={slideDown} className="bg-[#64EB95] py-2 px-3 flex items-center gap-2">
              View Our Portfolio
              <GoArrowUpRight />
            </motion.button>
          </motion.div>

          {/* LINE (hide on small to prevent overflow) */}
          <div className=" ml-10 md:ml-90 mt-5">
            <img src="image/Hline.svg" alt="Hline" />
          </div>

          {/* IMAGE (absolute only on desktop) */}
          <div className="hidden md:block absolute bottom-0 -right-60">
            <img
              src="image/cyberboy.svg"
              alt="cyberpunkboyillustration"
              className="size-155"
            />
          </div>

          {/* MOBILE IMAGE (inside flow) */}
          <div className="md:hidden mt-10 absolute top-129">
            <img
              src="image/cyberboy.svg"
              alt="cyberpunkboyillustration"
              className="w-74"
            />
          </div>

          {/* STATS (hide on small to prevent layout break) */}
          <motion.div
            onViewportEnter={runCount}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideUp}
            className="flex bg-[#414141]/50 w-[350px] md:w-[598px] h-[87px] md:h-[97px] items-center gap-5 p-5 font-quantico absolute -bottom-33 right-4 md:bottom-10 md:-right-60"
          >
            <div>
              <h4 className="text-[#64EE97] text-4xl md:text-5xl font-bold">{projectsDisplay}+</h4>
              <p className="text-[#FFFFFF] text-xs md:text-sm">Project Delivered</p>
            </div>
            <img src="image/Line.svg" alt="line" />
            <p className="text-[#FFFFFF] text-xs md:text-sm">
              We're here to help you transform your ideas <br /> into digital reality.
            </p>
          </motion.div>
        </div>

        {/* Right Section (Desktop ONLY) */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-b from-[#69F79C] to-[#001219] h-[842px] pt-5 font-quantico">
            <div className="flex justify-center">
              <div>
                <button className="bg-white px-2 rounded-sm">
                  <Link href="/Contact">Contact Us</Link>
                </button>
              </div>
              <div className="w-6 h-6 bg-[#1B1B1B] rounded-full flex items-center justify-center">
                <GoArrowUpRight className="text-white text-center" />
              </div>
            </div>
            <div className="mt-20 flex justify-center">
              <p className="font-medium text-lg leading-[100%]">
                Impowering industries <br />
                with next-Gen Tech
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile Bottom Section (NO Contact Button) */}
      <div className="md:hidden bg-gradient-to-b from-[#69F79C] to-[#001219] h-45 text-center font-quantico ">
        <p className="font-medium text-white text-lg leading-[100%] absolute top-138 left-45">
          Impowering industries <br />
          with next-Gen Tech
        </p>
      </div>

    </section>
  );
};

export default Hero;