import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-links">
        <Link to="/">Home</Link>
        <Link to="/count">Count</Link>
      </nav>
    </header>
  );
};

export default Header;
