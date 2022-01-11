import React from 'react';
import description from "../../assets/description.jpg";
import "./Home.scss";

const Home = () => {

	return (

		<section className="home" >
			<div className="home__image">
				<img src={`/assets/description.lqip.jpg`} alt="deux chevaux face à deux personnes" />
				<img src={`/assets/description.jpg`}  alt="deux chevaux face à deux personnes" />

				{/* <div className="description__image-layout"></div> */}
				<div className="home__image-text">
					<h2>Le cheval, un gros animal !</h2>
					<h3>Séances de médiation équine en Vendée</h3>
				</div>
			</div>
		</section>
		
	)
}

export default Home
