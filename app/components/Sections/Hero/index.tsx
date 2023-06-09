"use client"
import "./index.scss";
import {ParallaxBanner} from "react-scroll-parallax";
import { gsap } from "gsap";
import Image from "next/image";
import {useEffect} from "react";
import {getOrangeLayerContainer} from "@/app/utils";

interface HeroProps {
  colorMode?: string
};

const Hero = ({colorMode}: HeroProps) => {
  useEffect(() => {
    const observer = new MutationObserver((mutations, obs) => {
      const parallaxContainer = document.querySelector('.layer-dark .hero-content .hero-content-inner');
      if (parallaxContainer) {
        parallaxContainer.addEventListener('mouseenter', handleTextPointerEnter);
        parallaxContainer.addEventListener('mouseleave', handleTextPointerEnter);
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true
    });

    const handleTextPointerEnter = function (e: Event) {
      gsap.to(getOrangeLayerContainer(), {
        "--maskSize1": "20%",
        duration: 0.5,
        ease: "back.out(2)"
      })
      gsap.to(getOrangeLayerContainer(), {
        "--maskSize2": "28%",
        duration: 0.5,
        delay: 0.5,
        ease: "back.out(2)"
      });

      if(e.type === 'mouseleave') {
        gsap.to(getOrangeLayerContainer(), {
          "--maskSize1": "0.5%",
          duration: 0.5,
          ease: "back.out(2)"
        });
        gsap.to(getOrangeLayerContainer(), {
          "--maskSize2": "1%",
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(2)"
        });
      }
    };

  })
  return (
    <ParallaxBanner
      id="parallaxBanner"
      layers={[
        {
          speed: 20,
          scale: [1, 1, 'easeOutCubic'],
          translateY: [0,70],
          children: (
            <div className="hero-bg full aspect-auto">
              <div className="banner-container">
                {/*<Image*/}
                {/*  id="hero-banner"*/}
                {/*  src="/profile-pic-azul.png"*/}
                {/*  alt="banner"*/}
                {/*  fill={true}*/}
                {/*  className="banner"*/}
                {/*  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"*/}
                {/*/>*/}
              </div>
            </div>
          )
        },
        {
          speed: -15,
          children: (
            <div className="hero-content">
              <div className="flex flex-row justify-center">
                <div className="flex flex-col flex-wrap lg:flex-col-4 md:flex-col-8 flex-row-12 hero-content-inner js-cursor-extend">
                  <h6 className="text-center hero-content-inner-subtitle">
                    <span className="block uppercase">Lucas Gutierrez</span>
                  </h6>
                  <h1 className="text-center anim-chars-3d">
                    <div className="line">
                      <div className="char">{!colorMode ? "m" : "h"}</div>
                      <div className="char">{!colorMode ? "a" : "i"}</div>
                      <div className="char">{!colorMode ? "k" : "d"}</div>
                      <div className="char">{!colorMode ? "i" : "i"}</div>
                      <div className="char">{!colorMode ? "n" : "n"}</div>
                      <div className="char">{!colorMode ? "g" : "g"}</div>
                    </div>
                    <div className="line">
                      <strong>
                        {
                          !colorMode ? (
                              <>
                                <div title="g" className="char with-glitch">g</div>
                                <div title="o" className="char with-glitch">o</div>
                                <div title="o" className="char with-glitch">o</div>
                                <div title="d" className="char with-glitch">d</div>
                              </>
                            ) :
                            (
                              <>
                                <div title="b" className="char with-glitch">b</div>
                                <div title="a" className="char with-glitch">a</div>
                                <div title="d" className="char with-glitch">d</div>
                              </>
                            )
                        }
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
  )
};

export default Hero;
