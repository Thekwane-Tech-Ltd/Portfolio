const RequestQuote = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-t from-[#070E14] to-[#070E14]">
        <img src="/image/Rqbg.svg" alt="image" />
      </div>
      <div className="mx-auto text-center absolute top-40 left-50">
        <h4 className="font-questrial text-[33.07px] font-medium leading-[130%] text-white mb-5">
          Looking for a reliable software and blockchain development
          company?{" "}
        </h4>
        <p className="font-rasa text-[28.13px] font-medium leading-[130%] text-white">Let’s build your next digital solution.</p>
        <button className="font-rasa text-[24.78px] font-medium px-5 py-1 bg-[#64EE97] text-[#070E14] rounded-full">Request a Quote</button>
      </div>
    </div>
  );
};

export default RequestQuote;
