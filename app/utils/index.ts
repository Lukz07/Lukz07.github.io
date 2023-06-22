export const getVh = () => window.innerHeight * 0.01;

export const getVw = () => {
  if (typeof window === 'undefined') return 0;
  else return window.innerWidth * 0.01;
}

export const setVh = () => { document.documentElement.style.setProperty('--vh', getVh() + `px`); }

export const getDarkLayerHeight = () => document.querySelector('.layer-dark')!.clientHeight;

export const setDarkLayerHeight = () => {
  document.documentElement.style.setProperty('--dark-layer-height', getDarkLayerHeight() + `px`);
}

export const getOrangeLayerContainer = () => document.querySelector(".layer-orange");

export const isTouchEnabled = () => ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 );

export const enableTouch = () => { document.body.classList.add('is-touch'); }

export const disableTouch = () => { document.body.classList.remove('is-touch'); }

export const isTouch = () => {
  if (isTouchEnabled()){
    enableTouch();
    return true;
  } else {
    disableTouch();
    return false;
  }
}

// Change this when SplitText plugin from Gsap is free
export class SplitText {
  lines: NodeListOf<Element>;

  constructor(container: string) {
    const elements = document.querySelectorAll(`${container}`);
    this.lines = elements;
  }
}


