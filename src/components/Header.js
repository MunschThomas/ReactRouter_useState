import { Link } from "react-router-dom"

import "./Header.css"

const Header = () => {
	return (
		<header className="header">
			<nav className="header-links">
				<Link to="/">Home</Link>
				<Link to="/count">Count</Link>
				<Link to="/contact">Contact us</Link>
				<Link to="/characters">Characters</Link>
			</nav>
		</header>
	)
}

export default Header
