// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { useEffect, useRef, useState } from "react";
import "./Description.scss";
import Title from "Components/Title/Title";
import { StyledDiv } from '../../styles/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "Greensock/utils";

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
}

const Description:React.FC<Props> = ({innerRef}) => {
	
	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
	
	// Taking in the Dom the elements we need to anim on scroll
	const titleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const articleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const imageDivRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const imageRef2 = useRef() as React.MutableRefObject<HTMLImageElement>;
	
	console.log(titleRef)
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
	
	useEffect(()=> {
		hideGsap(".description__title", "center start-=75%", "bottom start-=99%", false);
	})
	useEffect(()=> {
		hideGsap(".description__image", "center start-=75%", "bottom start-=99%", false);
	})
	useEffect(()=> {
		hideGsap(".description__article", "center start-=75%", "bottom start-=99%", false);
	})

	// Effect for the title of the component
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeAppear(titleRef.current, titleRef.current, "bottom 95%", "bottom 70%", false);
		} else {
			makeAppear(titleRef.current, titleRef.current, "bottom 70%", "bottom 30%", true);
		}
	})
	
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(articleRef.current, articleRef.current, 80, "top 60%", "bottom -80%", false);
			makeAppear(articleRef.current, articleRef.current, "top 70%", "center 50%", false);
		} else {
			makeAppear(articleRef.current, articleRef.current, "top 60%", "top 30%", false);
		}
	})
	useEffect(() => {
		if(dimensions.width > 767 ) {
			makeMove(imageDivRef.current, articleRef.current, 0, "top 60%", "bottom -80%", false)
			makeAppear(imageDivRef.current, imageDivRef.current, "top 75%", "center 50%", false);
			makeMove(imageRef2.current, imageRef2.current, -20, "top 40%", "center -50%", false)
		}else {
			makeAppear(imageDivRef.current, imageDivRef.current, "top 80%", "center 40%", false);
		}
	})
	
	return (

		<section data-scroll-section ref={innerRef} className="description" data-pin="pinSection" >

			<div ref={imageDivRef} className="description__image">
				<img ref={imageRef2} src={"/assets/description.jpg"} alt="deux chevaux face à deux personnes" />
			</div>

			{/* <div ref={titleRef} className="description__title">
				<h2>La médiation équine</h2>
				<h3>Qu'est-ce que c'est ?</h3>
			</div> */}
			<Title innerRef={titleRef} className="description__title" title="La médiation équine" subtitle="Qu'est-ce que c'est ?"/>

			<div ref={articleRef} className="description__article" >
				<StyledDiv className="description__article-text">
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur quaerat eos molestias voluptatum harum praesentium aut hic incidunt minima quo quibusdam ipsum vero laudantium iste facere esse, dolorem sequi magni excepturi, velit ab obcaecati libero alias! Dolorum numquam vel, quia dolor tempora delectus laudantium. Id numquam at cum! Reiciendis, quibusdam.</p>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit quibusdam aut eos. Aliquid veniam voluptate, temporibus soluta modi dolorem ipsam? Commodi, culpa sit. Non nihil et aspernatur ratione saepe.</p>
				</StyledDiv>
			</div>

		</section>
	)
}

export default Description;
