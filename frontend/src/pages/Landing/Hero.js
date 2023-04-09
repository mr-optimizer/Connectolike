import React from "react";
import "./Hero.css";
import { useTypewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import HeroImg from "../../images/Landing/hero.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/discover");
  };
  const [text] = useTypewriter({
    words: [
      "Who thinks like you!",
      "Who code like you!",
      "Who chill like you!",
    ],
    loop: 0,
  });

  return (
    <div className="hero">
      <div className="hero__texts">
        <div className="hero__texts__head">Find your own companion</div>
        <div className="hero__texts__head__subhead">{text}</div>
        <button
          className="u-margin-top-medium hero__texts__btn"
          onClick={clickHandler}
        >
          Get your companion
        </button>
      </div>
      <div className="hero__image__container">
        <img src={HeroImg} alt="Hero" className="hero_image" />
      </div>
    </div>
  );
};

export default Hero;
