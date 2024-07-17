import React, { useRef, useEffect } from "react";
import { transitionTopBottom } from "../utils/transition.js";
import Typed from "typed.js";
import "../css/Home.css";
import Object3D from "../components/Object3D.js";

type HomeProps = {
  theme: string;
};
const Home: React.FC<HomeProps> = ({ theme }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "developer",
        "designer",
        "team player",
        "learner",
        "collaborator",
        // "eco-conscious",
        // "calisthenicist",
        // "home cook",
      ],
      typeSpeed: 100,
      backDelay: 1500,
      backSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="home-section">
      <div className="text-container">
        <div className="cols cols0">
          <span className="topline">Hello</span>
          <h1>
            I'm a<br />
            <span className="multiText" ref={el}></span>
          </h1>
          <p>
            Welcome to my portfolio! I'm{" "}
            <span className="name">Alejandro Hernandez</span>, a full-stack web
            developer passionate about blending creativity with technical
            expertise to craft innovative solutions for the tech industry.
          </p>
        </div>
      </div>
      <div className="element-container">
        <Object3D theme={theme} />
      </div>
    </div>
  );
};

export default transitionTopBottom(Home);
