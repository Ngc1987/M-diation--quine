import React, { useEffect, useRef } from "react";
import "./ForWho.scss";
import ImageSection from "../../Components/ImageSection/ImageSection";
import Title from "../../Components/Title/Title";

import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoPrimitiveDot } from "react-icons/go";

// Interface for the cmponent props
export interface Props  {
	className: string;
}

const ForWho:React.FC<Props> = ({className}) => {

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
			
			gsap.to(el,  {
				duration: 1,
				opacity: 1,
				ease: "Expo.easeOut",
				y:0,
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

			<section className={`forwho ${className}`} data-pin="pinSection" >

				<Title 
					className="forwho__title" 
					title="La médiation équine" 
					subtitle="Oui mais pour qui ?"/>

				<div className="forwho__content">

					<ImageSection 
						className="forwho__content-image" 
						src={"/assets/forwho.jpg"} 
						alt="deux chevaux face à deux personnes" />


					<div className="forwho__content-article" >
						<p ref={addToRefs}>La médiation équine s'adresse à toute personne, dans ses dimensions psychiques et corporelles, enfant, adolescent, ou adulte.</p>
						<br />
						<p ref={addToRefs}>Les séances de médiation équine sont bénéfiques pour toute personne présentant des troubles psychiques, allant du véritable handicap aux simples difficulté sociales. </p>
						<br />
						<p ref={addToRefs}>
							Des difficultés d'apprentissage, des déficiences intellectuelles et cognitives, des troubles du spectre autistique, des troubles psychomoteurs ou des difficultés sociales ou familiales, sont des exemples de problématiques qui peuvent être traitées grâce à la médiation équine.
						</p>
						<br />
						<p ref={addToRefs}>Mais la médiation équine s'adresse aussi aux personnes à la recherche d'un bien-être, suite à une perte de confiance en soi, une dépression, un deuil récent, ou après avoir développé des symptômes de stress post-traumatique (troubles du sommeil, troubles alimentaires, crise d’angoisse, troubles de l’humeur, troubles affectifs…)</p>
						<br />
						<h4 ref={addToRefs}>Objectifs de la médiation équine :</h4>
						<br />
						
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Solliciter l'attention 
								</p>
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Encourager les initiatives
								</p>
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Faciliter le repérage dans le temps et l'espace
								</p>
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Développer la conscience du corps
								</p>
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Améliorer l'intime et la confiance en soi
								</p>
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Faciliter le partage des émotions
								</p>
								<p ref={addToRefs}>
									<GoPrimitiveDot/>Entraîner les capacités de tolérance et d'adaptation au changement
								</p>
						
						<br />
						<h4 ref={addToRefs} style={{fontSize: "1.8rem"}}>Bénéfices de la médiation équine :</h4>
							<br />
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Permet de canaliser la motricité (La chaleur transmise par l'animal à notre corps détend nos muscles et stimule notre propre système de circulation sanguine).
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> A un effet positif sur le cerveau et apaise et favorise l'exploration visuelle et vocale.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Favorise un lien affectif et développe l'empathie.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> A des effets cardio-vasculaires positifs liés à la détente.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Permet de s'épanouir, prendre plaisir, s'exprimer, s'autonomiser, prendre confiance en soi, s'affirmer.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Améliore la coordination, l'équilibre, la dextérité motrice, la communication, la concentration et l'attention.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Effet apaisant et structurant, le cheval a un contact doux et est agréable à toucher.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Le cheval a ses propres besoins et peut exprimer son désaccord. Cela entraîne des comportements interactifs.
							</p>
							<p ref={addToRefs}>
								<GoPrimitiveDot/> Un effet physiologique positif, baisse les hormones du stress...
							</p>
								
							<br />
							<br />
						
						<h4 ref={addToRefs}><em>"</em> Aussi loin et aussi vite que l'on aille, on est toujours à sa juste place <br /> sur le dos d'un cheval. <em>"</em></h4>
					</div>
				</div>

			</section>
	)
}

export default ForWho;
