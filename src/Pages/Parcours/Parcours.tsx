// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { useEffect, useRef, useState } from "react";
import { StyledDiv } from "styles/styles";
import "./Parcours.scss";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "Greensock/utils";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
	checkDisabled: (event: any) => void;
	disabled?: boolean;
	asscroll?: boolean;
}

const Parcours:React.FC<Props> = ({innerRef, checkDisabled, disabled}) => {

	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Taking in the Dom the elements we need to anim on scroll
	const titleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const articleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const imageDivRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const imageRef2 = useRef() as React.MutableRefObject<HTMLImageElement>;
	

	// state for the window size, differents animations displayed for desktop or mobile device
	const [dimensions, setDimensions] = useState({ 
		height: window.innerHeight,
		width: window.innerWidth
	})

	// Function to hide the elements when exit the component
	// const hideGsap = (elem) => {
	// 	gsap.fromTo(elem, 
	// 		{
	// 			opacity: 1
	// 		},
	// 		{
	// 		// autoAlpha: 0,
	// 		// backgroundColor: "transparent",
	// 		// 
	// 		scrollTrigger: {
	// 			trigger: elem,
	// 			// markers: true,
	// 			start: "center start-=275%",
	// 			end: "bottom start-=299%",
	// 			// toggleActions: "play complete reverse complete",
	// 			scrub: true,
	// 		onUpdate: (e) => checkDisabled(e),
	// 		},
	// 		opacity: 0,
			
	// 	})
	// }
	  
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
	useEffect(()=> {
		hideGsap(".forwho__title", "center start-=275%", "bottom start-=299%", false);
	})
	useEffect(()=> {
		hideGsap(".forwho__image", "center start-=275%", "bottom start-=299%", false);
	})
	useEffect(()=> {
		hideGsap(".forwho__article", "center start-=275%", "bottom start-=299%", false);
	})

	// Effect for the title of the component
	useEffect(() => {
		if(dimensions.width > 767 ) {

			makeAppear(titleRef.current, titleRef.current, "bottom -105%", "bottom -130%", false);
			// gsap.from(titleRef.current, {
				// 	opacity: 0,
				// 	scrollTrigger: {
					// 		trigger: titleRef.current,
					// 		// markers: true,
					// 		start: "bottom 95%",
					// 		end: "bottom 70%",
					// 		toggleActions: "play complete reverse complete",
					// 		scrub: 1,
					// onUpdate: (e) => checkDisabled(e),
					// 	}
					// })
					
				} else {
			makeAppear(titleRef.current, titleRef.current, "bottom -120%", "bottom -160%", false);
			// gsap.from(titleRef.current, {
			// 	opacity: 0,
			// 	scrollTrigger: {
			// 		trigger: titleRef.current,
			// 		// markers: true,
			// 		start: "bottom 80%",
			// 		end: "bottom 40%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
		}
	})
	
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(articleRef.current, articleRef.current, 80, "top -140%", "bottom -280%", false);
			// gsap.to(articleRef.current, {
			// 	y: 80,
			// 	scrollTrigger: {
			// 		trigger: articleRef.current,
			// 		// markers: true,
			// 		start: "top -140%",
			// 		end: "bottom -280%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			makeAppear(articleRef.current, articleRef.current, "top -130%", "center -150%", false);
			// gsap.from(articleRef.current, {
			// 	opacity: 0,
			// 	scrollTrigger: {
			// 		trigger: articleRef.current,
			// 		// markers: true,
			// 		start: "top 70%",
			// 		end: "center 50%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			
		} else {
			makeAppear(articleRef.current, articleRef.current, "top -120%", "top -160%", false);
			// gsap.from(articleRef.current, {
			// 	opacity: 0,
			// 	// y: 0,
			// 	scrollTrigger: {
			// 		trigger: articleRef.current,
			// 		// markers: true,
			// 		start: "top 60%",
			// 		end: "top 30%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
		}
	})
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(imageDivRef.current, articleRef.current, 0, "top -140%", "bottom -280%", false);
			// gsap.to(imageDivRef.current, {
			// 	y: 0,
			// 	scrollTrigger: {
			// 		trigger: articleRef.current,
			// 		// markers: true,
			// 		start: "top -140%",
			// 		end: "bottom -280%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			makeAppear(imageDivRef.current,articleRef.current, "top -130%", "center -150%", false);
			// gsap.from(imageDivRef.current, {
			// 	opacity: 0,
			// 	scrollTrigger: {
			// 		trigger: articleRef.current,
			// 		// markers: true,
			// 		start: "top 70%",
			// 		end: "center 50%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			makeMove(imageRef2.current, imageRef2.current, -20, "top -160%", "center -250%", false);
			// gsap.to(imageRef2.current, {
			// 	y: -20,
			// 	scrollTrigger: {
			// 		trigger: imageRef2.current,
			// 		// markers: true,
			// 		start: "top -160%",
			// 		end: "center -250%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
		} else {
			makeAppear(imageDivRef.current, articleRef.current, "top -70%", "center -110%", false);
		}
	})
	return (
		<section data-scroll-section ref={innerRef} className="parcours" data-pin="pinSection" >
			<div ref={imageDivRef} className="parcours__image">
				<img ref={imageRef2} src={"/assets/parcours.jpg"} alt="deux chevaux face à deux personnes" />
				{/* <div className="parcours__image-layout"></div> */}
			</div>

			<div ref={titleRef} className="parcours__title">
					<h2>Mon parcours</h2>
				</div>

			<div ref={articleRef} className="parcours__article" >
				<StyledDiv className="parcours__article-text" >
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat eos molestias voluptatum harum praesentium aut hic incidunt minima quo quibusdam ipsum vero laudantium iste facere esse, dolorem sequi magni excepturi, velit ab obcaecati libero alias! Dolorum numquam vel, quia dolor tempora delectus laudantium. Id numquam at cum! Reiciendis, quibusdam.</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit quibusdam aut eos. Aliquid veniam voluptate, temporibus soluta modi dolorem ipsam? Commodi, culpa sit. Non nihil et aspernatur ratione saepe.</p>
				</StyledDiv>
			</div>

		</section>
	)
}

export default Parcours;
