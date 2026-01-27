const About = () => {
  return (
    <section>
      <div className="mx-17 my-10 p-10 font-quantico">
        <div className="flex items-start justify-center gap-10">
          <div>
            <img src="image/aboutimg.svg" alt="aboutimage" />
          </div>
          <div>
            <button className="border border-[#000000] px-3 rounded-full">About us</button>
            <h5 className="font-bold text-[32.31px] text-[#3D9865] leading-[100%] mt-5">
              THEKWANE TECH LTD{" "}
              <span className="text-[#000000]">
                is a team- <br />driven digital agency delivering <br /> scalable,secure, and
                future-ready <br /> digital products.
              </span>
              
            </h5>
            <p className="font-md text-[20px] leading[145%] mt-3">
              We design and develop web apps, mobile applications, <br /> blockchain
              systems, automated bots, game development and <br /> animated content
              that help businesses increase efficiency, <br /> user engagement, and
              revenue. Our multidisciplinary team <br /> combines engineering, design,
              animation, and blockchain <br /> expertise under one roof.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-t from-[#69F79C] to-[#398856] mt-40 rounded-xl flex items-center gap-5 w-[1022px] h-[218px] mx-auto p-5 relative ">
            <div className="w-[272px] h-[302px] bg-[#64EE97] rounded-t-xl p-5 relative -top-15 -left-0">
              <h6 className="font-bold text-[30px] text-[#001219] leading-[100%] mt-15">
                We have done
                the impossible
              </h6>
              <p className="font-md text-[23px] text-[#001219] leading-[100%] mt-3 ">
                we don’t just build  projects, we build {" "}
                partnerships. Let’s  create something extraordinary
                together.
              </p>
            </div>
            <div>
              <h4 className="text-[65px] text-white font-bold leading-[100%]">10K+</h4>
              <p className="text-[23px] text-white font-bold leading-[100%]">Active Users</p>
            </div>
						<img src="image/Line.svg" alt="line" />
            <div>
              <h4 className="text-[65px] text-white font-bold leading-[100%]">500+</h4>
              <p className="text-[23px] text-white font-bold leading-[100%]">Project Completed</p>
            </div>
						<img src="image/Line.svg" alt="line" />
            <div>
              <h4 className="text-[65px] text-white font-bold leading-[100%]">5+</h4>
              <p className="text-[23px] text-white font-bold leading-[100%]">Years of Partnership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
