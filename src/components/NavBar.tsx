import { FC } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

type NavBarProps = {
  theme?: string;
};

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className="">
      <div className="">
        <div className="">
          <Link to="/" className="">
            ALEHS
          </Link>
        </div>
        <div className="">
          <ul className="">
            <li>
              <Link className="" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="">Resume</button>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
