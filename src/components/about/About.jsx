import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { data } from "../portfolio/Portfolio";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <h5>{t("titleAbout")}</h5>
      <h2>{t("subtitleAbout")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>{t("experience")}</h5>
              <small>
                {new Date().getFullYear() - 2022} {t("years")}
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>{t("projects")}</h5>
              <small>
                +{data.length} {t("completed")}
              </small>
            </article>
          </div>
          <p>{t("description")}</p>
          <a href="#contact" className="btn btn-primary">
            {t("contactBtn")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
