// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React, { useEffect, useRef } from "react";
import "./Parcours.scss";
import ImageSection from "../../Components/ImageSection/ImageSection";
import Title from "../../Components/Title/Title";

import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Interface for the cmponent props
export interface Props  {
	className: string;
}

const Parcours:React.FC<Props> = ({className}) => {

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
					markers: true
				}
			});
	
		});
	
	}, []);

	return (

			<section className={`parcours ${className}`} data-pin="pinSection" >

				<Title 
					className="parcours__title" 
					title="Mon parcours" 
					/>

				<div className="parcours__content">
					<ImageSection 
						className="parcours__content-image" 
						src={process.env.PUBLIC_URL + "/assets/parcours.webp"} 
						alt="deux chevaux face à deux personnes" />


					<div className="parcours__content-article" >
						<p ref={addToRefs}>
							Depuis mon plus jeune âge, j'ai toujours passionnée par cet animal qu'est le cheval. Arrivée à l'âge adulte, je me suis décidée à passer un monitorat d'équitation (BEES 1er degré), que j'ai obtenu en 1992. 
						</p>
						<br />
						<p ref={addToRefs}>
							Mes diverses expériences professionnelles, m'ont ensuite amené à cotoyer un public divers (enfants adolescents ou adultes ayant des déficiences physiques ou intellectuelles, mais aussi femmes victimes de violences conjugales, personnes atteintes de pathologies sévères...), et je suis actuellement aide médico-psychologique depuis plus de 10 ans dans un IME (institut médico-éducatif) à Olonne sur Mer.
						</p>
						<br />
						<p ref={addToRefs}>
							Au sein de l'IME, nous possédons 2 poneys, ce qui m'a permis de m'exercer à la médiation équine pendant quelques années, auprès des jeunes pensionnaires, et de constater des changements positifs, aussi bien physiquement que psychiquement.
						</p>
						<br />
						<p ref={addToRefs}>Ces expériences ont conforté mon envie de me former en tant que praticienne en médiation équine, ce que j'ai enfin fait en 2017 avec l'association "Cheval Emoi", situé en Bretagne.</p>
					</div>
				</div>

			</section>
	)
}

export default Parcours;
