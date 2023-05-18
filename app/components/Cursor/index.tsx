import "./index.scss";
import {ReactNode, useEffect} from "react";
import {gsap} from "gsap";

interface IPointerEvent extends Event{
  offsetX: number,
  offsetY: number,
  offsetWidth: number,
  offsetHeight: number
}

const Cursor = () => {

  useEffect(() => {
    const cursorInner: HTMLElement | null = document.querySelector(".cursor--small");
    const hoverItems = document.querySelectorAll(".cursor-hover-item");

    const handlePointerEnter = function (e: Event) {
      const img = this.firstElementChild;
      const { offsetX: x, offsetY: y } = e as MouseEvent;
      const { offsetWidth: width, offsetHeight: height } = this;
      const move = 25;

      let xMove = x / width * (move * 2) - move;
      let yMove = y / height * (move * 2) - move;
      img.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if(e.type === 'mouseleave') img.style.transform = '';
    }

    const editCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if(!cursorInner) return;
      cursorInner.style.left = x + 'px';
      cursorInner.style.top = y + 'px';
    };

    console.log(hoverItems)
    hoverItems.forEach((item) => {
      item.addEventListener("mousemove",  handlePointerEnter);
      item.addEventListener("mouseleave", handlePointerEnter);
    });

    document.body.addEventListener("mousemove", editCursor);
  },[])

  return(
    <div className="cursor">
      <div className="cursor--small"></div>
    </div>
  )
}

export default Cursor;
