import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import "../css/NavBar.css";
import { IconDownload } from "@tabler/icons-react";

type NavBarProps = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

const NavBar: FC<NavBarProps> = ({ theme, setTheme }) => {
  return (
    <nav className="nav center">
      <div className="logo">
        <Link to="/" className="">
          ALEHS<b>.</b>
        </Link>
      </div>
      <ul className="nav-links">
        <li className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={`nav-link ${
            location.pathname === "/projects" ? "active" : ""
          }`}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className={`nav-link ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-btns">
        <a
          className="download center border"
          href="./src/assets/resume.pdf"
          download={"Resume - Alejandro Hernandez"}
        >
          <IconDownload stroke={2} size={"1.2rem"} />
          Resume
        </a>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default NavBar;
