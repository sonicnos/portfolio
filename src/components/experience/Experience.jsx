import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  const frontLangs = [
    ["HTML", t("experienced")],
    ["CSS", t("Experienced")],
    ["Tailwind", t("Intermediate")],
    ["JavaScript", t("Intermediate")],
    ["TypeScript", t("Novice")],
    ["React", t("Intermediate")],
  ];

  const backLangs = [
    ["NodeJs", t("experienced")],
    ["MySQL", t("Experienced")],
    ["Express js", t("Intermediate")],
    ["Python", t("Intermediate")],
    ["MongoDB", t("Novice")],
    ["NodeJs", t("experienced")],
  ];

  return (
    <section id="experience">
      <h5>{t("titleExperience")}</h5>
      <h2>{t("subtitleExperience")}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frontendDevelopment")}</h3>
          <div className="experience__content">
            {frontLangs.map((frontLang, index) => {
              return (
                <article key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{frontLang[0]}</h4>
                    <small className="text-light">{frontLang[1]}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>{t("backendDevelopment")}</h3>
          <div className="experience__content">
            {backLangs.map((frontLang, index) => {
              return (
                <article key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{frontLang[0]}</h4>
                    <small className="text-light">{frontLang[1]}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
