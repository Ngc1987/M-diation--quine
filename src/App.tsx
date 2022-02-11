import './App.scss';
import Home from './Pages/Home/Home';
import Description from './Pages/Description/Description';
import Parcours from './Pages/Parcours/Parcours';
import ForWho from './Pages/ForWho/ForWho';
import Shortcuts from './Components/Shortcuts/Shortcuts';
import Contact from './Pages/Contact/Contact';
import MobileNav from 'Components/MobileNav/MobileNav';
import DesktopNav from 'Components/DesktopNav/DesktopNav';
import Header from './Components/Header/Header';
// import Map from 'Components/Map/Map';
import React, { useEffect, useRef, useState } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { makeAppear } from './Greensock/utils';
import Slider from './Components/Slider/Slider';
import { Route, Routes } from 'react-router-dom';
// import { SmoothProvider } from 'react-smooth-scrolling'

const App:React.FC = () => {

	// document.querySelectorAll('[data-pin]');

	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	// Taking in the Dom the elements we need to anim on scroll
	const home: React.MutableRefObject<null> = useRef(null);
	const forwho: React.MutableRefObject<null> = useRef(null);
	const parcours: React.MutableRefObject<null> = useRef(null);
	const description: React.MutableRefObject<null> = useRef(null);
	const logoRef = useRef<HTMLDivElement>(null);

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

	// Set a pin to stay on the element when arrive on it and scrolling
	// useEffect(() => {
	// 	gsap.to(description.current, {scrollTrigger: {trigger: description.current,pin: true}})
	// }, [])
	// useEffect(() => {
	// 	gsap.to(forwho.current, {scrollTrigger: {trigger: forwho.current,pin: true}})
	// }, [])
	// useEffect(() => {
	// 	gsap.to(parcours.current, {scrollTrigger: {trigger: parcours.current,pin: true}})
	// }, [])

	// Make the logo appear on the top left when scrolling on the page
	// useEffect(() => {
	// 	makeAppear(logoRef.current, description.current, "top 75%", "top 55%", true)
	// }, [])

	// const anchorLink = (event: any): void => {
	// 	let scrollTo = event.currentTarget.getAttribute("data-pin");
	// 	console.log("scrollTo", scrollTo);
	// 	gsap.to(window, {
	// 		scrollTo,
	// 		// fastScrollEnd: 2000,
	// 		// 		preventOverlaps: true
	// 	});
	// };

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


	return (
		<div className="App" id="App">
			
			<img src="./assets/bckg3.jpg" alt="Fond d'écran" className="background" />
			
			<Header/>

			{dimensions.width > 767 ?
				<DesktopNav/>
				:
				<MobileNav 
					isOpen={isOpen}
					setOpen={setOpen}
					onToggle={onToggle}
					handleOnClose={handleOnClose} />
			}

			<Routes>
				<Route path="/parcours" element={<Parcours/>} />
				<Route path="/pourqui" element={<ForWho/>} />
				<Route path="/description" element={<Description/>} />
				<Route path="/gallerie" element={<Slider/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
			{/* <Shortcuts anchorLink={anchorLink}  />
			<Home innerRef={home} img={"home.jpg"} />
			<Description innerRef={description}  />
			<ForWho innerRef={forwho}  />
			<Parcours innerRef={parcours} />
			<Slider/>
			<Contact/> */}

			{/* <div ref={logoRef} className="App__imageDiv">
				<img src={"/assets/headLogowebp.webp"} className="App__logo" alt="logo de l'entreprise"></img>
			</div>y */}
		</div>
	);
}

export default App;