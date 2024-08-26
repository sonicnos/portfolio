import React from "react";
import CV from "../../assets/cv.pdf";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("btnCv")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {t("contactBtn")}
      </a>
    </div>
  );
};

export default CTA;
