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
      <div className="absolute inset-0 bg-gradient-to-t from-[#070E14] to-[#070E14] z-0" />
       <div>
        <img
        src="/image/ctaimg.svg"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      </div>
      
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h4
          className="font-racingSansOne  text-[25px] sm:text-[32px] md:text-[57.68px] font-medium leading-[130%] text-white mb-5"
          variants={slideDown}
        >
          Ready to Start Your Project?{" "}
        </motion.h4>

        <motion.p
          className="font-rasa text-[18px] sm:text-[18px] md:text-[24px] font-medium leading-[130%] text-white mb-2"
          variants={slideDown}
        >
          Contact  THEKWANE TECH LTD  today to discuss your  digital, blockchain, or game <br />  development needs.
        </motion.p>

        <motion.button
          className="font-rasa text-[18px] sm:text-[20px] md:text-[24.78px] font-medium px-7 sm:px-9 bg-[#64EE97] text-[#070E14] rounded-full"
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