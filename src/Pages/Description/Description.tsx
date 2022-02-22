	// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { Suspense, useEffect, useRef, useState } from "react";
import "./Description.scss";
import Title from "Components/Title/Title";
import ImageSection from "Components/ImageSection/ImageSection";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hideGsap, makeAppear, makeMove } from "../../Greensock/utils";
import Loader from "../../Components/Loader/Loader";

// const Title = React.lazy(() => import("../../Components/Title/Title"));
// const ImageSection = React.lazy(() => import("../../Components/ImageSection/ImageSection"));

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


	const revealRefs = useRef<HTMLParagraphElement[]>([]);
    revealRefs.current = [];
 
    const addToRefs = (el: HTMLParagraphElement):void => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

	useEffect(() => {
		revealRefs.current.forEach((el, index) => {
			
			gsap.from(el,  {
				duration: 1,
				autoAlpha: 0,
				ease: "Expo.easeOut",
				y:15,
				scrollTrigger: {
					id: `section-${index+1}`,
					trigger: el,
					start: 'top bottom-=20',
					end: 'bottom bottom-=70',
					toggleActions: 'play none none reverse',
					// markers: true
				}
			});
	
		});
	
	}, []);
	
	return (

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
							<p ref={addToRefs} >La médiation équine est un soin donné par un professionnel de santé formé à la relation d'aide, facilité par la présence d'un cheval ou d'un poney.</p>
							<br />
							<p ref={addToRefs} >La médiation équine utilise le cheval comme médiateur thérapeutique, afin de traiter ou apaiser certaines difficultés psychiques ou physiques.</p>
							<br />
							<p ref={addToRefs} >La médiation équine, c'est l'art de soigner l'esprit par la médiation du cheval.</p>
							<br />
							<p ref={addToRefs} >On dit que le cheval est notre miroir, il reflète nos émotions et nos pressentis. Un cheval va nous apprendre à communiquer avec nous même.</p>
							<br />
							<h4 ref={addToRefs} >"Ce qui est mis à l'extérieur est le reflet de ce qui est vécu à l'intérieur"</h4>
							<br />
							<p ref={addToRefs} >Le cheval, un animal très sociable, est un médiateur idéal pour nous aider à nous connecter à nos émotions et à notre vraie nature. Ses sens lui permettent de percevoir chez l’être humain, par les odeurs, le langage corporel et l’intonation de voix de la personne, les émotions ressenties par celle-ci (l'anxiété, la peur, la tristesse…).
							</p>
							<br />
							<p ref={addToRefs} >Le cheval étant en quasi permanence connecté à son environnement, il va réagir à celui-ci et adapter son comportement en fonction des messages qu’il perçoit.
							Il est donc un allié idéal pour susciter un éveil chez l’être humain, celui-ci étant également un être communiquant par nature.</p>
							<br />
							<p ref={addToRefs} >Pendant la séance de médiation équine, l’accent est donc particulièrement mis sur la communication et l’intersensibilité avec le cheval. C'est une démarche de soin et un processus créateur. Le cheval fait le lien entre le patient et le thérapeute. C'est la tension entre le patient qui tend vers son désir, et le thérapeute qui tend vers le désir du patient.</p>
							<br />
							<br />
								
					</div>

				</div>

			</section>
	)
}

export default Description;
