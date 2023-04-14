import React from "react";
import "./DiscoverCard.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import dp1 from "../../images/pic1.png";
import Skills from "./Skills";

const DiscoverCard = (props) => {
  const privateMessageButtonHandler = () => {
    window.open(`https://api.whatsapp.com/send?phone=${props.whatsApp}`, "_blank");
  };
  return (
    <div className="discover__card">
      <div className="discover__card__image">
        <img src={dp1} alt="display_img" className="discover__card__img" />
      </div>

      <div className="discover__card__infos">
        <div>
          <p className="discover__card__infos__name">{props.name}</p>
        </div>
        <div className="discover__card__infos--branch__sem">
          <p className="discover__card__infos--branch">{props.branch}</p>
          <p className="discover__card__infos--sem">
            {props.sem}
            <span>th Sem</span>
          </p>
        </div>
      </div>

      <div className="discover__card__skills">
        {props.webDev && <Skills skill={"Web Dev"} />}
        {props.uiux && <Skills skill={"UI/UX"} />}
        {props.androidDev && <Skills skill={"Android Dev"} />}
        {props.blockchain && <Skills skill={"Blockchain"} />}
        {props.ethicalHacking && <Skills skill={"Ethical Hacking"} />}
        {props.softwareTesting && <Skills skill={"Software Testing"} />}
      </div>

      <div className="discover__card__social">
        <div className="discover__card__social__public">
          {props.facebook && (
            <a href={props.facebook} target="_blank">
              {" "}
              <FacebookIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </a>
          )}
          {props.linkedIn && (
            <a href={props.linkedIn } target="_blank">
              {" "}
              <LinkedInIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </a>
          )}
          {props.portfolio && (
            <a href={props.portfolio }  target="_blank">
              <LanguageIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </a>
          )}
          {props.github && (
            <a href={props.github} target="_blank">
              {" "}
              <GitHubIcon
                className="discover__card__social__public--icons"
                style={{ fontSize: "3rem" }}
              />
            </a>
          )}
        </div>
        {props.whatsApp && (
          <div className="discover__card__social__private">
            <button
              className="discover__card__social__private--message"
              onClick={privateMessageButtonHandler}
            >
              <WhatsAppIcon className="discover__card__social__private--icon" />{" "}
              Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscoverCard;
