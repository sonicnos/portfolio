import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import { useTranslation } from "react-i18next";
import DropdownList from "./DropdownList";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="container header__container">
        <h5>{t("presetation")}</h5>
        <h1>Loukas Bassoukos</h1>

        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          {t("scroll")}
        </a>
        <DropdownList />
      </div>
    </header>
  );
};

export default Header;
