import './App.scss';
import Home from './components/Home/Home';
import Description from './components/Description/Description';
import Parcours from 'components/Parcours/Parcours';
import ForWho from './components/ForWho/ForWho';
import Shortcuts from 'components/Shortcuts/Shortcuts';
import React, { useEffect, useRef } from 'react';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App:React.FC = () => {

	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Taking in the Dom the elements we need to anim on scroll
	const home: React.MutableRefObject<null> = useRef(null);
	const forwho: React.MutableRefObject<null> = useRef(null);
	const parcours: React.MutableRefObject<null> = useRef(null);
	const description: React.MutableRefObject<null> = useRef(null);
	const logoRef = useRef<HTMLDivElement>(null);

	// Set a pin to stay on the element when arrive on it and scrolling
	useEffect(() => {
		gsap.to(forwho.current, {
			scrollTrigger: {
				trigger: forwho.current,
				pin: true
			}
		})
		gsap.to(parcours.current, {
			scrollTrigger: {
				trigger: parcours.current,
				pin: true
			}
		})
		gsap.to(description.current, {
			scrollTrigger: {
				trigger: description.current,
				pin: true
			}
		})

	})

	// Make the logo appear on the top left when scrolling on the page
	useEffect(() => {
		gsap.to(logoRef.current, {
			autoAlpha: 1,
			scrollTrigger: {
				trigger: forwho.current,
				markers: true,
				start: "top 10%",
				end: "top start",
				toggleActions: "play complete none reverse",
			}
		})
	})


	return (
		<div className="App">
			<img src="./assets/bckg2.jpg" alt="Fond d'écran" className="background" />
			<Shortcuts/>

			<Home innerRef={home} img={"home.jpg"} />
			<ForWho innerRef={forwho}  />
			<Parcours innerRef={parcours} />
			<Description innerRef={description}  />

			<div ref={logoRef} className="App__imageDiv">
				<img src={"/assets/headLogowebp.webp"} className="App__logo" alt="logo de l'entreprise"></img>
			</div>
		</div>
	);
}

export default App;