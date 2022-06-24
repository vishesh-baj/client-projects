import React from "react";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";
import AboutUs from "./sections/AboutUs";
import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      <LayoutWrapper>
        <Hero mainHeading={"Disha Helpline"} subHeading={"Mai Disha Huin"} />
        <Services />
        <AboutUs />
        <Contacts />
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default App;
