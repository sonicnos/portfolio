import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

export const data = [
  {
    id: 1,
    image: IMG1,
    title: "Client Portofolio",
    github: "",
    demo: "https://mdrakopoulou.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Next Auth",
    github: "https://github.com/sonicnos/next-auth-v5",
    demo: "https://next-auth-v5-mocha.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "BeMovies",
    github: "https://github.com/sonicnos/bemovies",
    demo: "https://sonicnos.github.io/bemovies/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Job Apply tracker",
    github: "https://github.com/sonicnos/jobApply-tracker",
    demo: "https://job-tracker-eight.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Interactive rating component main",
    github: "https://github.com/sonicnos/interactive-rating-component-main",
    demo: "https://sonicnos.github.io/interactive-rating-component-main/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Studio Design Landin Page",
    github: "https://github.com/sonicnos/Studio-Design-Landin-Page",
    demo: "https://sonicnos.github.io/Studio-Design-Landin-Page/",
  },
];

const Portofolio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__items">
              <div className="portofolio__items-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                {github && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portofolio;
