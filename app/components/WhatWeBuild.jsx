"use client";
import { useState, useRef, useEffect } from "react";
import { LuDot } from "react-icons/lu";

const WhatWeBuild = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // store video refs in an array
  const videoRefs = useRef([]);

  // Detect if device is mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  const projects = [
    {
      title: "Junni",
      description: "Threejs website",
      image: "/image/Portfolioimg1.svg",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure banking application with biometric authentication",
      image: "/image/portfolioimg2.svg",
      category: "Mobile App",
      tags: ["React Native", "Firebase", "Biometrics"],
    },
    {
      title: "2D Japanese Animation",
      description: "2d anime animation",
      image: "/image/Portfolioimg3.svg", // preview 
      video: "/image/videos/2djapanseanimations.mp4",
      category: "Animation",
      tags: ["Blender", "Illustrator", "After Effects"],
    },
    {
      title: "3D Character Model",
      description: "High-poly character model for gaming",
      image: "/image/Portfolioimg4.svg",
      category: "3D Modeling",
      tags: ["Blender", "Unity"],
    },
    {
      title: "Disney-pixar",
      description: "3d-Animation-video-disney-pixar",
      image: "/image/Portfolioimg5.svg",
      video: "/image/videos/disneypixaranimation.mp4",
      category: "VRChat",
      tags: ["After Effects", "Cinema 4D", "Illustrator"],
    },
    {
      title: "Pixar Disney Animation",
      description: "2d animated short",
      image: "/image/Portfolioimg6.svg",
      video: "/image/videos/pixardisneyanimation.mp4",
      category: "VRChat",
      tags: ["blender","Unity", "VRChat SDK"],
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "Blockchain",
    "3D Modeling",
    "Animation",
    "VRChat",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );
      

          const handleVideoToggle = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className="my-20 font-quantico">
      {/* HEADER */}
      <div className="text-center">
        <button className="border border-black px-3 py-2 text-[22px] rounded-full mb-6">
          What We Build
        </button>
        <p className="text-[23px]">
          Explore our latest projects and creative solutions
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-sm shadow-lg transition ${
                activeCategory === category ? "bg-[#64EE97]" : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6 md:px-10 lg:px-20">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-black rounded-b-md overflow-hidden group"
          >
            {/* VIDEO / IMAGE HOVER */}
            <div className="relative w-full h-[220px] md:h-[260px] lg:h-[280px]"
            onClick={() => isMobile && handleVideoToggle(index)}
            >
              {project.video ? (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={project.video}
                    controls={true}
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
                    onMouseEnter={() => !isMobile && videoRefs.current[index]?.play()}
                    onMouseLeave={() => !isMobile && videoRefs.current[index]?.pause()}
                  />
                </>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* INFO */}
            <div className="p-5">
              <h1 className="font-bold text-white text-[24px] mb-3">
                {project.title}
              </h1>
              <p className="text-white mb-5 text-sm">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, i) => (
                  <button
                    key={i}
                    className="bg-[#686868] text-white text-[10px] rounded-full py-1 px-3"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DELIVERY SECTION */}
      <div className="w-full max-w-6xl mx-auto bg-white rounded-md shadow-lg mt-20 p-8">
        <div className="flex flex-wrap justify-around gap-6">
          <div className="flex items-center gap-3">
            <LuDot className="size-8 text-[#3D9865]" />
            <p>Project discovery & technical planning</p>
          </div>
          <div className="flex items-center gap-3">
            <LuDot className="size-8 text-[#3D9865]" />
            <p>UI/UX design & architecture</p>
          </div>
          <div className="flex items-center gap-3">
            <LuDot className="size-8 text-[#3D9865]" />
            <p>Agile development & testing</p>
          </div>
          <div className="flex items-center gap-3">
            <LuDot className="size-8 text-[#3D9865]" />
            <p>Deployment & launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeBuild;