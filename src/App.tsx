import './App.scss';
// import Home from './Pages/Home/Home';
import Description from './Pages/Description/Description';
import Parcours from './Pages/Parcours/Parcours';
import ForWho from './Pages/ForWho/ForWho';
// import Shortcuts from './Components/Shortcuts/Shortcuts';
import Contact from './Pages/Contact/Contact';
import MobileNav from '../src/Components/MobileNav/MobileNav';
import DesktopNav from '../src/Components/DesktopNav/DesktopNav';
import Header from './Components/Header/Header';
import Footer from 'Components/Footer/Footer';
// import Map from 'Components/Map/Map';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { makeAppear } from './Greensock/utils';
import Slider from './Components/Slider/Slider';
import { Route, Routes } from 'react-router-dom';
import Loader from '../src/Components/Loader/Loader';
// import { SmoothProvider } from 'react-smooth-scrolling'

// const Description = React.lazy(() => import("./Pages/Description/Description"));
// const Parcours = React.lazy(() => import("./Pages/Parcours/Parcours"));
// const ForWho = React.lazy(() => import("./Pages/ForWho/ForWho"));
// const Contact = React.lazy(() => import("./Pages/Contact/Contact"));
// const MobileNav = React.lazy(() => import("../src/Components/MobileNav/MobileNav"));
// const DesktopNav = React.lazy(() => import("../src/Components/DesktopNav/DesktopNav"));
// const Header = React.lazy(() => import("./Components/Header/Header"));

const App:React.FC = () => {

	// state for the window size, differents animations displayed for desktop or mobile device
	const [dimensions, setDimensions] = useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	})
	
	// State for the mobile device menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	
	const setOpen = () => {
		setIsOpen(!isOpen)
	}

	const handleOnClose = () => {
		setIsOpen(false)
	}
	const onToggle = (toggled:boolean) => {
		toggled ? setIsOpen(true) : setIsOpen(false)
	}
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


	// State for the displayed section on the page
	const [sectionToDisplay, setSectionToDisplay] = useState<string>("description");
	console.log(sectionToDisplay)
	const handleSectionToDisplay = (e) => {
		setSectionToDisplay(e.target.dataset.section);
		console.log(e.target.dataset.section)
	}
	


	return (
		<div className="App" id="App">

			<img src={process.env.PUBLIC_URL + "./assets/bckg.webp"} alt="Fond d'écran" className="background" />
			

			
			{/* <Loader/> */}
			<Header/>

			{dimensions.width > 767 ?
				<DesktopNav handleSectionToDisplay={handleSectionToDisplay} />
				:
				<MobileNav 
				isOpen={isOpen}
				setOpen={setOpen}
					onToggle={onToggle}
					handleOnClose={handleOnClose}
					handleSectionToDisplay={handleSectionToDisplay} />
			}
			<section className="main">
				<Description className={`main__content ${sectionToDisplay === "description" ? "visible" : "hidden"}`} aria-hidden={sectionToDisplay === "description" ? false : true} />
				<ForWho className={`main__content ${sectionToDisplay === "pourqui" ? "visible" : "hidden"}`} aria-hidden={sectionToDisplay === "pourqui" ? false : true} />
				<Parcours className={`main__content ${sectionToDisplay === "parcours" ? "visible" : "hidden"}`} aria-hidden={sectionToDisplay === "parcours" ? false : true} />
				<Slider className={`main__content ${sectionToDisplay === "galerie" ? "visible" : "hidden"}`} aria-hidden={sectionToDisplay === "galerie" ? false : true} />
				<Contact className={`main__content ${sectionToDisplay === "contact" ? "visible" : "hidden"}`} aria-hidden={sectionToDisplay === "contact" ? false : true} />
			</section>

			{/* <footer className="footer__div">

				<Footer/>
			</footer> */}

			{/* <Routes>
				<Route path="/description" element={<Description/>} />
				<Route path="/pourqui" element={<ForWho/>} />
				<Route path="/parcours" element={<Parcours/>} />
				<Route path="/gallerie" element={<Slider/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes> */}
			

			{/* <div ref={logoRef} className="App__imageDiv">
				<img src={"/assets/headLogowebp.webp"} className="App__logo" alt="logo de l'entreprise"></img>
			</div>y */}
		</div>
	);
}

export default App;