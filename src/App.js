import './App.scss';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import ForWho from './components/ForWho/ForWho';
import background from "./assets/bckg2.jpg"

function App() {
  	return (
		<div className="App">
				<img src={background} alt="Fond d'écran" className="background"/>
				<Header/>
				<Description/>
				<ForWho/>
				<Routes>
					{/* <Route path="/" element={<Home />} />
					<Route path="about" element={<About />} /> */}
				</Routes>
		</div>
  	);
}

export default App;