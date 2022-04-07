import './App.scss';
import Description from './Pages/Description/Description';
import Parcours from './Pages/Parcours/Parcours';
import ForWho from './Pages/ForWho/ForWho';
import Contact from './Pages/Contact/Contact';

import MobileNav from '../src/Components/MobileNav/MobileNav';
import DesktopNav from '../src/Components/DesktopNav/DesktopNav';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';

import useWindowSize from 'Hooks/useWindowSize';

import React, {useEffect, useRef, useState } from 'react';
import {gsap} from "gsap";

const App:React.FC = () => {
	
	// Taking in the Dom the elements we need to anim on scroll
	const app: React.MutableRefObject<null> = useRef(null);

	// Hook to fetch the window size and show the mobile or desktop version
	const dimensions = useWindowSize();
	
	// State and functions neede for the mobile device menu
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const setOpen = () => {
		setIsOpen(!isOpen)
	}
	const handleOnClose = () => {
		setIsOpen(false)
	}
	const onToggle = (toggled:boolean) => {
		toggled ? setIsOpen(true) : setIsOpen(false)
	}


	// State for the displayed section on the page
	const [sectionToDisplay, setSectionToDisplay] = useState<string>("description");
	// Function to display the section to display
	const handleSectionToDisplay = (e: { target: { dataset: { section: React.SetStateAction<string>; }; }; charCode: number; }) => {
		setSectionToDisplay(e.target.dataset.section);
		
		if(e.charCode === 13) {
			setSectionToDisplay(e.target.dataset.section);
		}
	}
	
	// State to make appears the application after 100ms on loading page
	const [showContent, setShowContent] = useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => {
			setShowContent(true)
		}, 100)
	}, [])
	
	useEffect(() => {
		gsap.from(app.current, {
			opacity: 0, duration: 2
		})
	}, [showContent])

	return (
		<div className="App" id="App">

			<img src={process.env.PUBLIC_URL + "./assets/bckg.webp"} alt="Fond d'écran" className="background" />
			
			{showContent &&
				<div ref={app} >
					<Header/>

					{dimensions.width > 767 ?
						<DesktopNav handleSectionToDisplay={handleSectionToDisplay} />
						:
						<MobileNav 
						isOpen={isOpen}
						setOpen={setOpen}
							onToggle={onToggle}
							handleOnClose={handleOnClose}
							handleSectionToDisplay={handleSectionToDisplay} />
					}
					<section className="main">
						<Description className={`main__content ${sectionToDisplay === "description" ? "visible" : "hidden"}`} 
									ariaHidden={sectionToDisplay === "description" ? false : true} />
						<ForWho className={`main__content ${sectionToDisplay === "pourqui" ? "visible" : "hidden"}`} 
									ariaHidden={sectionToDisplay === "pourqui" ? false : true} />
						<Parcours className={`main__content ${sectionToDisplay === "parcours" ? "visible" : "hidden"}`} 
									ariaHidden={sectionToDisplay === "parcours" ? false : true} />
						<Slider className={`main__content ${sectionToDisplay === "galerie" ? "visible" : "hidden"}`} 
									ariaHidden={sectionToDisplay === "galerie" ? false : true} />
						<Contact className={`main__content ${sectionToDisplay === "contact" ? "visible" : "hidden"}`} 
									ariaHidden={sectionToDisplay === "contact" ? false : true} />
					</section>
				</div>
			}
		</div>
	);
}

export default App;