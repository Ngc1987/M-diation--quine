// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { useEffect, useRef, useState } from "react";
import "./ForWho.scss";
import { StyledDiv } from '../../styles/styles';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "Greensock/utils";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
}

const ForWho:React.FC<Props> = ({innerRef}) => {

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
	// 			start: "center start-=175%",
	// 			end: "bottom start-=199%",
	// 			// toggleActions: "play complete reverse complete",
	// 			scrub: true,
	// 		onUpdate: (e) => checkDisabled(e),
	// 		},
	// 		opacity: 0
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
		hideGsap(".forwho__title", "center start-=175%", "bottom start-=199%", false);
	})
	useEffect(()=> {
		hideGsap(".forwho__image", "center start-=175%", "bottom start-=199%", false);
	})
	useEffect(()=> {
		hideGsap(".forwho__article", "center start-=175%", "bottom start-=199%", false);
	})

	// Effect for the title of the component
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeAppear(titleRef.current, titleRef.current, "bottom 15%", "bottom -20%", false);
			// gsap.from(titleRef.current, {
			// 	opacity: 0,
			// 	// immediateRender: false,
			// 	scrollTrigger: {
			// 		trigger: titleRef.current,
			// 		markers: true,
			// 		start: "bottom 25%",
			// 		end: "bottom -30%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			
		} else {
			makeAppear(titleRef.current, titleRef.current, "bottom -10%", "bottom -50%", false);
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
			makeMove(articleRef.current, articleRef.current, 80, "top -40%", "bottom -180%", false);
			// gsap.to(articleRef.current, {
			// 	y: 80,
			// 	scrollTrigger: {
			// 		trigger: articleRef.current,
			// 		// markers: true,
			// 		start: "top -40%",
			// 		end: "bottom -180%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// 		onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			makeAppear(articleRef.current, articleRef.current, "top -10%", "center -50%", false);
			// gsap.from(articleRef.current, {
				// 	opacity: 0,
				// 	scrollTrigger: {
					// 		trigger: articleRef.current,
					// 		// markers: true,
					// 		start: "top 25%",
					// 		end: "center -50%",
					// 		toggleActions: "play complete reverse complete",
					// 		scrub: 1,
					// onUpdate: (e) => checkDisabled(e),
					// 	}
					// })
					
				} else {
			makeAppear(articleRef.current, articleRef.current, "top -10%", "top -40%", false);
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
			// 		onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
		}
	})
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(imageDivRef.current, articleRef.current, 0, "top 25%", "bottom -180%", false);
			// 		gsap.to(imageDivRef.current, {
				// 			y: 0,
				// 			scrollTrigger: {
					// 				trigger: articleRef.current,
					// 				// markers: true,
					// 				start: "top 25%",
					// 				end: "bottom -180%",
					// 				toggleActions: "play complete reverse complete",
					// 				scrub: 1,
	// 		onUpdate: (e) => checkDisabled(e),
	// 	}
	// })
		makeAppear(imageDivRef.current,articleRef.current, "top -10%", "center -50%", false);
			// gsap.from(imageDivRef.current, {
				// 	opacity: 0,
				// 	scrollTrigger: {
					// 		trigger: articleRef.current,
					// 		// markers: true,
			// 		start: "top -30%",
			// 		end: "center -50%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
			makeMove(imageRef2.current, imageRef2.current, -20, "top -60%", "center -150%", false);
			// gsap.to(imageRef2.current, {
			// 	y: -20,
			// 	scrollTrigger: {
			// 		trigger: imageRef2.current,
			// 		// markers: true,
			// 		start: "top -60%",
			// 		end: "center -150%",
			// 		toggleActions: "play complete reverse complete",
			// 		scrub: 1,
			// 		onUpdate: (e) => checkDisabled(e),
			// 	}
			// })
		} else {
			makeAppear(imageDivRef.current, articleRef.current, "top 60%", "center 10%", false);
		}
	})
	return (

		<section ref={innerRef} className="forwho" data-pin="pinSection" >

			<div ref={imageDivRef} className="forwho__image">
				<img ref={imageRef2} src={"/assets/forwho.jpg"} alt="deux chevaux face à deux personnes" />
			</div>

			<div ref={titleRef} className="forwho__title">
				<h2>La médiation équine</h2>
				<h3>Oui mais pour qui ?</h3>
			</div>

			<div ref={articleRef} className="forwho__article" >
				<StyledDiv className="forwho__article-text">
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat eos molestias voluptatum harum praesentium aut hic incidunt minima quo quibusdam ipsum vero laudantium iste facere esse, dolorem sequi magni excepturi, velit ab obcaecati libero alias! Dolorum numquam vel, quia dolor tempora delectus laudantium. Id numquam at cum! Reiciendis, quibusdam.</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit quibusdam aut eos. Aliquid veniam voluptate, temporibus soluta modi dolorem ipsam? Commodi, culpa sit. Non nihil et aspernatur ratione saepe.</p>
				</StyledDiv>
			</div>

		</section>
	)
}

export default ForWho;
