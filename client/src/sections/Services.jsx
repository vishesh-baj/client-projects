import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-screen h-auto py-10   bg-white flex flex-col items-center justify-start"
    >
      <h1 className="py-10 text-4xl md:text-[100px] text-black">Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
        <div className="card w-96 bg-error text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-rose-600 border-none">Know More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-info text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-rose-600 border-none">Know More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-warning text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-rose-600 border-none">Know More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-rose-600 border-none">Know More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-accent text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-rose-600 border-none">Know More</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-success text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-rose-600 border-none">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
