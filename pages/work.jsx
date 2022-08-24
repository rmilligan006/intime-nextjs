import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const Work = () => {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work around Canada"
      />
      <Portfolio />
    </div>
  );
};

export default Work;
