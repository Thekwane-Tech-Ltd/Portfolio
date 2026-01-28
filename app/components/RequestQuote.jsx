"use client";

import { motion } from "framer-motion";

const RequestQuote = () => {
  // Animation variants
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
    <div className="relative">
      <div className="bg-gradient-to-t from-[#070E14] to-[#070E14]">
        <img src="/image/Rqbg.svg" alt="image" />
      </div>

      <motion.div
        className="mx-auto text-center absolute top-40 left-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h4
          className="font-questrial text-[33.07px] font-medium leading-[130%] text-white mb-5"
          variants={slideDown}
        >
          Looking for a reliable software and blockchain development company?{" "}
        </motion.h4>

        <motion.p
          className="font-rasa text-[25px] font-medium leading-[130%] text-white mb-2"
          variants={slideDown}
        >
          Let’s build your next digital solution.
        </motion.p>

        <motion.button
          className="font-rasa text-[24.78px] font-medium px-5 py-1 bg-[#64EE97] text-[#070E14] rounded-full"
          variants={slideDown}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Request a Quote
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RequestQuote;
