import { CiFacebook, CiLinkedin, CiInstagram, CiTwitter } from "react-icons/ci";
import { PiTiktokLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="relative h-[650px]">
      <div className="absolute inset-0 bg-gradient-to-l from-[#176634] to-black z-0" />
      <img
        src="/image/Footerbg.svg"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">
        <div className="flex items-start justify-center gap-40 mt-10">
          <div>
            <img src="/image/logo.svg" alt="logo" className="w-50 mb-5" />
            <p className="max-w-md text-[17px] leading-[27px] opacity-90 mb-3">
              Helping businesses stand out with <br /> powerful identities and
              strategies that <br /> drive results.
            </p>
            <img src="/image/Hline.svg" alt="divider" className="h-2 mb-5" />
            <ul className="flex items-center gap-1 text-2xl">
              <li>
                <a href="#" className="hover:text-[#64EE97] transition">
                  <CiFacebook className="size-5" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#64EE97] transition">
                  <CiLinkedin className="size-5" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#64EE97] transition">
                  <CiInstagram className="size-5" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#64EE97] transition">
                  <PiTiktokLogo className="size-5" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#64EE97] transition">
                  <CiTwitter className="size-5" />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-start justify-around gap-40 ">
            <div className="font-quantico">
              <h6 className="font-bold text-[#16D612] text-[18px] text-left">QUICKLINKS</h6>
              <ul className="text-[15px] font-medium text-left Leading-[100%]">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="font-quantico">
              <h6 className="font-bold text-[#16D612] text-[18px] text-left">LEGAL</h6>
              <ul className="text-[15px] font-medium text-left Leading-[100%]">
              <li><a href="#">Privacy </a></li>
              <li><a href="#">Terms & Condition</a></li>
              <li><a href="#">Returns Policy</a></li>
              </ul>
            </div>
            <div className="font-quantico">
              <h6 className="font-bold text-[#16D612] text-[18px] text-left">HELP</h6>
              <ul className="text-[15px] font-medium text-left Leading-[100%]">
              <li><a href="#">Help & FAQ</a></li>
              <li><a href="#">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
