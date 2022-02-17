// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./ForWho.scss";
import { StyledDiv } from '../../styles/styles';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "../../Greensock/utils";
import Loader from "../../Components/Loader/Loader";
import { GoPrimitiveDot } from "react-icons/go";
import ImageSection from "../../Components/ImageSection/ImageSection";
import Title from "../../Components/Title/Title";

// const Title = React.lazy(() => import("../../Components/Title/Title"));
// const ImageSection = React.lazy(() => import("../../Components/ImageSection/ImageSection"));
// import { SmoothProvider } from 'react-smooth-scrolling';

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
	checkDisabled?: (self: any) => void;
	className: string;
}

const ForWho:React.FC<Props> = ({innerRef, checkDisabled, className}) => {

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

			<section ref={innerRef} className={`forwho ${className}`} data-pin="pinSection" >

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
						src={"/assets/forwho.jpg"} 
						alt="deux chevaux face à deux personnes" />


					<div ref={articleRef} className="forwho__content-article" >
						<p>La médiation équine s'adresse à toute personne, dans ses dimensions psychiques et corporelles, enfant, adolescent, ou adulte.</p>
						<br />
						<p>Les séances de médiation équine sont bénéfiques pour toute personne présentant des troubles psychiques, allant du véritable handicap aux simples difficulté sociales. </p>
						<br />
						<p>
							Des difficultés d'apprentissage, des déficiences intellectuelles et cognitives, des troubles du spectre autistique, des troubles psychomoteurs ou des difficultés sociales ou familiales, sont des exemples de problématiques qui peuvent être traitées grâce à la médiation équine.
						</p>
						<br />
						<p>Mais la médiation équine s'adresse aussi aux personnes à la recherche d'un bien-être, suite à une perte de confiance en soi, une dépression, un deuil récent, ou après avoir dévellopeé des symptomes de stress post-traumatique (troubles du sommeil, troubles alimentaires, crise d’angoisse, troubles de l’humeur, troubles affectifs…)</p>
						<br />
						<h4>Objectifs de la médiation équine :</h4>
						<br />
						
							{/* <ul style={{fontSize: "1.3rem", marginTop: "10px"}}> */}
								<p>
									<GoPrimitiveDot/>Solliciter l'attention 
								</p>
								<p>
									<GoPrimitiveDot/>Encourager les initiatives
								</p>
								<p>
									<GoPrimitiveDot/>Faciliter le repérage dans le temps et l'espace
								</p>
								<p>
									<GoPrimitiveDot/>Développer la conscience du corps
								</p>
								<p>
									<GoPrimitiveDot/>Améliorer l'intime et la confiance en soi
								</p>
								<p>
									<GoPrimitiveDot/>Faciliter le partage des émotions
								</p>
								<p>
									<GoPrimitiveDot/>Entraîner les capacités de tolérance et d'adaptation au changement
								</p>
							{/* </ul> */}
						
						<br />
						<h4 style={{fontSize: "1.8rem"}}>Bénéfices de la médiation équine :</h4>
							<br />
							{/* <ul style={{fontSize: "1.3rem", marginTop: "10px"}}> */}
							<p>
								<GoPrimitiveDot/> Permet de canaliser la motricité (La chaleur transmise par l'animal à notre corps détend nos muscles et stimule notre propre système de circulation sanguine).
							</p>
								<GoPrimitiveDot/> A un effet positif sur le cerveau et apaise et favorise l'exploration visuelle et vocale.
							<p>
								<GoPrimitiveDot/> Favorise un lien affectif et développe l'empathie.
							</p>
							<p>
								<GoPrimitiveDot/> A des effets cardio-vasculaires positifs liés à la détente.
							</p>
							<p>
								<GoPrimitiveDot/> Permet de s'épanouir, prendre plaisir, s'exprimer, s'autonomiser, prendre confiance en soi, s'affirmer.
							</p>
							<p>
								<GoPrimitiveDot/> Améliore la coordination, l'équilibre, la dextérité motrice, la communication, la concentration et l'attention.
							</p>
							<p>
								<GoPrimitiveDot/> Effet apaisant et structurant, le cheval a un contact doux et est agréable à toucher.
							</p>
							<p>
								<GoPrimitiveDot/> Le cheval a ses propres besoins et peut exprimer son désaccord. Cela entraîne des comportements interactifs.
							</p>
							<p>
								<GoPrimitiveDot/> Un effet physiologique positif, baisse les hormones du stress...
							</p>
								
							{/* </ul> */}
							<br />
							<br />
						
						<h4><em>"</em> Aussi loin et aussi vite que l'on aille, on est toujours à sa juste place <br /> sur le dos d'un cheval. <em>"</em></h4>
					</div>
				</div>

			</section>
	)
}

export default ForWho;
