// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { useEffect, useRef, useState } from "react";
import { StyledDiv } from "styles/styles";
import "./Parcours.scss";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "Greensock/utils";
import ImageSection from "Components/ImageSection/ImageSection";
import Title from "Components/Title/Title";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
	checkDisabled?: (event: any) => void;
	disabled?: boolean;
	asscroll?: boolean;
}

const Parcours:React.FC<Props> = ({innerRef, checkDisabled}) => {

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
	  
	// Listen resize event, and set the state with the actual values
	useEffect(() => {
		function handleResize() {
			setDimensions({height: window.innerHeight, width: window.innerWidth})
		}
		window.addEventListener('resize', handleResize)
	
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	// Effect for the title of the component
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeAppear(titleRef.current, titleRef.current, "bottom -85%", "bottom -110%", false, checkDisabled);
		} else {
			makeAppear(titleRef.current, titleRef.current, "bottom -120%", "bottom -160%", false, checkDisabled);
		}
	}, [checkDisabled, dimensions.width])
	
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(articleRef.current, articleRef.current, 80, "top -140%", "bottom -280%", false);
			makeAppear(articleRef.current, articleRef.current, "top -110%", "center -130%", false, checkDisabled);
			
		} else {
			makeAppear(articleRef.current, articleRef.current, "top -120%", "top -160%", false, checkDisabled);
		}
	}, [checkDisabled, dimensions.width])

	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(imageDivRef.current, articleRef.current, 0, "top -140%", "bottom -280%", false);
			makeAppear(imageDivRef.current,articleRef.current, "top -110%", "center -130%", false, checkDisabled);
			makeMove(imageRef2.current, imageRef2.current, -20, "top -160%", "center -250%", false);
		} else {
			makeAppear(imageDivRef.current, articleRef.current, "top -70%", "center -110%", false, checkDisabled);
		}
	}, [checkDisabled, dimensions.width])

	// useEffect(()=> {
	// 	hideGsap(".parcours__title", "center start-=275%", "bottom start-=295%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".parcours__image", "center start-=275%", "bottom start-=300%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".parcours__article", "center start-=275%", "bottom start-=300%", false);
	// }, [])

	return (
		<section data-scroll-section ref={innerRef} className="parcours" data-pin="pinSection" >

			<ImageSection 
				innerRef={imageDivRef} 
				innerRef2={imageRef2} 
				className="parcours__image" 
				src={"/assets/parcours.jpg"} 
				alt="deux chevaux face à deux personnes" />

			<Title 
				innerRef={titleRef} 
				className="parcours__title" 
				title="Qui suis-je ?" 
				subtitle="Mon parcours"
				/>

			<div ref={articleRef} className="parcours__article" >
				<div className="parcours__article-text" >
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat eos molestias voluptatum harum praesentium aut hic incidunt minima quo quibusdam ipsum vero laudantium iste facere esse, dolorem sequi magni excepturi, velit ab obcaecati libero alias! Dolorum numquam vel, quia dolor tempora delectus laudantium. Id numquam at cum! Reiciendis, quibusdam.</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit quibusdam aut eos. Aliquid veniam voluptate, temporibus soluta modi dolorem ipsam? Commodi, culpa sit. Non nihil et aspernatur ratione saepe.</p>
				</div>
			</div>

		</section>
	)
}

export default Parcours;
