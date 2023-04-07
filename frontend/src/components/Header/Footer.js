import { React } from "react";

import "./Footer.css";

import { Button } from "@mui/material";
// import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlaceIcon from "@mui/icons-material/Place";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__about">
          <h1>C-Kit</h1>
          <p className="footer__container__about--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            inventore dolore voluptatibus, rem voluptates ut eum quaerat quasi
            omnis quod molestias labore ipsum nostrum maiores repudiandae
            adipisci voluptate!
          </p>
          <div className="social__container">
            <Button
              variant="link"
              color="default"
              className="social_icon"
              startIcon={<FacebookIcon />}
              href="https://www.facebook.com/"
              target="_blank"
            />
            <Button
              variant="link"
              color="default"
              className="social_icon"
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/"
              target="_blank"
            />
            <Button
              variant="link"
              color="default"
              className="social_icon"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/"
              target="_blank"
            />
          </div>
        </div>

        <div className="footer__container__contacts">
          <h3>Contact Us</h3>
          <div className="contacts">
            <a className="link" href="tel:9798447977">
              <PlaceIcon />
              Chandigarh University NH-05, Mohali, Punjab (INDIA)
            </a>

            <a className="link" href="tel:9798447977">
              <SupportAgentIcon />
              Support :- 9798 447 977
            </a>

            <a className="link" href="mailto:willie.jennings@example.com">
              <MailOutlineOutlinedIcon />
              Email :- contactswask@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="hr__line"></div>
      <div className="copyright">
        <span className="u-red-text"> Code Companion</span>, &#169; 2023 All
        Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
