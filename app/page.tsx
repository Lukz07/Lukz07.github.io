"use client";
import "./page.scss";
import Header from "@/app/components/Header";
import About from "@/app/components/Sections/About"
import {ParallaxProvider} from "react-scroll-parallax";
import {useEffect} from "react";

const setVh = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + `px`);
}

export default function Home() {
  useEffect(() => {
    setVh();
    window.addEventListener('resize', () => {
      setVh()
    })
  }, [])
  return (
    <ParallaxProvider>
      <Header/>
      <main className="items-center justify-between">
        <div className="layer layer-dark">
          <div className="layer-container">
            <About/>
          </div>
        </div>
      </main>
    </ParallaxProvider>
  )
}
