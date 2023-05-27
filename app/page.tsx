"use client";
import {useEffect} from "react";
import {ParallaxProvider} from "react-scroll-parallax";
import "./page.scss";
import Header from "@/app/components/Header";
import About from "@/app/components/Sections/About"
import Footer from "@/app/components/Footer";
import Cursor from "@/app/components/Cursor";
import {setDarkLayerHeight, setVh} from "@/app/utils";

export default function Home() {
  useEffect(() => {
    // let darkLayerHeight = document.querySelector('.layer-dark')!.clientHeight;
    // document.documentElement.style.setProperty('--dark-layer-height', darkLayerHeight + `px`);
    setDarkLayerHeight();
    setVh();
    window.addEventListener('resize', () => {
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
