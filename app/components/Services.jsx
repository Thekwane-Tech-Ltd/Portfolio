"use client";

import { LuThumbsUp } from "react-icons/lu";
import { useEffect, useRef } from "react";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);


  const servicesData = [
  {
    img: "/image/serviceimg1.svg",
    title: "Web Application Development",
    desc: "We design and develop modern, scalable, and SEO-optimized web applications using technologies like React, Next.js, Node.js, and cloud platforms. Our web solutions are fast, secure, and built to grow with your business.",
    points: [
      "SaaS platforms",
      "Dashboards & admin systems",
      "Enterprise web applications",
      "Custom business platforms",
    ],
  },
  {
    img: "/image/serviceimg2.svg",
    title:
      "Custom Software Development & IT Consulting Application Development",
    desc: "Our custom software development services help businesses automate workflows, integrate systems, and build reliable digital infrastructure.",
    points: [
      "Backend & API development",
      "System architecture & code audits",
      "Software optimization",
      "Technical consulting",
    ],
  },
  {
    img: "/image/serviceimg3.svg",
    title: "Bot Development & Automation",
    desc: "We build scalable and secure Telegram bots, Discord bots, crypto bots, and automation systems to streamline operations and power blockchain ecosystems.",
    points: [
      "Telegram trading & utility bots",
      "Referral & reward bots",
      "Presale & token bots",
      "Business automation bots",
    ],
  },
  {
    img: "/image/serviceimg4.svg",
    title: "Blockchain Services",
    desc: "We provide full-stack blockchain development services for Web3 and crypto projects",
    points: [
      "Smart contract development",
      "Token creation (ERC-20, BEP-20)",
      "Web3 & DApp development",
      "Wallet integration",
      "Blockchain consulting",
    ],
  },
  {
    img: "/image/serviceimg5.svg",
    title: "Mobile App Development (Android & iOS)",
    desc: "We build cross-platform Android and iOS mobile applications using React Native and Expo, ensuring smooth performance and scalability.",
    points: [
      "MVP development",
      "Business & startup apps",
      "Booking & marketplace apps",
      "Chat & real-time applications",
    ],
  },
  {
    img: "/image/serviceimg6.svg",
    title: "2D & 3D Animation Services",
    desc: "We create engaging 2D explainer videos, 3D animations, motion graphics, and character animations that increase engagement.",
    points: [
      "Marketing & explainer videos",
      "Brand storytelling",
      "Educational animations",
      "Social media animation content",
    ],
  },
  {
    img: "/image/serviceimg7.svg",
    title: "Game Development Services",
    desc: "THEKWANE TECH LTD offers professional game development services for mobile, web, and interactive platforms.",
    points: [
      "Mobile game development",
      "Web-based games",
      "2D & 3D game development",
      "Game UI/UX & mechanics",
      "Monetization & reward systems",
    ],
  },
  {
    img: "/image/serviceimg8.svg",
    title: "3D Modeling & Character Design",
    desc: "High-quality 3D modeling, character design, and product visualization for games, animation, branding, and digital platforms.",
    points: [
      "3D character modeling",
      "Product visualization",
      "Game-ready assets",
      "Brand & concept design",
    ],
  },
];


  return (
    <div className="mt-15 relative z-20">
      <div className="text-center px-4">
        <h5 className="font-inter font-bold text-[20px] sm:text-[24px] text-[#000000] leading-[100%]">
          Comprehensive Digital, Software & Blockchain Solutions
        </h5>
        <p className="font-quantico font-medium text-[16px] sm:text-[22px] text-[#000000] leading-[120%] mt-3">
          At <span className="font-bold">THEKWANE TECH LTD,</span> we offer
          end-to-end digital services designed to help businesses
          <br className="hidden md:block" />
          build, scale, and innovate.
        </p>
      </div>

      <div
        ref={sectionRef}
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          my-8
          px-4 sm:px-8 md:px-20
          gap-8 gap-y-30 sm:gap-y-25 md:gap-y-20 "
      >
        {servicesData.slice(0, 6).map((service, index) => (
          <div
            key={index}
            className="
              service-card opacity-0 translate-y-12
              w-full md:w-[382px]
              h-auto md:h-[680px]
              bg-[#FFFFFF] shadow-lg p-5 rounded-lg
              transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] group
            "
          >
            <img
              src={service.img}
              alt="Serviceimg"
              className="transition-transform duration-500 group-hover:scale-105"
            />

            <h3 className="font-quantico font-bold text-[24px] md:text-[28px] mt-3 text-[#000000] leading-[110%]">
              {service.title}
            </h3>

            <p className="font-quantico font-medium text-[#555555] text-[16px] md:text-[18px] leading-[130%] mt-3">
              {service.desc}
            </p>

            <div className="mt-3 font-quantico font-medium text-[16px] md:text-[18px] text-[#555555]">
              {service.points.map((point, i) => (
                <div key={i} className="flex items-center gap-3 mt-3">
                  <LuThumbsUp />
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <button className="text-center bg-[#64EE97] py-2 px-3 text-[18px] md:text-[22px] rounded-md font-quantico mx-auto block mt-6 transition-all duration-300 hover:bg-[#176634] hover:text-white">
              Start your project
            </button>
          </div>
        ))}

        {/* CENTERED LAST ROW */}
        <div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-wrap justify-center gap-8 mt-10">
          {servicesData.slice(6).map((service, index) => (
            <div
              key={index}
              className="
                w-full sm:w-[382px]
                h-auto md:h-[680px]
                bg-[#FFFFFF] shadow-lg p-5 rounded-lg
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] group
              "
            >
              <img
                src={service.img}
                alt="Serviceimg"
                className="transition-transform duration-500 group-hover:scale-105"
              />

              <h3 className="font-quantico font-bold text-[24px] md:text-[28px] mt-3 text-[#000000]">
                {service.title}
              </h3>

              <p className="font-quantico font-medium text-[#555555] text-[16px] md:text-[18px] mt-3">
                {service.desc}
              </p>

              <div className="mt-3 font-quantico font-medium text-[16px] md:text-[18px] text-[#555555]">
                {service.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 mt-3">
                    <LuThumbsUp />
                    <p>{point}</p>
                  </div>
                ))}
              </div>

              <button className="text-center bg-[#64EE97] py-2 px-3 text-[18px] md:text-[22px] rounded-md font-quantico mx-auto block mt-6 transition-all duration-300 hover:bg-[#176634] hover:text-white">
                Start your project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
