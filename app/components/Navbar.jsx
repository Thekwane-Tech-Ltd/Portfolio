"use client";

import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="h-[492px] w-full relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#222222] z-0">
        <img
          src="/image/ServiceImg.png"
          alt="Servicebackground"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* CONTENT WRAPPER (nav + hero text) */}
      <div className="relative z-10 font-quantico">

        {/* NAVBAR */}
        <nav className="flex items-center justify-between mx-6 md:mx-10 lg:mx-20 p-5">
          <img src="/image/logo.svg" alt="logo" />

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8 font-quantico">
            <li className="text-[#64EE97] font-medium text-md">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[#64EE97] font-medium text-md">
              <Link href="/Service">Service</Link>
            </li>
            <li className="text-[#64EE97] font-medium text-md">
              <Link href="/Portfolio">Portfolio</Link>
            </li>
            <li className="text-[#64EE97] font-medium text-md">
              <Link href="/About">About</Link>
            </li>
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex justify-center">
            <div>
              <button className="bg-white px-2 rounded-sm"><Link href="/Contact">Contact Us</Link></button>
            </div>
            <div className="w-6 h-6 bg-[#64EE97] rounded-full flex items-center justify-center">
              <GoArrowUpRight className="text-white" />
            </div>
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden absolute top-[80px] left-0 w-full bg-black/90 backdrop-blur-sm px-10 py-8 space-y-6">
            <ul className="flex flex-col gap-6">
              <li className="text-[#64EE97] text-lg">
                <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              </li>
              <li className="text-[#64EE97] text-lg">
                <Link href="/Service" onClick={() => setOpen(false)}>Service</Link>
              </li>
              <li className="text-[#64EE97] text-lg">
                <Link href="/Portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
              </li>
              <li className="text-[#64EE97] text-lg">
                <Link href="/About" onClick={() => setOpen(false)}>About</Link>
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-4">
              <button className="bg-white px-2 rounded-sm"><Link href="/Contact">Contact Us</Link></button>
              <div className="w-6 h-6 bg-[#64EE97] rounded-full flex items-center justify-center">
                <GoArrowUpRight className="text-white" />
              </div>
            </div>
          </div>
        )}

        {/* HERO TEXT */}
        <div className="mx-10 my-15 md:mx-10 md:my-10 lg:mx-40 lg:my-20 text-center">
          <button className="border border-white px-8 py-3 md:px-3 md:py-2 text-white text-[18px] md:text-[22px] leading-[100%] rounded-full mb-10 font-quantico">
            Our Services
          </button>

          <h1 className="font-rasa font-bold md:font-bold text-white text-[28px] md:text-[35px] lg:text-[64px] leading-[100%] mb-3">
            Smart Digital Solutions Built for Growth
          </h1>

          <p className="font-light md:font-medium text-white text-[14px] md:text-[22px] leading-[100%] font-quantico">
            We design, build, and scale technology solutions that help businesses
            <br />
            stand out, perform better, and grow faster in the digital world.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Navbar;
