"use client";

import { motion } from "framer-motion";
import { CiFacebook, CiLinkedin, CiInstagram, CiTwitter } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi";

const Footer = () => {
  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <footer className="relative h-[650px]">
      <div className="absolute inset-0 bg-gradient-to-l from-[#176634] to-black z-0" />
      <img
        src="/image/Footerbg.svg"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-start justify-center gap-40 mt-10" variants={fadeUp}>
          {/* Logo & Social */}
          <motion.div variants={fadeUp}>
            <img src="/image/logo.svg" alt="logo" className="w-50 mb-5" />
            <p className="max-w-md text-[17px] leading-[27px] opacity-90 mb-3">
              Helping businesses stand out with <br /> powerful identities and
              strategies that <br /> drive results.
            </p>
            <img src="/image/Hline.svg" alt="divider" className="h-2 mb-5" />
            <ul className="flex items-center gap-1 text-2xl">
              {[CiFacebook, CiLinkedin, CiInstagram, PiTiktokLogo, CiTwitter].map((Icon, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.2, color: "#64EE97" }}
                  transition={{ duration: 0.3 }}
                >
                  <a href="#">
                    <Icon className="size-5" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Link Columns */}
          <motion.div className="flex items-start justify-around gap-40" variants={fadeUp}>
            <motion.div className="font-quantico" variants={fadeUp}>
              <h6 className="font-bold text-[#16D612] text-[18px] text-left">QUICKLINKS</h6>
              <ul className="text-[15px] font-medium text-left Leading-[100%]">
                <li className="mb-5"><a href="#">Home</a></li>
                <li className="mb-5"><a href="#">Services</a></li>
                <li className="mb-5"><a href="#">Portfolio</a></li>
                <li className="mb-5"><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </motion.div>

            <motion.div className="font-quantico" variants={fadeUp}>
              <h6 className="font-bold text-[#16D612] text-[18px] text-left">LEGAL</h6>
              <ul className="text-[15px] font-medium text-left Leading-[100%]">
                <li className="mb-5"><a href="#">Privacy </a></li>
                <li className="mb-5"><a href="#">Terms & Condition</a></li>
                <li><a href="#">Returns Policy</a></li>
              </ul>
            </motion.div>

            <motion.div className="font-quantico" variants={fadeUp}>
              <h6 className="font-bold text-[#16D612] text-[18px] text-left">HELP</h6>
              <ul className="text-[15px] font-medium text-left Leading-[100%]">
                <li className="mb-5"><a href="#">Help & FAQ</a></li>
                <li><a href="#">Terms & Condition</a></li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
