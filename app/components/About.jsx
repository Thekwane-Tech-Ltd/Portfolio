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
  <div className="mx-4 md:mx-17 my-5 md:my-20 p-5 md:p-10 font-quantico">

    <div className="flex flex-col md:flex-row items-start justify-center gap-10">

      {/* IMAGE */}
      <motion.div
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full "
      >
        <motion.img
          src="/image/aboutimg.svg"
          alt="aboutimage"
          className="w-full md:w-auto"
          whileHover={{ scale: 1.03 }}
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className="w-full"
      >
        <motion.button
          variants={slideRight}
          className="border border-[#000000] px-5 md:px-3 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          About us
        </motion.button>

        <motion.h5
          variants={slideRight}
          className="font-bold text-[20px] md:text-[32.31px] text-[#3D9865] leading-[110%] mt-5"
        >
          THEKWANE TECH LTD{" "}
          <span className="text-[#000000]">
            is a team- <br className="hidden md:block" />
            driven digital agency delivering <br className="hidden md:block" />
            scalable,secure, and future-ready <br className="hidden md:block" />
            digital products.
          </span>
        </motion.h5>

        <motion.p
          variants={slideRight}
          className="font-md text-[13px] md:text-[20px] leading-[145%] mt-3"
        >
          We design and develop web apps, mobile applications,
          <br className="hidden md:block" />
          blockchain systems, automated bots, game development and
          <br className="hidden md:block" />
          animated content that help businesses increase efficiency,
          <br className="hidden md:block" />
          user engagement, and revenue.
        </motion.p>
      </motion.div>
    </div>

    {/* STATS */}
    <motion.div
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="
        bg-gradient-to-b from-[#69F79C] to-[#398856]
        md:bg-gradient-to-t from-[#69F79C] to-[#398856]
        mt-20 md:mt-60
        rounded-xl
        flex flex-col md:flex-row
        items-center
        gap-2 md:gap-5
        w-full md:w-[1022px]
        h-auto md:h-[218px]
        mx-auto
        p-6 md:p-5
        relative
      "
    >
      <motion.div
        variants={slideUp}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.8 }}
        className="
          w-full md:w-[272px]
          h-[200px] md:h-[302px]
          bg-[#64EE97]
          rounded-t-xl
          p-5
          relative
          bottom-20
          md:-top-15
        "
      >
        <h6 className="font-bold text-[22px] md:text-[30px] text-[#001219] leading-[110%]">
          We have done the impossible
        </h6>
        <p className="font-md text-[16px] md:text-[23px] text-[#001219] leading-[120%] mt-3">
          we don’t just build projects, we build partnerships.
        </p>
      </motion.div>

      {/* USERS */}
      <motion.div
        variants={slideUp}
        onViewportEnter={() => runCount(users, 10)}
        className="text-center"
      >
        <motion.h4 className="text-[40px] md:text-[65px] text-white font-bold">
          {usersText}
        </motion.h4>
        <p className="text-[18px] md:text-[23px] text-white font-bold">
          Active Users
        </p>
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        variants={slideUp}
        onViewportEnter={() => runCount(projects, 500)}
        className="text-center"
      >
        <motion.h4 className="text-[40px] md:text-[65px] text-white font-bold">
          {projectsText}
        </motion.h4>
        <p className="text-[18px] md:text-[23px] text-white font-bold">
          Project Completed
        </p>
      </motion.div>

      {/* YEARS */}
      <motion.div
        variants={slideUp}
        onViewportEnter={() => runCount(years, 5)}
        className="text-center"
      >
        <motion.h4 className="text-[40px] md:text-[65px] text-white font-bold">
          {yearsText}
        </motion.h4>
        <p className="text-[18px] md:text-[23px] text-white font-bold">
          Years of Partnership
        </p>
      </motion.div>
    </motion.div>

  </div>
</section>
  );
};

export default About;


