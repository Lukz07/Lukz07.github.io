import "./index.scss";
import {useEffect} from "react";
import {gsap} from "gsap";

const Cursor = () => {

  useEffect(() => {
    const cursorOuter = document.querySelector(".cursor--large");
    const cursorInner = document.querySelector(".cursor--small");
    const cursorTextContainerEl = document.querySelector(".cursor--text");
    const cursorTextEl = cursorTextContainerEl?.querySelector(".text");

    const hoverItems = document.querySelectorAll(".cursor-hover-item");
    const hoverEffectDuration = 0.3;
    let isHovered = false;
    let initialCursorHeight: number;

    const cursorRotationDuration = 8;

    const handlePointerEnter = function (e: Event) {
      isHovered = true;
      // const imagen = this.querySelector("img");
      const img = this.firstElementChild;
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;

      let xMove = x / width * (move * 2) - move;
      let yMove = y / height * (move * 2) - move;
      img.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if(e.type === 'mouseleave') img.style.transform = '';

      // const target = e.currentTarget;
      // updateCursorText(target);

      // gsap.set([cursorTextContainerEl, cursorTextEl], {
      //   height: initialCursorHeight,
      //   width: initialCursorHeight
      // });
      //
      // gsap.fromTo(
      //   cursorTextContainerEl,
      //   {
      //     rotate: 0
      //   },
      //   {
      //     duration: cursorRotationDuration,
      //     rotate: 360,
      //     ease: "none",
      //     repeat: -1
      //   }
      // );
      //
      // gsap.to(cursorInner, hoverEffectDuration, {
      //   scale: 2
      // });
      //
      // gsap.fromTo(
      //   cursorTextContainerEl,
      //   hoverEffectDuration,
      //   {
      //     scale: 1.2,
      //     opacity: 0,
      //   },
      //   {
      //     delay: hoverEffectDuration * 0.75,
      //     scale: 1,
      //     opacity: 1,
      //   }
      // );
      // gsap.to(cursorOuter, hoverEffectDuration, {
      //   scale: 1.2,
      //   opacity: 0,
      // });
    }

    // const handlePointerLeave = () => {
    //   isHovered = false;
    //   gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
    //     scale: 1,
    //     opacity: 1
    //   });
    // }

    hoverItems.forEach((item) => {
      item.addEventListener("mousemove", handlePointerEnter);
      item.addEventListener("mouseleave", handlePointerEnter);
    });

    let mouse = {
      x: -100,
      y: -100
    };

    const updateCursorPosition = (e: PointerEvent) => {
      mouse.x = e.pageX;
      mouse.y = e.pageY;
    }

    const editCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      cursorInner.style.left = x + 'px';
      cursorInner.style.top = y + 'px';
    }

    document.body.addEventListener("mousemove", editCursor);

    const updateCursor = () => {
      gsap.set([cursorInner, cursorTextContainerEl], {
        x: mouse.x,
        y: mouse.y
      });

      gsap.to(cursorOuter, {
        duration: 0.15,
        x: mouse.x,
        y: mouse.y
      });

      if (!isHovered) {
        gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
          opacity: 0
        });
        gsap.set(cursorTextContainerEl, {
          rotate: 0
        });
      }

      requestAnimationFrame(updateCursor);
    }

    // updateCursor();
  },[])

  return(
    <div className="cursor">
      <div className="cursor--small"></div>
      <div className="cursor--large"></div>
      <div className="cursor--text">
        <div className="text"></div>
      </div>
    </div>
  )
}

export default Cursor;
