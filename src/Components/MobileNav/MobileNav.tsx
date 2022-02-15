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
	handleSectionToDisplay: (e: any) => void;
}

const MobileNav = ({isOpen, setOpen, onToggle, handleOnClose, handleSectionToDisplay}) => {

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

				<div className="mobileNav__menu-link" 
					// to="description" 
					data-section="description" 
					onClick={(e) => {
						setOpen();
						 handleSectionToDisplay(e) 
					}}>
					Description
				</div>
				<div className="mobileNav__menu-link" 
					// to="pourqui" 
					data-section="pourqui" 
					onClick={(e) => {
						setOpen();
						 handleSectionToDisplay(e) 
					}}>
					Pour qui ?
				</div>
				<div className="mobileNav__menu-link" 
					// to="parcours" 
					data-section="parcours" 
					onClick={(e) => {
						setOpen();
						 handleSectionToDisplay(e) 
					}}>
					Mon parcours
				</div>
				<div className="mobileNav__menu-link" 
					// to="gallerie" 
					data-section="galerie" 
					onClick={(e) => {
						setOpen();
						 handleSectionToDisplay(e) 
					}}>
					Galerie
				</div>
				<div className="mobileNav__menu-link" 
					// to="contact" 
					data-section="contact" 
					onClick={(e) => {
						setOpen();
						 handleSectionToDisplay(e) 
					}}>
					Contact
				</div>
			</Menu>
		</>
	)
}

export default MobileNav