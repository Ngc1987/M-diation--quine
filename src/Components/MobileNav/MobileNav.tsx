import React from 'react';
import { Link } from 'react-router-dom';
import "./MobileNav.scss";
import { slide as Menu } from 'react-burger-menu';
import HamburgerButton from "Components/HamburgerButton/HamburgerButton";

export interface Props  {
	isOpen: () => void;
	setOpen: () => void;
	onToggle: () => void;
	handleOnClose: () => void;
}

const MobileNav = ({isOpen, setOpen, onToggle, handleOnClose}) => {

	return (
		<>
			<div className="mobileNav__button">
					<HamburgerButton toggled={isOpen} toggle={setOpen} onToggle={onToggle}/>
			</div>
			<Menu right 
				className="mobileNav__menu" 
				pageWrapId={ "page-wrap" }
				width={ '250px' }
				isOpen={isOpen}
				overlayClassName={"mobileNav__menu-overlay"}
				onClose={ handleOnClose }
				>

				<h2>Naviguer vers</h2>

				<Link className="mobileNav__menu-link" 
					to="description" 
					onClick={setOpen}>
					Description
				</Link>
				<Link className="mobileNav__menu-link" 
					to="pourqui" 
					onClick={setOpen}>
					Pour qui ?
				</Link>
				<Link className="mobileNav__menu-link" 
					to="parcours" 
					onClick={setOpen}>
					Mon parcours
				</Link>
				<Link className="mobileNav__menu-link" 
					to="gallerie" 
					onClick={setOpen}>
					Galerie
				</Link>
				<Link className="mobileNav__menu-link" 
					to="contact" 
					onClick={setOpen}>
					Contact
				</Link>
			</Menu>
		</>
	)
}

export default MobileNav