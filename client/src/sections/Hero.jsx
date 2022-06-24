import React from "react";
import CustomButton from "../components/Button";
const Hero = ({ mainHeading, subHeading }) => {
  return (
    <>
      <div className="w-full  h-[100vh] p-10  flex flex-col md:flex-row justify-center items-center text-white gap-10  bg-[url('https://images.pexels.com/photos/4227112/pexels-photo-4227112.jpeg?cs=srgb&dl=pexels-mix-and-match-studio-4227112.jpg&fm=jpg')]  bg-cover bg-center ">
        <div className=" flex flex-col px-3 items-start md:items-center gap-5">
          <h1 className="text-7xl font-semibold text-blue-600  md:text-center md:text-[120px]">
            {mainHeading}
          </h1>
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
