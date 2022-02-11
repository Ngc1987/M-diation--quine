import React, { useEffect, useState } from "react";
import DesktopNav from "Components/DesktopNav/DesktopNav";
import MobileNav from "Components/MobileNav/MobileNav";
import "./Header.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import HamburgerButton from "Components/HamburgerButton/HamburgerButton";
import Hamburger from "hamburger-react";


const Header:React.FC = () => {

	

	// state for the window size, differents animations displayed for desktop or mobile device
	const [dimensions, setDimensions] = useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	})



	// Listen resize event, and set the state with the actual values
	useEffect(() => {
		function handleResize() {
			setDimensions({height: window.innerHeight, width: window.innerWidth})
		}
		window.addEventListener('resize', handleResize)
	
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	})

	return (
		<header className="head" >


			<div className="head__layout"></div>

			<div className="head__brand" >

				{dimensions.width < 768 ? 
				<>
					<div className="head__brand-logoDiv">
						<img src={"/assets/headLogowebp.webp"} className="head__brand-logoDiv-logo" alt="logo de l'entreprise"></img>
					</div>
					<div className="head__brand__name">
						<h1 className="head__brand__name-title">Dom Equi Médiation</h1>
						<h2 className="head__brand__name-subtitle">Séances de médiation équine en Vendée</h2>
					</div>
				</>

				:
				<>
					<h1 className="head__brand__name-title">Dom Equi Médiation</h1>
					<div className="head__brand-logoDiv">
						<img src={"/assets/headLogowebp.webp"} className="head__brand-logoDiv-logo" alt="logo de l'entreprise"></img>
					</div>
					{/* <div className="head__brand__name"> */}
						<h2 className="head__brand__name-subtitle">Séances de médiation équine en Vendée</h2>
					{/* </div> */}
				</>
			}

				
				{/* <img src={"/assets/headLogowebp.webp"} className="head__brand-logo" alt="logo de l'entreprise"></img> */}
			</div>

			

		</header>
	)
}

export default Header
