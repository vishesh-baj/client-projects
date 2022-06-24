import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div>
      <div className="hero min-h-screen bg-[url(https://api.lorem.space/image/fashion?w=1000&h=800)]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content  flex-col lg:flex-row">
          {/*  content */}
          {children}
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper;
