import React, { useEffect, useRef, useState } from 'react';
import "./Home.scss";
import { lqip, main } from '../../styles/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap } from 'Greensock/utils';

// import { SmoothProvider } from 'react-smooth-scrolling';

// Interface for the cmponent props
export interface Props  {
	img: string;
	innerRef?: React.MutableRefObject<null>;
	ref?: React.MutableRefObject<null>;
}

const Home:React.FC<Props> = ({ img, innerRef }) => {
	
	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
	// Check if the background is loaded
	const [imgLoaded, setImgLoaded] = useState<boolean>(false);
	// Set the url of the image when loaded
	const [imgUrl, setImgUrl] = useState<string>("");
	// Setting the image url to show it after the low quality pic after window is loaded
	useEffect(() => {
		setImgUrl(`/assets/${img}`)
	}, [img])
	
	// Taking in the Dom the elements we need to anim on scroll
	const textRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const layoutRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const logoRef = useRef() as React.MutableRefObject<HTMLImageElement>;
	const sectionRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	
	// Timeline to show when the page is loaded
	useEffect(() => {

		const logo: HTMLImageElement = logoRef.current;
		const HomeTL = gsap.timeline();
		HomeTL.to(layoutRef.current, {
			backgroundColor: "rgba(0, 0, 0, 0.507)", duration: 1.5,
		})
		.to(logo, {autoAlpha: 1, delay: 1, duration: 2})
		.to(textRef.current,{autoAlpha: 1, duration: 1, stagger: 0.5}, "-=1.3")
		.to(sectionRef.current, {
			opacity: 0,
			zIndex: -500,
			duration: 2,
			delay: 1,
			ease: "power4.out"
		})
	})
	// Apply the function to make disappear the elements on scroll
	// useEffect(() => {
	// 	const logo: HTMLImageElement = logoRef.current;
	// 	hideGsap(logo, "bottom 20%", "bottom start", false);
	// })
	// useEffect(() => {
	// 	// const logo: HTMLImageElement = logoRef.current;
	// 	hideGsap(".home__text h2", "bottom 20%", "bottom start", true);
	// })
	// useEffect(() => {
	// 	// const logo: HTMLImageElement = logoRef.current;
	// 	hideGsap(".home__text h3", "bottom 20%", "bottom start", false);
	// })
		
		return (
			// <SmoothProvider skew={false}>
			<div ref={sectionRef} className="home" data-pin="pinSection">
				<div className="home__image">
					<img className="home__image-lqip" 
						style={{ ...lqip, opacity: imgLoaded ? 0 : 100 }}
						src={`/assets/${img}.lqip.jpg`}
						alt="deux chevaux face à deux personnes" />
					<img className="home__image-main" 
						style={main}
						src={imgUrl}
						alt="deux chevaux face à deux personnes"
						onLoad={() => setImgLoaded(true)} />

					<div ref={layoutRef} className="home__image-layout"></div>
					
				</div>
				<div ref={textRef} className="home__text">
					<h2>Dom Equi-médiation</h2>
					<h3>Séances de médiation équine en Vendée</h3>
				</div>
				<div ref={logoRef} className="home__imageDiv">
					<img src={"/assets/headLogowebp.webp"} className="home__logo" alt="logo de l'entreprise"></img>

				</div>
			</div>
			// {/* </SmoothProvider> */}

	)
}

export default Home;
