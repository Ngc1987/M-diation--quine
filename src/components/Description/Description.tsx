// import forwho from process.env.PUBLIC_URL + "/assets/forwho.jpg";
import React from "react";
import "./Description.scss"

const Description:React.FC = () => {
	return (
		<section id="desc" className="description" >
			<div className="description__image">
				<img src={"/assets/description.jpg"} alt="deux chevaux face à deux personnes" />
				{/* <div className="description__image-layout"></div> */}
			</div>

			<div className="description__title">
					<h2>La médiation équine, qu'est-ce que ?</h2>
				</div>

			<article className="description__article" >
				<p>
					Enfants, ados, ou adultes, présentant des difficultés d'apprentissage, des déficiences intellectuelles ou cognitives, des troubles du spectre autistique, ou en difficulté sociale ou familiale.
				</p>
			</article>

		</section>
	)
}

export default Description;
