import React from "react";
import Card from "../components/Card";

const Services = () => {
  return (
    <div className="w-full h-auto py-10 bg-sky-700">
      <h1 className="text-4xl text-white text-left pl-24 py-5 md:text-8xl">
        Services
      </h1>
      <div className="flex flex-col md:flex-row  md:gap-5 gap-2 justify-center items-center px-2 md:px-5 py-5 ">
        <Card
          mainHeading={"Aayushman Card"}
          subHeading="Aayushman card holders will get free treatment in all givernment affilieated hospitals."
          backdropImg={"https://api.lorem.space/image/shoes?w=400&h=225"}
        />
        <Card
          mainHeading={"Aayushman Card"}
          subHeading="Aayushman card holders will get free treatment in all givernment affilieated hospitals."
          backdropImg={"https://api.lorem.space/image/shoes?w=400&h=225"}
        />
        <Card
          mainHeading={"Aayushman Card"}
          subHeading="Aayushman card holders will get free treatment in all givernment affilieated hospitals."
          backdropImg={"https://api.lorem.space/image/shoes?w=400&h=225"}
        />
        <Card
          mainHeading={"Aayushman Card"}
          subHeading="Aayushman card holders will get free treatment in all givernment affilieated hospitals."
          backdropImg={"https://api.lorem.space/image/shoes?w=400&h=225"}
        />
      </div>
    </div>
  );
};

export default Services;
