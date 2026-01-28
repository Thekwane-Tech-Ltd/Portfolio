"use client";

import { motion } from "framer-motion";

const WhyChooseUs = () => {
    return (
     <div className="mx-6 lg:mx-17 my-30 p-6 lg:p-10 font-quantico">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="w-fit mx-auto text-center mb-2"
        >
          <button className="border border-black py-1 px-5 rounded-xl text-[27.11px] font-bold leading-none">
           Why choose <span className="font-medium">us?</span>
          </button>
          <p className="text-[24px] font-medium mt-2">
            At Thekwane, we don’t just build projects, we build partnerships. Let’s create something extraordinary together.
          </p>
        </motion.div>

        <div className="flex items-center justify-around gap-15">
          <div className="bg-[#3D9865] w-[101px] h-[466px] relative -left-35 rounded-xl"></div>
          <div>
           <div className="text-center my-5">
            <img src="image/wcu1.svg" alt="img" className="mx-auto " />
            <h5 className="font-bold text-[22.22px] text-[#000000] leading-[100%]">Collaborative Approach</h5>
            <p className="font-medium text-sm leading-[100%] text-[#555555]">We see ourselves as an extension of your team.</p>
          </div>

            <div className="text-center mt-18" >
              <img src="image/wcu2.svg" alt="img" className="mx-auto" />
              <h5 className="font-bold text-[22.22px] text-[#000000]">Innovation-Driven</h5>
              <p className="font-medium text-sm leading-[100%] text-[#555555]">We stay ahead of trends to give you future-ready solutions.</p>
            </div>
          </div>
          <div>
            <img src="image/wcu3.svg" alt="image" className="" />
          </div>
          <div>
            <div className="text-center my-5">
              <img src="image/wcu4.svg" alt="img" className="mx-auto" />
              <h5 className="font-bold text-[22.22px] text-[#000000]">Results-Focused</h5>
              <p className="font-medium text-sm leading-[100%] text-[#555555]">Your success is the true measure of our work.</p>
            </div>
            <div className="text-center mt-18">
              <img src="image/wcu5.svg" alt="img" className="mx-auto" />
              <h5 className="font-bold text-[22.22px] text-[#000000]">IT Expert</h5>
              <p className="font-medium text-sm leading-[100%] text-[#555555] ">We understand your business needs.</p>
            </div>
          </div>
          <div className="bg-[#3D9865] w-[101px] h-[466px] relative -right-35 rounded-xl"></div>
        </div>
     </div>
    )
}

export default WhyChooseUs;