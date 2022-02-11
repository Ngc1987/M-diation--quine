import { Divide as Hamburger }  from "hamburger-react";
import React from "react";

interface Props  {
	toggled: boolean;
	toggle: () => void;
	onToggle: (toggled: boolean) => void;
}

const HamburgerButton:React.FC<Props> = ({toggled, toggle, onToggle}) => {

	return (

		<Hamburger rounded 
				toggled={toggled} 
				toggle={toggle} 
				onToggle={onToggle}
				size={36} 
				duration={0.5} 
				color="#665249" 
				label="Show menu"/>

	)
}

export default HamburgerButton