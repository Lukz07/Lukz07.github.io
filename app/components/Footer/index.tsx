import Image from "next/image";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-socials">
        <li className="social">
          <a href="https://github.com/Lukz07/Lukz07.github.io"
             target="_blank"
             className="social-link social-link-linkedin cursor-hover-item"
             data-cursor-text="Follow Me!"
             data-cursor-text-repeat="4"
          >
            <Image src="/github.svg" alt="github log" width={24} height={24} />
          </a>
        </li>
        <li className="social">
          <a href="https://www.linkedin.com/in/gutierrezlucas/"
             target="_blank"
             className="social-link social-link-linkedin cursor-hover-item"
             data-cursor-text="Follow Me!"
             data-cursor-text-repeat="4"
          >
            <Image src="/linkedin.svg" alt="linkedin log" width={24} height={24} />
          </a>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;
