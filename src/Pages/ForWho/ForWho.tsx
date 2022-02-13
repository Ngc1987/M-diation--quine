// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./ForWho.scss";
import { StyledDiv } from '../../styles/styles';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "../../Greensock/utils";
import Loader from "../../Components/Loader/Loader";
// import ImageSection from "../../Components/ImageSection/ImageSection";
// import Title from "../../Components/Title/Title";

const Title = React.lazy(() => import("../../Components/Title/Title"));
const ImageSection = React.lazy(() => import("../../Components/ImageSection/ImageSection"));
// import { SmoothProvider } from 'react-smooth-scrolling';

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

	const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

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
	// useEffect(() => {
		
	// 	if(dimensions.width > 767 ) {
	// 		makeAppear(titleRef.current, titleRef.current, "bottom 15%", "bottom -20%", false, checkDisabled);
	// 	} else {
	// 		makeAppear(titleRef.current, titleRef.current, "bottom -10%", "bottom -50%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])
	
	// useEffect(() => {
		
	// 	if(dimensions.width > 767 ) {

	// 		makeMove(articleRef.current, articleRef.current, 80, "top -40%", "bottom -180%", false);
	// 		makeAppear(articleRef.current, articleRef.current, "top -10%", "center -30%", false, checkDisabled);

	// 	} else {
	// 			makeAppear(articleRef.current, articleRef.current, "top -10%", "top -40%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])

	// useEffect(() => {
		
	// 	if(dimensions.width > 767 ) {
			
	// 		makeMove(imageDivRef.current, articleRef.current, 0, "top 25%", "bottom -180%", false);
	// 		makeAppear(imageDivRef.current,articleRef.current, "top -10%", "center -30%", false, checkDisabled);
	// 		makeMove(imageRef2.current, imageRef2.current, -20, "top -60%", "center -150%", false);

	// 	} else {
	// 		makeAppear(imageDivRef.current, articleRef.current, "top 60%", "center 10%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])

	// useEffect(()=> {
	// 	hideGsap(".forwho__title", "center start-=175%", "bottom start-=199%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".forwho__image", "center start-=175%", "bottom start-=199%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".forwho__article", "center start-=175%", "bottom start-=199%", false);
	// }, [])

	// useEffect(() => {
	// 	gsap.from(titleRef.current, {
	// 		// y: 5,
	// 		opacity: 0,
	// 		duration: 1.5,
	// 		delay: 0.3
	// 	})
	// }, [])
	// useEffect(() => {
	// 	gsap.from(contentRef.current, {
	// 		// y:10,	
	// 		opacity: 0,
	// 		duration: 1.5,
	// 		delay: 0.3
	// 		// delay: 0.6
	// 	})
	// }, [])

	useEffect(() => {
		gsap.from(titleRef.current, {
			y: 15,
			opacity: 0,
			duration: 0.7,
			// delay: 0.3
		})
	}, [])
	useEffect(() => {
		gsap.from(contentRef.current, {
			y:15,	
			opacity: 0,
			duration: 0.7,
			delay: 0.5
		})
	}, [])

	return (
		// <SmoothProvider skew={false}>
		<Suspense fallback={<Loader/>}>

			<section ref={innerRef} className="forwho" data-pin="pinSection" >

				<Title 
					innerRef={titleRef} 
					className="forwho__title" 
					title="La médiation équine" 
					subtitle="Oui mais pour qui ?"/>

				<div ref={contentRef} className="forwho__content">

					<ImageSection 
						innerRef={imageDivRef} 
						innerRef2={imageRef2} 
						className="forwho__content-image" 
						src={"/assets/forwho.webp"} 
						alt="deux chevaux face à deux personnes" />


					<div ref={articleRef} className="forwho__content-article" >
						<p>La médiation équine s'adresse bien sûr à tout le monde, enfants, adolescents, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles et cognitives, des troubles du spectre autistique, ou en difficultés sociales ou familiales dans ses dimensions psychiques et corporelles</p>
						<br />
						<p style={{fontSize: "1.8rem"}} >Objectifs de la médiation équine :</p>
							<ul style={{fontSize: "1.3rem", marginTop: "10px"}}>
								<li>Solliciter l'attention </li>
								<li>Encourager les initiatives</li>
								<li>Faciliter le repérage dans le temps et l'espace</li>
								<li>Développer la conscience du corps</li>
								<li>Améliorer l'intime et la confiance en soi</li>
								<li>Faciliter le partage des émotions</li>
								<li>Entraîner les capacités de tolérance et d'adaptation au changement</li>
							</ul>
						
						<br />
						<p style={{fontSize: "1.8rem"}}>Bénéfices de la médiation équine :</p>
							<br />
							<ul style={{fontSize: "1.3rem", marginTop: "10px"}}>
								<li>Permet de canaliser la motricité (La chaleur transmise par l'animal à notre corps détend nos muscles et stimule notre propre système de circulation sanguine)</li>
								<li>A un effet positif sur le cerveau et apaise et favorise l'exploration visuelle et vocale.</li>
								<li>Favorise un lien affectif et développe l'empathie.</li>
								<li>A des effets cardio-vasculaires positifs liés à la détente.</li>
								<li>Permet de s'épanouir, prendre plaisir, s'exprimer, s'autonomiser, prendre confiance en soi, s'affirmer.</li>
								<li>Améliore la coordination, l'équilibre, la dextérité motrice, la communication, la concentration et l'attention</li>
								<li>Contact doux, agréable à toucher, effet apaisant et structurant.</li>
								<li>Le cheval a ses propres besoins besoins et peut exprimer son désaccord. Cela entraîne des comportements interactifs.</li>
								<li>Un effet physiologique, baisse les hormones du stress...</li>
							</ul>
							<br />
							<br />
						
						<p style={{fontSize: "1.8rem"}}><em>"</em> Aussi loin et aussi vite que l'on aille, on est toujours à sa juste place <br /> sur le dos d'un cheval <em>"</em></p>
					</div>
				</div>

			</section>
		</Suspense>
		// {/* </SmoothProvider> */}
	)
}

export default ForWho;
