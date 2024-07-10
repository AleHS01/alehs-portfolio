import { FC } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import "../css/NavBar.css";
import { IconDownload } from "@tabler/icons-react";

type NavBarProps = {
  theme?: string;
};

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className="nav center">
      <div className="">
        <Link to="/" className="">
          ALEHS
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="nav-link">
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
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavBar;
