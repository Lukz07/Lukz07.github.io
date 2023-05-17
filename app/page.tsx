"use client";
import {useEffect} from "react";
import {ParallaxProvider} from "react-scroll-parallax";
import "./page.scss";
import Header from "@/app/components/Header";
import About from "@/app/components/Sections/About"
import Footer from "@/app/components/Footer";
import Cursor from "@/app/components/Cursor";

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
      <Footer/>
      <Cursor/>
    </ParallaxProvider>
  )
}
