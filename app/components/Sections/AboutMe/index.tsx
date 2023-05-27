import "./index.scss";
import {getVw, setDarkLayerHeight, SplitText} from "@/app/utils";
import {Fragment, useEffect, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

interface AboutMeProps {
  colorMode: string
}

const AboutMe = ({colorMode}: AboutMeProps) => {
  const [vw, setVw] = useState(getVw());
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setVw(getVw())
      setDarkLayerHeight();
    });

    //Pointer animation when hover over about text content
    const observer = new MutationObserver((mutations, obs) => {
      const parallaxContainer = document.querySelector('.layer-orange .about .about-content-desc');
      if (parallaxContainer) {
        parallaxContainer.addEventListener('mouseenter', handleTextPointerEnter);
        parallaxContainer.addEventListener('mouseleave', handleTextPointerEnter);
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true
    });

    const hero = document.querySelector(".layer-orange");

    const handleTextPointerEnter = function (e: Event) {
      gsap.to(hero, {
        "--maskSize1": "20%",
        duration: 0.5,
        ease: "back.out(2)"
      })
      gsap.to(hero, {
        "--maskSize2": "28%",
        duration: 0.5,
        delay: 0.5,
        ease: "back.out(2)"
      });

      if(e.type === 'mouseleave') {
        gsap.to(hero, {
          "--maskSize1": "3%",
          duration: 0.5,
          ease: "back.out(2)"
        });
        gsap.to(hero, {
          "--maskSize2": "5%",
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(2)"
        });
      }
    };

    //Scroll trigger text reveal
    const split = new SplitText('.layer-dark .about .about-me .about-me-container .about-content-desc .line');
    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: true,
          start: "top center",
          end: "bottom center",
        }
      });
    })

  },[])
  const RenderDesc  = () => {
    if (vw < 7.68){
      if (!colorMode){
        return (
            <Fragment>
              <div className="line">I&apos;m a</div>
              <div className="line"><strong>selectively</strong></div>
              <div className="line"><strong>skilled</strong> frontend</div>
              <div className="line">developer with</div>
              <div className="line">strong focus on</div>
              <div className="line">UI quality &</div>
              <div className="line">curious</div>
              <div className="line">fullstacker.</div>
            </Fragment>
        )
      } else {
        return (
          <Fragment>
            <div className="line">A UI developer - trying to be more useful than a A.I -
            with good eye for design that codes a lot for an equal paycheck.</div>
          </Fragment>
        )
      }
    }
    else {
      if (!colorMode) {
        return (
          <Fragment>
            <div className="line">I&apos;m a <strong>selectively skilled</strong></div>
            <div className="line">frontend developer</div>
            <div className="line">with strong focus on UI</div>
            <div className="line">quality & curious</div>
            <div className="line">fullstacker.</div>
          </Fragment>
        )
      } else {
        return (
          <Fragment>
            <div className="line">A UI developer - trying to be more useful than a A.I -
            with good eye for design that codes a lot for an equal paycheck.</div>
          </Fragment>
        )
      }
    }
  }
  return (
    <div className="about">
      <div className="flex row about-me">
        <div className="flex flex-col flex-wrap lg:columns-4xl sm:columns-2xl columns-12 about-me-container">
          <div className="about-content container-content">
            <p className="about-content-label body-text uppercase">
              About me
            </p>
            <div className="about-content-desc h2 scroll-paragraph-parent">
              <div className="scroll-paragraph-mask">
                <RenderDesc/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-ido"></div>
    </div>
  );
};

export default AboutMe;
