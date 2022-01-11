import forwho from "../../assets/forwho.jpg";
import "./ForWho.scss"

const ForWho = () => {
	return (
		<section className="forwho" >
			<div className="forwho__image">
				<img src={forwho} alt="deux chevaux face à deux personnes" />
				{/* <div className="forwho__image-layout"></div> */}
				<div className="forwho__image-text">
					<h2>La médiation équine</h2>
					<h3>Oui mais pour qui ?</h3>
				</div>
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
