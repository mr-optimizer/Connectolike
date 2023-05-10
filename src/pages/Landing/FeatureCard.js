import React from "react";
import "./FeatureCard.css";

const FeatureCard = (props) => {
  return (
    <div className={props.isRotated ? "card__container flex-rotate" : "card__container"}>
      <div className="card__container__left ">
        <h5 className="card__heading">{props.title}</h5>
        <ul className="card__list">
            {props.description.map((point, index) => (
                <li key={index} className="card__list__item">{point}</li>
            ))}
        </ul>
      </div>
      <div className="card__container__right">
        <img className="card_image" src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default FeatureCard;
