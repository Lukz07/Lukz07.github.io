"use client";
import "./index.scss";
import {gsap} from "gsap";
import {getOrangeLayerContainer} from "@/app/utils";
import React, {useEffect} from "react";

const TouchButton = () => {

  const handleClick = (e: React.TouchEvent<HTMLElement>) => {
    if (e.type === 'touchstart') {
      gsap.to(getOrangeLayerContainer(), {
        "--maskSize1": "100%",
        duration: 1.8,
        ease: "back.out(2)"
      })
      gsap.to(getOrangeLayerContainer(), {
        "--maskSize2": "100%",
        duration: 2,
        delay: 1,
        ease: "back.out(2)"
      });

      document.body.classList.add('is-orange');
    }

    if (e.type === 'touchend') {
      gsap.to(getOrangeLayerContainer(), {
        "--maskSize1": "0.5%",
        duration: 1.8,
        ease: "back.out(2)"
      })
      gsap.to(getOrangeLayerContainer(), {
        "--maskSize2": "1%",
        duration: 2,
        delay: 1,
        ease: "back.out(2)"
      });

      document.body.classList.remove('is-orange');
    }

  }

  return (
    <span className="btn-clipPath-inner"
          onTouchStart={(e: React.TouchEvent<HTMLSpanElement>) => handleClick(e)}
          onTouchEnd={(e: React.TouchEvent<HTMLSpanElement>) => handleClick(e)}
    >
      <span className="btn-clipPath-inner-image btn-clipPath-inner-image-ring">
        <img src="/press.svg" alt="press-button" width={78} height={78}/>
      </span>
      <span className="btn-clipPath-inner-image btn-clipPath-inner-image-touch">
        <img src="/touch.svg" alt="press-button" width={14} height={24}/>
      </span>
    </span>
  )
}

export default TouchButton;
