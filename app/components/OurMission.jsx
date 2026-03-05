"use client";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const OurMission = () => {
  // Motion values for count-up
  const users = useMotionValue(0);
  const projects = useMotionValue(0);
  const years = useMotionValue(0);

  const usersText = useTransform(users, (v) => `${Math.round(v)}K+`);
  const projectsText = useTransform(projects, (v) => `${Math.round(v)}+`);
  const yearsText = useTransform(years, (v) => `${Math.round(v)}+`);

  // Animate a motion value from start to end
  const runCount = (mv, end, duration = 1.5) => {
    mv.set(0); // reset to zero every time
    animate(mv, end, { duration, ease: "easeOut" });
  };

  return (
    <section>
      <div>
        {/* About Text */}
        <div className="font-quantico text-justify m-5 md:m-20">
          <h1 className="font-bold text-[15.53px]  md:text-[30.53px] leading-[108%]">
            THEKWANE TECH LTD{" "}
            <span className="font-medium">
              is a modern digital agency and software development company
              providing web development, mobile app development, blockchain
              solutions, game development, bot creation, and animation services
              to clients globally. We are not a one-man operation. We operate as
              a collaborative team of developers, designers, reliable and
              scalable digital solutions.
            </span>
          </h1>
        </div>
        {/* Our Mission */}
        <div className="h-[750px] md:h-[650px] lg:h-[525px] w-full relative mb-60">
          {/* background */}
          <div className="absolute inset-0 bg-[#254031] z-0">
            <img
              src="/image/OurmissionImg.svg"
              alt="Ourmissionbackground"
              className="absolute inset-0 w-full h-full md:h-full left-11 md:left-50 z-0"
            />
          </div>
          {/* body */}
          <div className="relative z-10 font-quantico">
            <div>
              <div className="p-5 md:p-10 text-white flex items-center font-bold text-[17.58px] leading-[108%]">
                <h4>OUR MISSION & VISION</h4>
                <img src="/image/Omline.svg" alt="line" />
              </div>
              <div className="p-5 md:p-10 text-white  ">
                <h1 className="font-bold text-[20px] md:text-[31.61px] leading-[108%]">
                  DISCOVER THE CORE PRINCIPLE THAT GUIDE US
                </h1>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-15 m-2 md:gap-10 p-5 lg:p-10 ">
                <div className="w-[411px] md:h-[230px] h-[212px] bg-white relative">
                  <div className="w-[71px] h-[71px] bg-[#64EE97] flex items-center justify-center absolute -top-10 left-20">
                    <img src="image/Omicon1.svg" alt="Omicon" />
                  </div>
                  <div className="p-5 mt-10">
                    <div>
                      <h5 className="font-quantico font-bold text-[20px] leading-[108%]">
                        OUR MISSION
                      </h5>
                      <p className="font-quantico font-light text-justify text-[20px] leading-[108%] mt-3">
                        To help businesses and startups succeed by building
                        secure, scalable, and innovative digital products that
                        solve real-world problems and drive growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[411px] md:h-[230px] h-[212px] bg-white relative">
                  <div className="w-[71px] h-[71px] bg-[#64EE97] flex items-center justify-center absolute -top-10 left-20">
                    <img src="image/Omicon2.svg" alt="Omicon" />
                  </div>

                  <div className="p-5 mt-10">
                    <div>
                      <h5 className="font-quantico font-bold text-[20px] leading-[108%]">
                        OUR VISION
                      </h5>
                      <p className="font-quantico font-light text-justify text-[20px] leading-[108%] mt-3">
                        To become a trusted global technology partner known for
                        excellence in software development, blockchain
                        innovation, game development, and creative animation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* STATS */}
            <motion.div
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="bg-gradient-to-t from-[#69F79C] to-[#398856] rounded-sm flex items-center justify-center gap-5 w-[370px] md:w-[750px] lg:w-[1022px] h-[600px] md:h-[218px] mx-auto p-5 relative top-5 lg:-top-5"
            >
              <div className=" m-25 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
                {/* USERS */}
                <motion.div
                  variants={slideUp}
                  onViewportEnter={() => runCount(users, 10)}
                >
                  <motion.h4 className="text-[55px] md:text-[65px] text-white font-bold leading-[100%]">
                    {usersText}
                  </motion.h4>
                  <p className="text-[20px] md:text-[23px] text-white font-bold leading-[100%] text-center">
                    Active Users
                  </p>
                </motion.div>

                <img src="image/Line.svg" alt="line" />

                {/* PROJECTS */}
                <motion.div
                  variants={slideUp}
                  onViewportEnter={() => runCount(projects, 500)}
                >
                  <motion.h4 className="text-[55px] md:text-[65px] text-white font-bold leading-[100%]">
                    {projectsText}
                  </motion.h4>
                  <p className="text-[20px] md:text-[23px] text-white font-bold leading-[100%] text-center">
                    Project Completed
                  </p>
                </motion.div>

                <img src="image/Line.svg" alt="line" />

                {/* YEARS */}
                <motion.div
                  variants={slideUp}
                  onViewportEnter={() => runCount(years, 5)}
                >
                  <motion.h4 className="text-[55px] md:text-[65px] text-white font-bold leading-[100%] text-center">
                    {yearsText}
                  </motion.h4>
                  <p className="text-[20px] md:text-[23px] text-white font-bold leading-[100%] text-center">
                    Years of Partnership
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        {/*Grid */}
        <div>
          <div className="mt-150 md:mt-0 mx-6 md:mx-3 md:m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 lg:gap-10 font-quantico">
            <div className="w-full lg:w-[385px] h-[544px] bg-white rounded-[29.29px] shadow-lg">
              <div className="pt-15">
                <h4 className="text-[26.41px] font-bold pl-3 ">
                  What Makes Us Different
                </h4>
                <img src="image/Omline1.svg" alt="line" className="mb-6" />
               <div className="p-5">
                 <ol className="list-disc pl-6 space-y-2 marker:text-[#000000] text-black text-[20.99px] leading-[180%]">
                  <li>Team-based project execution</li>
                  <li>Expertise across multiple digital domains</li>
                  <li>Business-focused development approach</li>
                  <li>Transparent communication</li>
                  <li>Long-term partnership mindset</li>
                </ol>
               </div>
              </div>
            </div>

            <div className="w-full lg:w-[385px] h-[544px] bg-white rounded-[29.29px] shadow-lg">
              <div className="pt-15">
                <h4 className="text-[26.41px] font-bold pl-3 ">
                  Our Approach
                </h4>
                <img src="image/Omline1.svg" alt="line" className="mb-6" />
                <div className="p-5">
                   <p className="mb-4 text-gray-700 text-[16px] leading-[120%]">
                  We follow a structured and agile approach:
                </p>
                  <ol className="list-disc pl-6 space-y-2 marker:text-[#000000] text-black text-[20.99px] leading-[180%]">
                  <li>Discovery & strategy</li>
                  <li>Design, animation & architecture</li>
                  <li>Development & testing</li>
                  <li>Deployment & launch</li>
                  <li>Ongoing support & scaling</li>
                </ol></div>
              </div>
            </div>

            <div className="w-full md:w-[385px] h-[544px] bg-white rounded-[29.29px] shadow-lg">
              <div className="pt-15 ">
                <h4 className="text-[26.41px] font-bold pl-3 ">
                  Who We Work With
                </h4>
                <img src="image/Omline1.svg" alt="line" className="mb-6" />
                <div className="p-5">
                  <ol className="list-disc pl-6 space-y-2 marker:text-[#000000] text-black text-[20.99px] leading-[180%]">
                  <li>Startups & entrepreneurs</li>
                  <li>Web3 & blockchain projects</li>
                  <li>Gaming studios & creators</li>
                  <li>SMEs & enterprises</li>
                  <li>Digital brands & agencies</li>
                </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Clients Choose Us */}
        <div className="m-8 md:m-18 lg:m-35">
          <div className="text-center font-quantico">
            <h3 className="text-[28.3px] leading-[137%] ">Why Clients Choose </h3>
            <h1 className="text-[#3D9865] text-[30.03px] md:text-[39.03px] font-bold leading-[137%]">THEKWANE TECH LTD </h1>
            <p className="text-[15px] md:text-[25px] leading-[137%] font-medium"> Clients choose us for our  technical depth, creative  strength, reliability, and team- <br /> based  delivery model  . We focus on building long-term relationships  and <br /> delivering measurable  results.</p>
          </div>
        </div>
        {/* Build Future */}
        <div className="bg-[#58D185C9]/79 w-full h-auto">
         <div className="text-center font-rammettoOne font-bold p-10 md:p-20 ">
          <h1 className="leading-[137%] mb-5 md:mb-10 text-[15.03px] md:text-[39.03px] ">Let’s Build the Future Together</h1>
          <button className="px-5 py-2 rounded-full bg-white font-quantico">Get Started</button>
         </div>
        </div>
      </div>
    </section>
  );
};
export default OurMission;
