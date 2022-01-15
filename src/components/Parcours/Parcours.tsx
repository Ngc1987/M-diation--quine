// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React from "react";
import "./Parcours.scss"

const Parcours:React.FC = () => {
	return (
		<section className="parcours" >
			<div className="parcours__image">
				<img src={"/assets/parcours.jpg"} alt="deux chevaux face à deux personnes" />
				{/* <div className="parcours__image-layout"></div> */}
			</div>

			<div className="parcours__title">
					<h2>Mon parcours</h2>
				</div>

			<article className="parcours__article" >
				<p>
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
				</p>
			</article>

		</section>
	)
}

export default Parcours;
