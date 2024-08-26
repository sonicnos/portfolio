import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const data = [
    ["#", t("footerHome")],
    ["#about", t("footerAbout")],
    ["#experience", t("footerExperience")],
    ["#contact", t("footerContact")],
  ];
  return (
    <footer>
      <a href="#" className="footer__logo">
        Loukas Bassoukos
      </a>

      <ul className="permalinks">
        {data.map((data, index) => {
          return (
            <li key={index}>
              <a href={data[0]}>{data[1]}</a>
            </li>
          );
        })}
      </ul>
      <div className="footer__socials">
        <a
          href="https://linkedin.com/in/loukas-bassoukos-257318133/"
          target="_blank "
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/sonicnos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__bottom"></div>
    </footer>
  );
};

export default Footer;
