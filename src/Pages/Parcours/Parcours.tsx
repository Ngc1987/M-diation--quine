// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { StyledDiv } from "../../styles/styles";
import "./Parcours.scss";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "../../Greensock/utils";
import Loader from "../../Components/Loader/Loader";
// import ImageSection from "../../Components/ImageSection/ImageSection";
// import Title from "../../Components/Title/Title";
// import { SmoothProvider } from 'react-smooth-scrolling';

const Title = React.lazy(() => import("../../Components/Title/Title"));
const ImageSection = React.lazy(() => import("../../Components/ImageSection/ImageSection"));

// Interface for the cmponent props
export interface Props  {
	innerRef?: React.MutableRefObject<null>;
	checkDisabled?: (event: any) => void;
	disabled?: boolean;
	asscroll?: boolean;
	className: string;
}

const Parcours:React.FC<Props> = ({innerRef, checkDisabled, className}) => {

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
	// 		makeAppear(titleRef.current, titleRef.current, "bottom -85%", "bottom -110%", false, checkDisabled);
	// 	} else {
	// 		makeAppear(titleRef.current, titleRef.current, "bottom -120%", "bottom -160%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])
	
	// useEffect(() => {
	// 	if(dimensions.width > 767 ) {
	// 		makeMove(articleRef.current, articleRef.current, 80, "top -140%", "bottom -280%", false);
	// 		makeAppear(articleRef.current, articleRef.current, "top -110%", "center -130%", false, checkDisabled);
			
	// 	} else {
	// 		makeAppear(articleRef.current, articleRef.current, "top -120%", "top -160%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])

	// useEffect(() => {
	// 	if(dimensions.width > 767 ) {
	// 		makeMove(imageDivRef.current, articleRef.current, 0, "top -140%", "bottom -280%", false);
	// 		makeAppear(imageDivRef.current,articleRef.current, "top -110%", "center -130%", false, checkDisabled);
	// 		makeMove(imageRef2.current, imageRef2.current, -20, "top -160%", "center -250%", false);
	// 	} else {
	// 		makeAppear(imageDivRef.current, articleRef.current, "top -70%", "center -110%", false, checkDisabled);
	// 	}
	// }, [checkDisabled, dimensions.width])

	// useEffect(()=> {
	// 	hideGsap(".parcours__title", "center start-=275%", "bottom start-=295%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".parcours__image", "center start-=275%", "bottom start-=300%", false);
	// }, [])
	// useEffect(()=> {
	// 	hideGsap(".parcours__article", "center start-=275%", "bottom start-=300%", false);
	// }, [])

	// useEffect(() => {
	// 	gsap.from(titleRef.current, {
	// 		y: 5,
	// 		opacity: 0,
	// 		duration: 0.6,
	// 		delay: 0.4
	// 	})
	// }, [])
	// useEffect(() => {
	// 	gsap.from(contentRef.current, {
	// 		// y:10,	
	// 		opacity: 0,
	// 		duration: 1,
	// 		delay: 0.6
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

			<section data-scroll-section ref={innerRef} className={`parcours ${className}`} data-pin="pinSection" >

				<Title 
					innerRef={titleRef} 
					className="parcours__title" 
					title="Mon parcours" 
					// subtitle="Mon parcours"
					/>

				<div ref={contentRef} className="parcours__content">
					<ImageSection 
						innerRef={imageDivRef} 
						innerRef2={imageRef2} 
						className="parcours__content-image" 
						src={process.env.PUBLIC_URL + "/assets/parcours.webp"} 
						alt="deux chevaux face à deux personnes" />


					<div ref={articleRef} className="parcours__content-article" >
						<p>
							Depuis toujours passionnée par cet animal qu'est le cheval, j'ai passé un monitorat d'équitation (BEES 1er degré) en 1992. 
						</p>
						<br />
						<p>
							De par mes diverses expériences professionnelles, j'ai cotoyé un public divers (enfants adolescents ou adultes ayant des déficiences physiques ou intellectuelles, mais aussi femmes victimes de violences conjugales)
						</p>
						<br />
						<p>
							Je suis actuellement aide médico-psychologique depuis plus de 10 ans dans un IME (institut médico-éducatif) à Olonne sur Mer.
						</p>
						<br />
						<p>
							Au sein de l'IME, nous possédons 2 poneys, ce qui m'a permis de pratiquer la médiation équine pendant quelques années auprès des jeunes pensionnaires, et de confirmer mon envie de me former en tant que praticienne en médiation équine. 
						</p>
						<br />
						<p>Ce que j'ai enfin fais en 2017 avec l'association "Cheval Emoi", situé en Bretagne.</p>
					</div>
				</div>

			</section>
		</Suspense>
		// {/* </SmoothProvider> */}
	)
}

export default Parcours;
