import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-4 ">
        {/* Left Section */}
        <div className="col-span-3 bg-[#001219] pt-5 pb-60 relative ">
          <nav className="flex items-center justify-between ml-11 mr-11 ">
            <img src="/image/logo.svg" alt="logo" />
            <ul className="flex items-center gap-8 font-quantico">
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">Home</a>
              </li>
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">Services</a>
              </li>
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">Portfolio</a>
              </li>
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">About</a>
              </li>
            </ul>
          </nav>
          <div className="p-5 ml-10 mt-30 font-quantico">
            <h1 className="text-[#64EB95] font-bold text-[39.61px] leading-[100%]">
              BRINGING IDEAS TO LIFE THROUGH
            </h1>
            <h2 className="font-bold text-[63.08px] leading-[100%] bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
              SOFTWARE INNOVATIVE
            </h2>
            <h3 className="font-bold text-[101.14px] leading-[100%] bg-gradient-to-r from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
              {" "}
              & 3D ANIMATION
            </h3>

            <p className="font-md text-[24px] leading-6 mt-5 text-[#FFFFFF]">
              We build immersive visuals and scalable <br /> software, all
              tailored to help your brand stand out.
            </p>
          </div>
          <div className="flex items-center gap-5 ml-17 mt-5">
            <button className="bg-[#64EB95] py-2 px-3 flex items-center gap-2 font-md text-md text[#001219]  ">
              Request a
              <span className="font-bold text-sm">Free Consultation</span>
              <GoArrowUpRight />
            </button>

            <button className="bg-[#64EB95] py-2 px-3 flex items-center gap-2 font-md text-md text[#001219]  ">
              View Our Portfolio
              <GoArrowUpRight />
            </button>
          </div>
          <div className="ml-90 mt-5">
            <img src="image/Hline.svg" alt="Hline" />
          </div>
          <div className="absolute bottom-0 -right-60">
            <img
              src="image/cyberboy.svg"
              alt="cyberpunkboyillustration"
              className="size-155"
            />
          </div>
          <div className="bg-[#414141]/50 w-[598px] h-[97px] flex items-center gap-5 p-5 font-quantico absolute bottom-10 -right-60">
            <div>
              <h4 className="text-[#64EE97] text-5xl font-bold">500+</h4>
              <p className="text-[#FFFFFF] text-sm">Project Delivered</p>
            </div>
            <img src="image/Line.svg" alt="line" />
            <p className="text-[#FFFFFF] text-sm">
              We're here to help you transform your ideas <br /> into digital
              reality.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <div className="bg-gradient-to-b from-[#69F79C] to-[#001219] h-[842px] pt-5  font-quantico">
            <div className="flex justify-center">
              <div>
                <button className="bg-white px-2 rounded-sm">Contact us</button>
              </div>
              <div className="w-6 h-6 bg-[#1B1B1B] rounded-full flex items-center justify-center ">
                <GoArrowUpRight className="text-white text-center" />
              </div>
            </div>
            <div className="mt-20 flex justify-center">
              <p className="font-medium text-lg leading-[100%] ">
                Impowering industries <br />
                with next-Gen Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
