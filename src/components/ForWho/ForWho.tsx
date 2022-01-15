// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React from "react";
import "./ForWho.scss"

const ForWho:React.FC = () => {
	return (
		<section className="forwho" >
			<div className="forwho__image">
				<img src={"/assets/forwho.jpg"} alt="deux chevaux face à deux personnes" />
				{/* <div className="forwho__image-layout"></div> */}
			</div>

			<div className="forwho__title">
					<h2>La médiation équine</h2>
					<h3>Oui mais pour qui ?</h3>
				</div>

			<article className="forwho__article" >
				<p>
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
				</p>
			</article>

		</section>
	)
}

export default ForWho;
