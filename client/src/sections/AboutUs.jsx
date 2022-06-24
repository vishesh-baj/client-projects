import React from "react";
import CustomButton from "../components/Button";
import Carosal from "../components/Carosal";

const AboutUs = () => {
  return (
    <div className="w-full h-auto p-10 md:py-20 bg-primary gap-10 text-white flex flex-col md:flex-row  justify-around">
      <div className="w-full flex flex-col gap-5 md:gap-10 md:w-1/2">
        <h1 className="text-4xl  md:text-[100px] ">About us</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          molestiae explicabo ex perspiciatis quasi sapiente numquam eum dicta
          doloremque error, dignissimos minus, sit illum beatae expedita
          facilis! Commodi dolore ea odit esse, porro harum quaerat officia,
          sunt nemo hic omnis placeat sit magnam non odio exercitationem
        </p>
        <CustomButton
          btnBgColor={"bg-info"}
          btnSize="w-40"
          btnText={"text-white"}
          btnTitle="Contact Us"
        />
      </div>
      <Carosal />
    </div>
  );
};

export default AboutUs;
