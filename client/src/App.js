import React from "react";
import LayoutWrapper from "./components/LayoutWrapper";
import SectionWrapper from "./components/Section.component";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      <LayoutWrapper>
        <Hero mainHeading={"Disha Helpline"} subHeading={"Mai Disha Huin"} />
        <Services />
        <AboutUs />
      </LayoutWrapper>
    </>
  );
};

export default App;
