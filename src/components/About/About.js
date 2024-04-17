import React from "react";
import "./About.css";
import { Info } from "./Info";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            Hey there, I'm Deepak, a simple guy from Kerala! 🌴 who loves to
            develop cool website and call himself a front end developer 🤓💻 .
            I'm that guy who drinks tea( chai ) like it's a renewable resource
            and adore using codes to turn ideas into reality.{" "}
            <br>
              When I'm not making websites look cooler than a polar bear in
              sunglasses, you'll find me binge-watching movies, screaming at
              football matches( forever a Madridista ), and chatting about all
              kinds of random stuff with my favorite peeps!🚀
            </br>{" "}
            Let's sprinkle some frontend fairy dust together and create web
            wonders that'll make users go, "Whoa, that's slick!" 😄✨
          </p>

          <Info />

          <a download="" href="" className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
