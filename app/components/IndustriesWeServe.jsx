const IndustriesWeServe = () =>{
    return (
        <div className="relative h-[533px] my-30">
      <div className="absolute inset-0 bg-gradient-to-l from-[#176634] to-black z-0" />
      <img
        src="/image/Portfolioimg7.svg"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 max-w-7xl md:mx-20 my-20 px-3 py-20 text-white font-quantico grid grid-cols-2 md:grid-cols-3 gap-6 gap-y-28">
        <div className="text-white font-racingSansOne">
          <h1 className="text-[20.68px] md:text-[57.68px] leading-[100%]">Industries we <span className="text-[#64EE97] text-[30.21px] md:text-[89.21px] leading-[100%] ml-20">SERVE</span></h1>
        
        </div>
        <div className="relative">
          <img src="/image/Subtract.svg" alt="subtract-img" />
          <img src="/image/Iws1.svg" alt="iws-icon" className="absolute -top-8 -left-2 " />
          <p className="absolute top-6 left-15 text-[12.31px] md:text-[22.31px]">Startups & SaaS  </p>
        </div>
        <div className="relative">
          <img src="/image/Subtract.svg" alt="subtract-img" />
          <img src="/image/Iws2.svg" alt="iws-icon" className="absolute -top-8 -left-2 " />
          <p className="absolute top-6 left-10 text-[12.31px] md:text-[22.31px]">Blockchain & Crypto    </p>
        </div>
        <div className="relative">
          <img src="/image/Subtract.svg" alt="subtract-img" />
          <img src="/image/Iws3.svg" alt="iws-icon" className="absolute -top-8 -left-2 " />
          <p className="absolute top-6 left-15 text-[12.31px] md:text-[22.31px]">Fintech & Web3   </p>
        </div>
        <div className="relative">
          <img src="/image/Subtract.svg" alt="subtract-img" />
          <img src="/image/Iws4.svg" alt="iws-icon" className="absolute -top-8 -left-2 " />
          <p className="absolute top-6 left-15 text-[12.31px] md:text-[22.31px]"> E-commerce   </p>
        </div>
        <div className="relative">
          <img src="/image/Subtract.svg" alt="subtract-img" />
          <img src="/image/Iws5.svg" alt="iws-icon" className="absolute -top-8 -left-2 " />
          <p className="absolute top-3 left-11 text-[12.31px] md:text-[22.31px] leading-[100%]">Media, Education & <br /> Entertainment </p>
        </div>
      </div>

      
    </div>
    )
}

export default IndustriesWeServe