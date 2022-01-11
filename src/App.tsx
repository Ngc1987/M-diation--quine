import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Description from './components/Description/Description';
import ForWho from './components/ForWho/ForWho';
import React from 'react';
// import background from "./assets/bckg2.jpg";
// import homePic from "../../assets/description2.jpg";

const App:React.FC = () => {
	return (
		<div className="App">
			<img src="./assets/bckg2.jpg" alt="Fond d'écran" className="background" />
			{/* <Header/> */}
			<Home img={"description2.jpg"} />
			{/* <Description />
			<ForWho /> */}
			<Routes>
				{/* <Route path="/" element={<Home />} />
					<Route path="about" element={<About />} /> */}
			</Routes>
		</div>
	);
}

export default App;