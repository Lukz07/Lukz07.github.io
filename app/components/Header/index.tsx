import Image from "next/image";
import "./index.scss";

const Header = () => (
  <header className="header">
    <div className="header-logo">
      <a className="link-logo">
        <Image src="/logo.svg" alt="page logo" width={64} height={64} priority/>
      </a>
    </div>
    <div className="header-menu">
      <ul className="header-menu-list">
        <li className="header-menu-item is-active">
          <a href="#about" className="desc uppercase">
            <span className="header-menu-item-inner">
              <span className="header-menu-item-link header-menu-item-link-deep ">About</span>
              <span className="header-menu-item-link header-menu-item-link-active ">About</span>
            </span>
          </a>
        </li>

        <li className="header-menu-item">
          <a href="#work" className="desc uppercase">
            <span className="header-menu-item-inner">
              <span className="header-menu-item-link header-menu-item-link-deep ">Work</span>
              <span className="header-menu-item-link header-menu-item-link-active ">Work</span>
            </span>
          </a>
        </li>

        <li className="header-menu-item">
          <a href="#contact" className="desc uppercase">
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

export default Header;
