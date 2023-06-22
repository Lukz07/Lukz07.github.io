import "./index.scss";
import {useEffect} from "react";
import {gsap} from "gsap";

const Cursor = () => {
  useEffect(() => {
    const hoverItems = document.querySelectorAll(".cursor-hover-item");
    const hero = document.querySelector(".layer-orange");

    const tl = gsap.timeline({ delay: 1});

    const handleFooterPointerEnter = function (e: Event) {
      const img = this.firstElementChild;
      const { offsetX: x, offsetY: y } = e as MouseEvent;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;

      let xMove = x / width * (move * 2) - move;
      let yMove = y / height * (move * 2) - move;
      img.style.transform = `translate(${xMove}px, ${yMove}px)`;

      gsap.to(hero, {
        "--maskSize1": "5%",
        duration: 0.5,
        ease: "back.out(2)"
      })
      gsap.to(hero, {
        "--maskSize2": "7%",
        duration: 0.5,
        delay: 0.5,
        ease: "back.out(2)"
      });

      if(e.type === 'mouseleave') {
        img.style.transform = '';
        gsap.to(hero, {
          "--maskSize1": "2%",
          duration: 0.5,
          ease: "back.out(2)"
        });
        gsap.to(hero, {
          "--maskSize2": "4%",
          duration: 0.5,
          delay: 0.5,
          ease: "back.out(2)"
        });
      }
    };

    hoverItems.forEach((item) => {
      item.addEventListener("mousemove",  handleFooterPointerEnter);
      item.addEventListener("mouseleave", handleFooterPointerEnter);
    });

    tl.to(hero, {
      "--maskSize1": "2%",
      duration: 0.5,
      ease: "back.out(2)"
    }).to(hero, {
      "--maskSize2": "4%",
      duration: 0.5,
      delay: 0.5,
      ease: "back.out(2)"
    });

    let clientScrollY = 0;
    let totalClientScrollY = 0;
    let positionX = 0;
    let windowInnerHeight = 0;

    const updatePosition = () => {
      const x = Math.round((positionX / window.innerWidth) * 100);
      const y = totalClientScrollY;

      gsap.to(hero, {
        "--x": `${x}%`,
        "--y": `${y}px`,
        duration: 0.3,
        ease: "sine.out",
      });
    }

    const updateOnScrollY = () => {
      totalClientScrollY = window.scrollY + clientScrollY;
      windowInnerHeight = window.innerHeight;
      updatePosition();
    }

    document.addEventListener('scroll', (e) => {
      updateOnScrollY();
    });

    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      clientScrollY = clientY;
      positionX = clientX;
      updateOnScrollY();
    });
  },[])

  return(
    <div className="cursor">
      <div className="cursor--small"></div>
    </div>
  )
}

export default Cursor;
