import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Description from './components/Description/Description';
import Parcours from 'components/Parcours/Parcours';
import ForWho from './components/ForWho/ForWho';
import Shortcuts from 'components/Shortcuts/Shortcuts';
import React, {useState, useEffect, useRef} from 'react';
import {gsap} from "gsap";
// import background from "./assets/bckg2.jpg";
// import homePic from "../../assets/description2.jpg";

const App:React.FC = () => {

	const [toggle, setToggle] = useState<boolean>(false)
	const changeState = ():void => {
		setToggle(!toggle)
	}

	return (
		<div className="App">
			<img src="./assets/bckg2.jpg" alt="Fond d'écran" className="background" />
			<Shortcuts/>

			<Home img={"home.jpg"} />
			<ForWho />
			<Parcours/>
			<Description />
		</div>
	);
}

export default App;