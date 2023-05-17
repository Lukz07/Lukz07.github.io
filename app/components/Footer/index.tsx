import Image from "next/image";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-socials">
        <li className="social">
          <a href="https://github.com/Lukz07/Lukz07.github.io" className="social-link social-link-linkedin">
            <Image src="/github.svg" alt="github log" width={24} height={24} />
          </a>
        </li>
        <li className="social">
          <a href="https://www.linkedin.com/in/gutierrezlucas/" className="social-link social-link-linkedin">
            <Image src="/linkedin.svg" alt="linkedin log" width={24} height={24} />
          </a>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;
