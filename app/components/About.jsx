"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25 } },
};

const About = () => {
  // Motion values for count-up
  const users = useMotionValue(0);
  const projects = useMotionValue(0);
  const years = useMotionValue(0);

  const usersText = useTransform(users, v => `${Math.round(v)}K+`);
  const projectsText = useTransform(projects, v => `${Math.round(v)}+`);
  const yearsText = useTransform(years, v => `${Math.round(v)}+`);

  // Animate a motion value from start to end
  const runCount = (mv, end, duration = 1.5) => {
    mv.set(0); // reset to zero every time
    animate(mv, end, { duration, ease: "easeOut" });
  };

  return (
    <section>
      <div className="mx-17 my-20 p-10 font-quantico">

        <div className="flex items-start justify-center gap-10">

          {/* IMAGE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="image/aboutimg.svg"
              alt="aboutimage"
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <motion.button
              variants={slideRight}
              className="border border-[#000000] px-3 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              About us
            </motion.button>

            <motion.h5
              variants={slideRight}
              className="font-bold text-[32.31px] text-[#3D9865] leading-[100%] mt-5"
            >
              THEKWANE TECH LTD{" "}
              <span className="text-[#000000]">
                is a team- <br />driven digital agency delivering <br /> scalable,secure, and
                future-ready <br /> digital products.
              </span>
            </motion.h5>

            <motion.p
              variants={slideRight}
              className="font-md text-[20px] leading[145%] mt-3"
            >
              We design and develop web apps, mobile applications, <br /> blockchain
              systems, automated bots, game development and <br /> animated content
              that help businesses increase efficiency, <br /> user engagement, and
              revenue. Our multidisciplinary team <br /> combines engineering, design,
              animation, and blockchain <br /> expertise under one roof.
            </motion.p>
          </motion.div>
        </div>

        <div>
          {/* STATS */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="bg-gradient-to-t from-[#69F79C] to-[#398856] mt-60 rounded-xl flex items-center gap-5 w-[1022px] h-[218px] mx-auto p-5 relative"
          >
            <motion.div
              variants={slideUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.8 }}
              className="w-[272px] h-[302px] bg-[#64EE97] rounded-t-xl p-5 relative -top-15 -left-0"
            >
              <h6 className="font-bold text-[30px] text-[#001219] leading-[100%] mt-15">
                We have done the impossible
              </h6>
              <p className="font-md text-[23px] text-[#001219] leading-[100%] mt-3 ">
                we don’t just build projects, we build partnerships. Let’s create something extraordinary together.
              </p>
            </motion.div>

            {/* USERS */}
            <motion.div
              variants={slideUp}
              onViewportEnter={() => runCount(users, 10)}
            >
              <motion.h4 className="text-[65px] text-white font-bold leading-[100%]">
                {usersText}
              </motion.h4>
              <p className="text-[23px] text-white font-bold leading-[100%]">
                Active Users
              </p>
            </motion.div>

            <img src="image/Line.svg" alt="line" />

            {/* PROJECTS */}
            <motion.div
              variants={slideUp}
              onViewportEnter={() => runCount(projects, 500)}
            >
              <motion.h4 className="text-[65px] text-white font-bold leading-[100%]">
                {projectsText}
              </motion.h4>
              <p className="text-[23px] text-white font-bold leading-[100%]">
                Project Completed
              </p>
            </motion.div>

            <img src="image/Line.svg" alt="line" />

            {/* YEARS */}
            <motion.div
              variants={slideUp}
              onViewportEnter={() => runCount(years, 5)}
            >
              <motion.h4 className="text-[65px] text-white font-bold leading-[100%]">
                {yearsText}
              </motion.h4>
              <p className="text-[23px] text-white font-bold leading-[100%]">
                Years of Partnership
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


