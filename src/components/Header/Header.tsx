import React from "react";
// import headLogo from  "/assets/headLogowebp.webp"
import "./Header.scss";

const Header:React.FC = () => {
	return (
		<header>

			<div className="brand" >
				<img src={"/assets/headLogowebp.webp"} className="brand__logo" alt="logo de l'entreprise"></img>
				<h1 className="brand__name">Médiation équine</h1>
			</div>

			<nav className="nav">
				<ul>
					<li>Section1</li>
					<li>Section2</li>
					<li>Section3</li>
					<li>Section4</li>
					<li>Section5</li>
					<li>Section6</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
