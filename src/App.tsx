import './App.scss';
import Home from './Pages/Home/Home';
import Description from './Pages/Description/Description';
import Parcours from 'Pages/Parcours/Parcours';
import ForWho from './Pages/ForWho/ForWho';
import Shortcuts from 'Components/Shortcuts/Shortcuts';
// import Map from 'Components/Map/Map';
import React, { useEffect, useRef, useState } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { makeAppear } from 'Greensock/utils';

const App:React.FC = () => {

	// document.querySelectorAll('[data-pin]');

	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	const [disabled, setDisabled] = useState<boolean>(false);
	console.log(disabled)

	// if disabled is true, don't allow the ScrollTrigger's animation to render at any progress other than 0 or 1.
	function checkDisabled(self: any):void {
		let tween = self.getTween();
  		tween && Math.abs(self.getVelocity()) > 2500 && tween.progress(1);
	}

	const anchorLink = (event: any):void =>   {
		gsap.to(window, {
			onStart: () => setDisabled(true),
			onComplete: () => setDisabled(false),
			scrollTo: event.target.getAttribute("data-pin")
			});
	}

	// Taking in the Dom the elements we need to anim on scroll
	const home: React.MutableRefObject<null> = useRef(null);
	const forwho: React.MutableRefObject<null> = useRef(null);
	const parcours: React.MutableRefObject<null> = useRef(null);
	const description: React.MutableRefObject<null> = useRef(null);
	const logoRef = useRef<HTMLDivElement>(null);

	// Set a pin to stay on the element when arrive on it and scrolling
	useEffect(() => {
		gsap.to(description.current, {scrollTrigger: {trigger: description.current,pin: true, onUpdate: (e) => checkDisabled(e),}})
	})
	useEffect(() => {
		gsap.to(forwho.current, {scrollTrigger: {trigger: forwho.current,pin: true, onUpdate: (e) => checkDisabled(e),}})
	})
	useEffect(() => {
		gsap.to(parcours.current, {scrollTrigger: {trigger: parcours.current,pin: true, onUpdate: (e) => checkDisabled(e),}})
	})

	// Make the logo appear on the top left when scrolling on the page
	useEffect(() => {
		makeAppear(logoRef.current, description.current, "top 10%", "top start", false)
		// gsap.to(logoRef.current, {
		// 	autoAlpha: 1,
		// 	scrollTrigger: {
		// 		trigger: description.current,
		// 		// markers: true,
		// 		start: "top 10%",
		// 		end: "top start",
		// 		toggleActions: "play complete none reverse",
		// 	}
		// })
	})


	return (
		<div className="App">
			<img src="./assets/bckg2.jpg" alt="Fond d'écran" className="background" />
			<Shortcuts anchorLink={anchorLink} />
			<Home innerRef={home} img={"home.jpg"} />
			<Description innerRef={description}  />
			<ForWho innerRef={forwho}  />
			<Parcours checkDisabled={checkDisabled} disabled={disabled} innerRef={parcours} />
			{/* <Map/> */}

			<div ref={logoRef} className="App__imageDiv">
				<img src={"/assets/headLogowebp.webp"} className="App__logo" alt="logo de l'entreprise"></img>
			</div>
		</div>
	);
}

export default App;