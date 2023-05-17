"use client"
import "./index.scss";
import {ParallaxBanner} from "react-scroll-parallax";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="about">
      <ParallaxBanner
        layers={[
          {
            speed: -15,
            scale: [1, 1, 'easeOutCubic'],
            translateY: [0,50],
            children: (
              <div className="hero-bg full aspect-auto">
                <div className="banner-container">
                  <Image
                    src="/profile-pic-azul.png"
                    alt="banner"
                    fill={true}
                    className="banner"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33v"
                  />
                </div>
                <div className="top-gradient"></div>
                <div className="bottom-gradient"></div>
              </div>
            )
          },
          {
            speed: -200,
            children: (
              <div className="hero-content">
                <div className="flex flex-row justify-center">
                  <div className="flex flex-col flex-wrap lg:flex-col-4 md:flex-col-8 flex-row-12 hero-content-inner js-cursor-extend">
                    <h6 className="text-center hero-content-inner-subtitle">
                      <span className="block uppercase">Lucas Gutierrez</span>
                    </h6>
                    <h1 className="text-center anim-chars-3d">
                      <div className="line">
                        <div className="char">m</div>
                        <div className="char">a</div>
                        <div className="char">k</div>
                        <div className="char">i</div>
                        <div className="char">n</div>
                        <div className="char">g</div>
                      </div>
                      <div className="line">
                        <strong>
                          <div title="g" className="char with-glitch">g</div>
                          <div title="o" className="char with-glitch">o</div>
                          <div title="o" className="char with-glitch">o</div>
                          <div title="d" className="char with-glitch">d</div>
                        </strong>
                      </div>
                      <div className="line">
                        <strong>
                          <div title="s" className="char with-glitch">s</div>
                          <div title="h" className="char with-glitch">h</div>
                          <div title="i" className="char with-glitch">i</div>
                          <div title="t" className="char with-glitch">t</div>
                        </strong>
                      </div>
                      <div className="line">
                        <div className="char">s</div>
                        <div className="char">i</div>
                        <div className="char">n</div>
                        <div className="char">c</div>
                        <div className="char">e</div>
                      </div>
                      <div className="line">
                        <div className="char">2</div>
                        <div className="char">0</div>
                        <div className="char">1</div>
                        <div className="char">2</div>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
            ),
            expanded: false,
            shouldAlwaysCompleteAnimation: true,
            translateY: [0,30]
          }
        ]} className="hero">
      </ParallaxBanner>
      <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div>
    </div>
  )
};

export default About;
