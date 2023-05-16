"use client"
import Image from "next/image";
import "./index.scss";
import React from "react";

const Header = () => {
  const onClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const clickedLinkNode = target.parentNode?.parentNode?.parentNode as HTMLElement;
    if (!clickedLinkNode.className.includes('is-active')) {
      //sacar is-active del link que lo tiene
      const selectedMenuLink = document.querySelector('.header-menu-item.is-active');
      const linkClass = selectedMenuLink?.className.split(" ").filter(value => value !== 'is-active').join(" ");
      if (selectedMenuLink && linkClass) selectedMenuLink.className = linkClass;
      //poner is-active al nuevo link
      clickedLinkNode.className = clickedLinkNode.className + ' is-active';
    }
  }
  return (
    <header className="header">
      <div className="header-logo">
        <a className="link-logo">
          <Image src="/logo.svg" alt="page logo" width={64} height={64} priority/>
        </a>
      </div>
      <div className="header-menu">
        <ul className="header-menu-list">
          <li className="header-menu-item is-active">
            <a href="#about" className="desc uppercase" onClick={(e) => onClick(e)}>
            <span className="header-menu-item-inner">
              <span className="header-menu-item-link header-menu-item-link-deep ">About</span>
              <span className="header-menu-item-link header-menu-item-link-active ">About</span>
            </span>
            </a>
          </li>
          <li className="header-menu-item">
            <a href="#work" className="desc uppercase" onClick={(e) => onClick(e)}>
            <span className="header-menu-item-inner">
              <span className="header-menu-item-link header-menu-item-link-deep ">Work</span>
              <span className="header-menu-item-link header-menu-item-link-active ">Work</span>
            </span>
            </a>
          </li>
          <li className="header-menu-item">
            <a href="#contact" className="desc uppercase" onClick={(e) => onClick(e)}>
            <span className="header-menu-item-inner">
              <span className="header-menu-item-link header-menu-item-link-deep ">Contact</span>
              <span className="header-menu-item-link header-menu-item-link-active ">Contact</span>
            </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
