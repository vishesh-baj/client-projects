import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          {/* hero content */}
          <div className="flex flex-col justify-center align-middle  gap-3 md:gap-5">
            <h1 className=" text-[100px] lg:text-[130px] text-black">
              Disha Helpline
            </h1>
            <div className="flex justify-center gap-5">
              <button className="btn btn-error">Know More</button>
              <button className="btn btn-warning">Conacts Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
