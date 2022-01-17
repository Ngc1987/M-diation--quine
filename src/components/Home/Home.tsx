import React, { useEffect, useState } from 'react';
import "./Home.scss";
import { lqip, main, parent, StyledDiv } from '../../styles/styles';

export interface Props  {
	img: string;
	innerRef?: React.MutableRefObject<null>,
}

const Home:React.FC<Props> = ({ img, innerRef }) => {

	const [imgLoaded, setImgLoaded] = useState<boolean>(false);

	const [imgUrl, setImgUrl] = useState<string>("");

	useEffect(() => {
		setImgUrl(`/assets/${img}`)
	}, [img])

	return (

		<section ref={innerRef} className="home" >
			<div className="home__image">
				<img className="home__image-lqip" 
					// style={{ ...lqip, opacity: imgLoaded ? 0 : 100 }}
					src={`/assets/${img}.lqip.jpg`}
					alt="deux chevaux face à deux personnes" />
				<img className="home__image-main" 
					// style={main}
					src={`/assets/${img}`}
					alt="deux chevaux face à deux personnes"
					onLoad={() => setImgLoaded(true)} />

				{/* <div className="description__image-layout"></div> */}
				
			</div>
			<StyledDiv className="home__text">
					<h2>Le cheval, un gros animal !</h2>
					<h3>Séances de médiation équine en Vendée</h3>
				</StyledDiv>
		</section>

	)
}

export default Home;
