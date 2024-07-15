import React from "react";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Tooltip from "../Tooltip";
import "../../css/SocialIcons.css";

const SocialIcons: React.FC = () => {
  return (
    <div className="social-icons-container">
      <Tooltip content="Linkedin" bgColor="#0077B5">
        <a
          className="social-icon"
          href="http://linkedin.com/in/alehs01/"
          target="_blank"
        >
          <IconBrandLinkedin stroke={1.5} size="2rem" />
        </a>
      </Tooltip>
      <Tooltip content="Github" bgColor="rgb(0,3,51)">
        <a
          className="social-icon"
          href="https://github.com/AleHS01"
          target="_blank"
        >
          <IconBrandGithub stroke={1.5} size="2rem" />
        </a>
      </Tooltip>
      <Tooltip content="Youtube" bgColor="rgb(255,0,0)">
        <a className="social-icon" href="" target="_blank">
          <IconBrandYoutube stroke={1.5} size="1.9rem" />
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialIcons;
