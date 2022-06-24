import React from "react";
import LayoutWrapper from "./components/LayoutWrapper";
import SectionWrapper from "./components/Section.component";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <>
      <LayoutWrapper>
        <Hero mainHeading={"Disha Helpline"} subHeading={"Mai Disha Huin"} />
      </LayoutWrapper>
    </>
  );
};

export default App;
