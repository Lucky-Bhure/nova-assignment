import React from "react";
import ResearchModel from "./ResearchModel/ResearchModel";
import NovaWork from "./NovaWork/NovaWork";
import UseCases from "./UseCases/UseCases";
import HeroSection from "./HeroSection/HeroSection";

const Home = () => {
  return <>
    <div className="w-full min-h-screen">
      <HeroSection />
    <NovaWork />
    <UseCases />
    <ResearchModel />
    </div>
  </>;
};

export default Home;
