// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./Description.scss";
// import Title from "Components/Title/Title";
// import ImageSection from "Components/ImageSection/ImageSection";
import { StyledDiv } from '../../styles/styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "../../Greensock/utils";
import Loader from "../../Components/Loader/Loader";

const Title = React.lazy(() => import("../../Components/Title/Title"));
const ImageSection = React.lazy(() => import("../../Components/ImageSection/ImageSection"));

// import { SmoothProvider } from 'react-smooth-scrolling'

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
	checkDisabled?: (self: any) => void;
	className: string;
}

const Description:React.FC<Props> = ({innerRef, checkDisabled, className}) => {
	
	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);
	
	// Taking in the Dom the elements we need to anim on scroll
	const titleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const articleRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const imageDivRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	const imageRef2 = useRef() as React.MutableRefObject<HTMLImageElement>;
	const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	
	// console.log(titleRef)
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
	
	// useEffect(()=> {
	// 	hideGsap(".description__title", "center start-=90%", "bottom start-=115%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".description__image", "center start-=90%", "bottom start-=115%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".description__article", "center start-=90%", "bottom start-=115%", false);
	// }, [])

	// Effect for the title of the component
	// useEffect(() => {
	// 	if(dimensions.width > 767 ) {
	// 		makeAppear(titleRef.current, titleRef.current, "center 95%", "center 85%", false, checkDisabled);
	// 	} else {
	// 		makeAppear(titleRef.current, titleRef.current, "bottom 70%", "bottom 30%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])
	
	// useEffect(() => {
	// 	if(dimensions.width > 767 ) {
	// 		makeMove(articleRef.current, articleRef.current, 80, "top 60%", "bottom -80%", false);
	// 		makeAppear(articleRef.current, articleRef.current, "top 75%", "top 60%", false, checkDisabled);
	// 	} else {
	// 		makeAppear(articleRef.current, articleRef.current, "top 60%", "top 30%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])
	// useEffect(() => {
	// 	if(dimensions.width > 767 ) {
	// 		makeMove(imageDivRef.current, articleRef.current, 0, "top 60%", "bottom -80%", false)
	// 		makeAppear(imageDivRef.current, articleRef.current, "top 75%", "top 60%", false, checkDisabled);
	// 		makeMove(imageRef2.current, imageRef2.current, 0, "top 40%", "center -50%", false)
	// 	}else {
	// 		makeAppear(imageDivRef.current, imageDivRef.current, "top 80%", "center 40%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])

	// useEffect(() => {
	// 	gsap.from(titleRef.current, {
	// 		y: 15,
	// 		opacity: 0,
	// 		duration: 0.7,
	// 		// delay: 0.3
	// 	})
	// }, [])
	// useEffect(() => {
	// 	gsap.from(contentRef.current, {
	// 		y:15,	
	// 		opacity: 0,
	// 		duration: 0.7,
	// 		delay: 0.5
	// 	})
	// }, [])
	
	return (

		<Suspense fallback={<Loader/>}>
			
			<section data-scroll-section ref={innerRef} className={`description ${className}`}>

				<Title 
					innerRef={titleRef} 
					className="description__title" 
					title="La médiation équine" 
					subtitle="Qu'est-ce que c'est ?"/>

				<div ref={contentRef} className="description__content">
					<ImageSection 
						innerRef={imageDivRef} 
						innerRef2={imageRef2} 
						className="description__content-image" 
						src={process.env.PUBLIC_URL + "/assets/description.webp"} 
						alt="deux chevaux face à deux personnes" />
					

					<div ref={articleRef} className="description__content-article" >
							<p>La médiation équine est un soin donné par un professionnel de santé formé à la relation d'aide, facilité par la présence d'un cheval ou d'un poney.</p>
							<br />
							<p>La médiation équine utilise le cheval comme médiateur thérapeutique, afin de traiter ou apaiser certaines difficultés psychiques ou physiques.</p>
							<br />
							<h2>"Ce qui est mis à l'extérieur est le reflet de ce qui est vécu à l'intérieur"</h2>
							<br />
							<p>On dit que le cheval est notre miroir, il reflète nos émotions et nos pressentis. Un cheval va nous apprendre à communiquer avec nous même.</p>
							<br />
							<p>L’accent est particulièrement mis sur la communication et l’intersensibilité avec le cheval, un animal très sociable. C'est une démarche de soin et un processus créateur. Le cheval fait lien vers le patient, c'est la tension entre le patient qui tend vers le désir et le thérapeute qui tend vers le désir du patient.</p>
							<br />
							<br />
								
					</div>

				</div>

			</section>
		</Suspense>
	)
}

export default Description;
