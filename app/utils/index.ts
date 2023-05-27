export const getVh = () => {
  return window.innerHeight * 0.01;
}

export const getVw = () => {
  if (typeof window === 'undefined') return 0;
  else return window.innerWidth * 0.01;
}

export const setVh = () => {
  document.documentElement.style.setProperty('--vh', getVh() + `px`);
}

export const getDarkLayerHeight = () => {
  return document.querySelector('.layer-dark')!.clientHeight;
}

export const setDarkLayerHeight = () => {
  return document.documentElement.style.setProperty('--dark-layer-height', getDarkLayerHeight() + `px`);
}

// Change this when SplitText plugin from Gsap is free
export class SplitText {
  lines: NodeListOf<Element>;

  constructor(container: string) {
    const elements = document.querySelectorAll(`${container}`);
    this.lines = elements
  }
}


