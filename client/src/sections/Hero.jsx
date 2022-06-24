import React from "react";
import CustomButton from "../components/Button";
const Hero = ({ mainHeading, subHeading }) => {
  return (
    <>
      <div className="w-screen  h-[100vh] p-10  flex flex-col md:flex-row justify-center items-center text-white gap-10  bg-[url(https://api.lorem.space/image/fashion?w=1000&h=800)]  bg-cover bg-center">
        <div className="md:w-1/2 flex flex-col items-start md:items-center gap-5">
          <h1 className="text-8xl md:text-[120px]">{mainHeading}</h1>
          <p className="text-3xl md:text-4xl">{subHeading}</p>
          <div className="flex gap-5">
            <CustomButton
              btnBgColor="bg-primary"
              btnText="text-white"
              btnTitle="Know More"
              btnSize="w-40 md:w-52"
            />
            <CustomButton
              btnBgColor="bg-red-500"
              btnText="text-white"
              btnTitle="Emergency"
              btnSize="w-40 md:w-52"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
