import { FC } from "react";
import { Link } from "react-router-dom";
type NavBarProps = {
  theme?: string;
};

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="w-full bg-slate-300 p-2 pl-5">
      <div className="logo">ALEHS</div>
      <div className="nav-links">
        <div className="nav-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/about">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="nav-features"></div>
    </div>
  );
};

export default NavBar;
