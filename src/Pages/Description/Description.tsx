import React, { useEffect, useRef } from "react";
import "./Description.scss";
import Title from "Components/Title/Title";
import ImageSection from "Components/ImageSection/ImageSection";

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Interface for the component props
export interface Props  {
	className: string;
}

const Description:React.FC<Props> = ({className}) => {
	
	// Init the scrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger);

	// Create a refs array
	const revealRefs = useRef<HTMLParagraphElement[]>([]);
    revealRefs.current = [];
	// Put all the refs needed on the refs array
    const addToRefs = (el: HTMLParagraphElement):void => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

	// Create the little anim on scroll for each ref
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
					start: 'top bottom-=30',
					end: 'bottom bottom-=70',
					toggleActions: 'play none none reverse',
					// markers: true
				}
			});
		});
	}, []);
	
	return (

		<section data-scroll-section className={`description ${className}`}>

			<Title 
				className="description__title" 
				title="La médiation équine" 
				subtitle="Qu'est-ce que c'est ?"/>

			<div className="description__content">
				<ImageSection 
					className="description__content-image" 
					src={process.env.PUBLIC_URL + "/assets/description.webp"} 
					alt="deux chevaux face à deux personnes" />
				
				<div className="description__content-article" >
					<p ref={addToRefs} >La médiation équine est un soin donné par un professionnel de santé formé à la relation d'aide, facilité par la présence d'un cheval ou d'un poney. Elle aide à traiter ou apaiser certaines difficultés psychiques ou physiques.</p>
					<br />
					<h4 ref={addToRefs} >La médiation équine est en fait, l'art de soigner l'esprit par la médiation du cheval.</h4>
					<br />
					<p ref={addToRefs} >Le cheval, un animal très sociable, est un médiateur idéal pour nous aider à nous connecter à nos émotions et à notre vraie nature. Ses sens lui permettent de percevoir chez l’être humain, par les odeurs, le langage corporel et l’intonation de voix de la personne, les émotions ressenties par celle-ci (l'anxiété, la peur, la tristesse…).
					</p>
					<br />
					<p ref={addToRefs} >On dit que le cheval est notre miroir, il reflète nos émotions et nos pressentis. Un cheval va nous apprendre à communiquer avec nous même.</p>
					<br />
					<h4 ref={addToRefs} >"Ce qui est mis à l'extérieur est le reflet de ce qui est vécu à l'intérieur"</h4>
					<br />
					<p ref={addToRefs} >Le cheval étant en quasi permanence connecté à son environnement, il va réagir à celui-ci et adapter son comportement en fonction des messages qu’il perçoit.
					Il est donc un allié idéal pour susciter un éveil chez l’être humain, celui-ci étant également un être communiquant par nature.</p>
					<br />
					<p ref={addToRefs} >Pendant la séance de médiation équine, l’accent est donc particulièrement mis sur la communication et l’intersensibilité avec le cheval. C'est une démarche de soin et un processus créateur. Le cheval fait le lien entre le patient et le thérapeute. C'est la tension entre le patient qui tend vers son désir, et le thérapeute qui tend vers le désir du patient.</p>
					<br />
				</div>
			</div>
		</section>
	)
}

export default Description;
