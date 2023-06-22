"use client";
import React, {useEffect} from "react";
import {ParallaxProvider} from "react-scroll-parallax";
import "./page.scss";
import Header from "@/app/components/Header";
import About from "@/app/components/Sections/About"
import Footer from "@/app/components/Footer";
import Cursor from "@/app/components/Cursor";
import {isTouch, setDarkLayerHeight, setVh} from "@/app/utils";
import {useApplicationContext} from "@/app/ApplicationContext";
import TouchButton from "@/app/components/TouchButton";

export default function App() {
  const {touchEnabled, setTouchEnabled} = useApplicationContext();
  useEffect(() => {
    setTouchEnabled(isTouch());
    setDarkLayerHeight();
    setVh();

    window.addEventListener('resize', () => {
      setTouchEnabled(isTouch());
      setDarkLayerHeight();
      setVh()
    });
  }, []);
  return (
    <div className="main-layer">
      <ParallaxProvider>
        <Header/>
        <main className="items-center justify-between">
          <div className="layer layer-dark">
            <div className="layer-container">
              <About/>
            </div>
            <div className={`frame-mobile`}></div>
            <button id="btnClipPath" className={`btn-clipPath`}>
              {touchEnabled && <TouchButton/>}
            </button>
          </div>
          <div className="layer layer-orange">
            <div className="layer-container">
              <About colorMode="orange"/>
            </div>
          </div>
        </main>
        <Footer/>
      </ParallaxProvider>
      <Cursor />
    </div>
  )
}
