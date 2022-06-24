import React from "react";
import LayoutWrapper from "./components/LayoutWrapper";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <LayoutWrapper>
        <Hero />
        <AboutUs />
      </LayoutWrapper>
    </>
  );
};

export default App;
