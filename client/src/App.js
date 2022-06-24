import React from "react";
import LayoutWrapper from "./components/LayoutWrapper";
import SectionWrapper from "./components/Section.component";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      <LayoutWrapper>
        <Hero mainHeading={"Disha Helpline"} subHeading={"Mai Disha Huin"} />
        <Services />
      </LayoutWrapper>
    </>
  );
};

export default App;
