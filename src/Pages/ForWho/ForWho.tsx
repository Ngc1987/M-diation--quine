// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { useEffect, useRef, useState } from "react";
import "./ForWho.scss";
import { StyledDiv } from '../../styles/styles';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "Greensock/utils";
import ImageSection from "Components/ImageSection/ImageSection";
import Title from "Components/Title/Title";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
	checkDisabled?: (self: any) => void;
}

const ForWho:React.FC<Props> = ({innerRef, checkDisabled}) => {

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
			makeAppear(titleRef.current, titleRef.current, "bottom 15%", "bottom -20%", false, checkDisabled);
		} else {
			makeAppear(titleRef.current, titleRef.current, "bottom -10%", "bottom -50%", false, checkDisabled);
		}
	}, [checkDisabled, dimensions.width])
	
	useEffect(() => {
		
		if(dimensions.width > 767 ) {

			makeMove(articleRef.current, articleRef.current, 80, "top -40%", "bottom -180%", false);
			makeAppear(articleRef.current, articleRef.current, "top -10%", "center -30%", false, checkDisabled);

		} else {
				makeAppear(articleRef.current, articleRef.current, "top -10%", "top -40%", false, checkDisabled);
		}
	}, [checkDisabled, dimensions.width])

	useEffect(() => {
		
		if(dimensions.width > 767 ) {
			
			makeMove(imageDivRef.current, articleRef.current, 0, "top 25%", "bottom -180%", false);
			makeAppear(imageDivRef.current,articleRef.current, "top -10%", "center -30%", false, checkDisabled);
			makeMove(imageRef2.current, imageRef2.current, -20, "top -60%", "center -150%", false);

		} else {
			makeAppear(imageDivRef.current, articleRef.current, "top 60%", "center 10%", false, checkDisabled);
		}
	}, [checkDisabled, dimensions.width])

	// useEffect(()=> {
	// 	hideGsap(".forwho__title", "center start-=175%", "bottom start-=199%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".forwho__image", "center start-=175%", "bottom start-=199%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".forwho__article", "center start-=175%", "bottom start-=199%", false);
	// }, [])

	return (
		
		<section ref={innerRef} className="forwho" data-pin="pinSection" >

			<ImageSection 
				innerRef={imageDivRef} 
				innerRef2={imageRef2} 
				className="forwho__image" 
				src={"/assets/forwho.jpg"} 
				alt="deux chevaux face à deux personnes" />

			<Title 
				innerRef={titleRef} 
				className="forwho__title" 
				title="La médiation équine" 
				subtitle="Oui mais pour qui ?"/>

			<div ref={articleRef} className="forwho__article" >
				<div className="forwho__article-text">
					<p>La médiation équine s'adresse bien sûr à tout le monde, enfant, ado, ou adulte, dans ses dimensions psychiques et corporelles </p>
					<p>Les soins peuvent concerner des difficultés d'apprentissage, des difficultés intellectuelles et cognitives, des troubles du spectre autistique, mais aussi des difficultés psychiques (dépression, anxiété, manque de confiance en soi, troubles des comportements alimentaires, addiction, désorientation)</p>
					<p></p>
				</div>
			</div>

		</section>
	)
}

export default ForWho;
