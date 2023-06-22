"use client"
import "./index.scss";
import React, {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "@/app/utils";

type TextProps = {
  title: string,
  subtitle: string
}

const AboutIDo = () => {
  const HOVER_CLASS = 'is-hover';
  const techStack = {
    "WEB": "i build and helped building web applications, static pages and ecommerce sites",
    "HTML5": "Just normal use of HTML5 tags, SEO, and accessibility",
    "MOBILE": "All pages are designed mobile first",
    "MOTION": "I like to play with animations using js and css :)",
    "BACKEND": "I'm just curious of what happens end to end in the application",
  };
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitText = new SplitText(".js-heading-masking-el-heading");
    splitText.lines.forEach((target) => {
      gsap.to(target, {
        "--size": 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "top center",
          end: "bottom center",
        }
      });
    });


  }, [hydrated]);

  const DeepElement = ({title, subtitle}: TextProps) => {
    return (
      <div className="heading-mask-el heading-mask-el-deep container-content">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="simple-masking">
              <div className="js-simple-masking-el simple-masking-el js-cursor-contract">
                <h2 className="h1 js-heading-masking-el-heading is-masking">{title}</h2>
                <h2 className="h1 js-heading-mask-heading is-deep">{title}</h2>
              </div>
            </div>
          </div>
          <div className="grid lg:inline-block desc-parent hidden">
            <p className="desc">{subtitle}</p>
          </div>
        </div>
      </div>
    )
  };

  const MaskElement = ({ title, subtitle }: TextProps) => {
    return (
      <div className="heading-mask-el heading-mask-el-masking container-content">
        <div className="grid grid-cols-1 items-center">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="simple-masking">
              <div className="simple-masking-el">
                <h2 className="h1 text-dark">{title}</h2>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1 text-dark sm:block desc-parent hidden">
            <p className="">{subtitle}</p>
          </div>
        </div>
      </div>
    )
  }

  const resetHoverClass = () => {
    document.querySelectorAll('.heading-mask')
      .forEach((item) => {
        item.classList.remove(HOVER_CLASS);
      });
  }

  const applyHoverClass = (containerRef: React.RefObject<HTMLDivElement>) => {
    resetHoverClass();
    const headingMaskContainer = containerRef.current;
    headingMaskContainer?.classList.add(HOVER_CLASS);

    setTimeout(() => resetHoverClass(), 5000);
  }

  const openMask = (containerRef: React.RefObject<HTMLDivElement>) => {
    const headingMaskContainer = containerRef.current;
    headingMaskContainer?.classList.add(HOVER_CLASS);
  }

  const closeMask = (containerRef: React.RefObject<HTMLDivElement>) => resetHoverClass();

  const HeadingMask = ({ title, subtitle }: TextProps) => {
    const containerRef = useRef(null);
    const handleClick = (e: React.MouseEvent<HTMLElement>) => applyHoverClass(containerRef);
    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => openMask(containerRef);
    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => closeMask(containerRef);

    return (
      <div className="heading-mask" ref={containerRef}
           onClick={(e) => handleClick(e)}
           onMouseEnter={(e) => handleMouseEnter(e)}
           onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <DeepElement title={title} subtitle={subtitle}/>
        <MaskElement title={title} subtitle={subtitle}/>
      </div>
    )
  }

  return (
    <div className="about-i-do">
      <div className="flex flex-col flex-wrap columns-12">
        <p className="about-content-label body-text uppercase">
          WHAT I DO
        </p>
      </div>
      {
        Object.entries(techStack).map(([key, val], i) => {
          return (
            <HeadingMask key={i} title={key} subtitle={val}/>
          )
        })
      }
    </div>
  )
}

export default AboutIDo;
