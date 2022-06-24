import React from "react";

const Card = ({ mainHeading, subHeading, backdropImg }) => {
  return (
    <div className="card w-full md:[40vw] bg-base-100 shadow-xl image-full">
      <figure>
        <img className="w-full" src={backdropImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{mainHeading}</h2>
        <p className="text-white">{subHeading}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-info">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
