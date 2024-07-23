import React, { useEffect } from "react";
import { transitionLeftRight } from "../utils/transition";
import "../css/About.css";

const About: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normalizedPosition = e.pageX / (width / 2) - 1;
      const speedSlow = 100 * normalizedPosition;
      const speedFast = 200 * normalizedPosition;

      spansSlow.forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedSlow}px)`;
      });
      spansFast.forEach((span) => {
        (span as HTMLElement).style.transform = `translate(${speedFast}px)`;
      });
    };

    const handleWindowResize = () => {
      width = window.innerWidth;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleWindowResize);

    const spansSlow = document.querySelectorAll(".spanSlow");
    const spansFast = document.querySelectorAll(".spanFast");

    let width = window.innerWidth;

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="about-page">
      <p className="summary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
        hendrerit nunc quis viverra. Donec hendrerit metus non neque bibendum
        commodo. Fusce placerat in lectus eget mattis. Nam in faucibus odio. Sed
        at rhoncus purus. Sed interdum urna quis ante porta, a fermentum tortor
        laoreet. Aenean nisl elit, mattis vitae tortor sit amet, mollis aliquet
        nisi. Quisque blandit libero vel nisl placerat viverra.
      </p>
      <section className="experience-section">
        <div className="text-wrapper">
          <div className="left">
            <div className="content">
              <span className="spanSlow">Experience</span>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <span className="spanSlow">Experience</span>
            </div>
          </div>
        </div>
        <div className="timeline">
          <ul>
            <li>
              <h3 className="position">FrontEnd Developer</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem nisl, sagittis at nulla eu, rutrum tempus justo. Proin ac
                quam ante. Duis ullamcorper eget diam ut porta.{" "}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Read More
              </a>
              <span className="bubble"></span>
              <span className="date">January 20222</span>
            </li>
            <li>
              <h3 className="position">FrontEnd Developer</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem nisl, sagittis at nulla eu, rutrum tempus justo. Proin ac
                quam ante. Duis ullamcorper eget diam ut porta.{" "}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Read More
              </a>
              <span className="bubble"></span>
              <span className="date">January 20222</span>
            </li>
            <li>
              <h3 className="position">FrontEnd Developer</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem nisl, sagittis at nulla eu, rutrum tempus justo. Proin ac
                quam ante. Duis ullamcorper eget diam ut porta.{" "}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Read More
              </a>
              <span className="bubble"></span>
              <span className="date">January 20222</span>
            </li>
            <li>
              <h3 className="position">FrontEnd Developer</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem nisl, sagittis at nulla eu, rutrum tempus justo. Proin ac
                quam ante. Duis ullamcorper eget diam ut porta.{" "}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Read More
              </a>
              <span className="bubble"></span>
              <span className="date">January 20222</span>
            </li>
            <li>
              <h3 className="position">FrontEnd Developer</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lorem nisl, sagittis at nulla eu, rutrum tempus justo. Proin ac
                quam ante. Duis ullamcorper eget diam ut porta.{" "}
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="learn-more"
              >
                Read More
              </a>
              <span className="bubble"></span>
              <span className="date">January 20222</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default transitionLeftRight(About);
