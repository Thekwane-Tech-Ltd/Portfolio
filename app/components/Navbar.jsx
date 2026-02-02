import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <section className="h-[492px] w-full relative">
      <div className="absolute inset-0  bg-[#222222] z-0">
        <img
          src="/image/ServiceImg.png"
          alt="Servicebackground"
          className="absolute inset-0 object-cover z-0"
        />
        <div className="m-5 relative z-10 font-quantico">
          <nav className="flex items-center justify-between ml-11 mr-11 ">
            <img src="/image/logo.svg" alt="logo" />
            <ul className="flex items-center gap-8 font-quantico">
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">Home</a>
              </li>
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="/Service">Services</a>
              </li>
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">Portfolio</a>
              </li>
              <li className="text-[#64EE97] font-medium  text-md">
                <a href="#">About</a>
              </li>
            </ul>

            <div className="flex justify-center">
              <div>
                <button className="bg-white px-2 rounded-sm">Contact us</button>
              </div>
              <div className="w-6 h-6 bg-[#64EE97] rounded-full flex items-center justify-center ">
                <GoArrowUpRight className="text-white text-center" />
              </div>
            </div>
          </nav>
        </div>

        <div className="mx-40 my-20 text-center relative z-10">
          <button className="border border-white px-3 py-2 text-white text-[22px] leading-[100%] rounded-full mb-10 font-quantico">Our Services</button>
          <h1 className="font-rasa font-bold text-white text-[64px] leading-[100%] mb-3">Smart Digital Solutions Built for Growth</h1>
          <p className="font-medium text-white text-[22px] leading-[100%] font-quantico ">We design, build, and scale technology solutions that help businesses <br /> stand out, perform better, and grow faster in the digital world.</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
