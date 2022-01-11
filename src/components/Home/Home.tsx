import React, { useEffect, useState } from 'react';
import "./Home.scss";
import { lqip, main, parent } from '../../styles/styles';

interface Props  {
	img: string;
}

const Home:React.FC<Props> = ({ img }) => {

	const [imgLoaded, setImgLoaded] = useState<boolean>(false);

	const [imgUrl, setImgUrl] = useState<string>("");

	useEffect(() => {
		setImgUrl(`/assets/${img}`)
	}, [img])

	return (

		<section className="home" >
			<div className="home__image">
				<img style={{ ...lqip, opacity: imgLoaded ? 0 : 100 }}
					src={`/assets/${img}.lqip.jpg`}
					alt="deux chevaux face à deux personnes" />
				<img style={main}
					src={`/assets/${img}`}
					alt="deux chevaux face à deux personnes"
					onLoad={() => setImgLoaded(true)} />

				{/* <div className="description__image-layout"></div> */}
				<div className="home__image-text">
					<h2>Le cheval, un gros animal !</h2>
					<h3>Séances de médiation équine en Vendée</h3>
				</div>
			</div>
		</section>

	)
}

export default Home;
