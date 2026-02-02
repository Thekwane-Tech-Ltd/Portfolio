"use client";

import { motion } from "framer-motion";

const CTA = () => {
     const slideDown = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
    return (
        <div className="relative mt-30">
      <div className="bg-gradient-to-t from-[#070E14] to-[#070E14]">
        <img src="/image/ctaimg.svg" alt="image" />
      </div>

      <motion.div
        className="mx-auto text-center absolute top-20 left-85"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h4
          className="font-racingSansOne text-[57.68px] font-medium leading-[130%] text-white mb-5"
          variants={slideDown}
        >
          Ready to Start Your Project?{" "}
        </motion.h4>

        <motion.p
          className="font-rasa text-[24px] font-medium leading-[130%] text-white mb-2"
          variants={slideDown}
        >
          Contact  THEKWANE TECH LTD  today to discuss your  digital, blockchain, or game <br />  development needs.
        </motion.p>

        <motion.button
          className="font-rasa text-[24.78px] font-medium px-9 bg-[#64EE97] text-[#070E14] rounded-full"
          variants={slideDown}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Contact Us 
        </motion.button>
      </motion.div>
    </div>
    )
}

export default CTA