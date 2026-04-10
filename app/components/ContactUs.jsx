"use client"

import { FaPhoneSquareAlt, FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {

  const getStartedBtn =
    "Hi, I’d like to get started on a project and discuss my ideas.";

   const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Submitting form..."); // 👈 debug

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: e.target.fullName.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Message sent successfully! ✅");
      e.target.reset();
    } else {
      toast.error("Failed to send message ❌");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong ❌");
  }
};

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 m-6 md:m-10 lg:m-20 items-start">
  
  {/* FORM CARD */}
  <div className="w-full lg:max-w-[500px] mx-auto md:mx-0 bg-white shadow-xl rounded-xl font-quantico">
    <div className="w-full p-6 md:p-8">
      <h2 className="text-[19.96px] font-medium mb-3">Contact Us</h2>
      <p className="text-[32px] md:text-[40.63px] font-bold leading-[100%] mb-6">
        Get In Touch
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 font-Montserrat text-[12.53px] leading-[100%] text-[#535353]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-[#F0F0F0]"
            />
          </div>

          <div>
            <label className="block mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 bg-[#F0F0F0]"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-[#F0F0F0]"
          />
        </div>

        <div>
          <label className="block mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            className="w-full px-4 py-3 bg-[#F0F0F0]"
          />
        </div>

        <div>
          <label className="block mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Write your message..."
            className="w-full px-4 py-3 bg-[#F0F0F0] resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-[#1A1A19] text-white font-bold"
        >
          SEND NOW
        </button>
      </form>
    </div>
  </div>

  {/* CONTACT */}
  <div className="font-quantico w-full">
    <h1 className="text-[24px] md:text-[28.39px] leading-[151%] font-bold">
      We’d love to hear from you!
    </h1>

    <p className="font-montserrat text-[16px] md:text-[17.38px] leading-[151%] font-light mb-8">
      Have a project, question, or idea in mind? <br />
      Reach out, our team is ready to bring your <br />
      vision to life.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 mb-10 text-center">

  {/* CALL */}
  <a href="tel:+2349030933281" className="block hover:scale-105 transition">
    <div>
      <FaPhoneSquareAlt className="size-8 mb-2 mx-auto" />
      <h6 className="font-montserrat text-[17px]">Call Us</h6>
      <p>+234 903 093 3281</p>
    </div>
  </a>

  {/* EMAIL */}
  <a href="mailto:admin@thekwane.org" className="block hover:scale-105 transition">
    <div>
      <MdOutlineMail className="size-8 mb-2 mx-auto" />
      <h6 className="font-montserrat text-[17px]">Email</h6>
      <p>admin@thekwane.org</p>
    </div>
  </a>

  {/* WHATSAPP */}
  <a
    href="https://wa.me/2349030933281?text=Hi%20I%20am%20interested%20in%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="block hover:scale-105 transition"
  >
    <div>
      <FaWhatsappSquare className="size-8 mb-2 mx-auto" />
      <h6 className="font-montserrat text-[17px]">WhatsApp</h6>
      <p>+234 903 093 3281</p>
    </div>
  </a>

  {/* LOCATION */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=5+Olabimpe+Careena+Aga+Lagos"
    target="_blank"
    rel="noopener noreferrer"
    className="block hover:scale-105 transition"
  >
    <div>
      <IoLocationSharp className="size-8 mb-2 mx-auto" />
      <h6 className="font-montserrat text-[17px]">Our Office</h6>
      <p>5, Olabimpe Careena Aga Lagos</p>
    </div>
  </a>

</div>

    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Our Location
      </h2>

      <div className="w-full h-[250px] md:h-[271px] rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=5,+Olabimpe+Careena,+Aga,+Lagos&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</div>

      <div className="bg-[#58D185C9]/79 w-full h-auto mt-30">
        <div className="text-center font-rammettoOne font-bold p-10 md:p-20 ">
          <h1 className="leading-[151%] mb-5 md:mb-10 text-[20.81px] md:text-[36.81px] ">
            Let’s Build Secure, Scalable & Innovative <br /> Digital Solutions
          </h1>
          <a
                href={`https://wa.me/2349030933281?text=${encodeURIComponent(getStartedBtn)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-1 rounded-full bg-[#3D9865] font-quantico text-white">
            Get Started
          </button>
              </a>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
