"use client"
import "./index.scss";
import Hero from "@/app/components/Sections/Hero";
import AboutMe from "@/app/components/Sections/AboutMe";

interface AboutProps {
  colorMode?: string
};

const About = ({colorMode}: AboutProps) => {

  return (
    <div id="about">
      <Hero colorMode={colorMode ? `${colorMode}` : ``}/>
      <AboutMe colorMode={colorMode ? `${colorMode}` : ``}/>
    </div>
  )
};

export default About;
