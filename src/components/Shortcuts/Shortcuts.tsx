import React from 'react';

import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import "./Shortcuts.scss";
import { StyledDiv } from 'styles/styles';

const faPropIcon = faUserCircle as IconProp;
// const md: SizeProp = ''

const Shortcuts = () => {
	return (
		<StyledDiv className="shortcuts" >
			<a href="#desc">
				<FontAwesomeIcon icon={faPropIcon} size="2x" />
			</a>
		</StyledDiv>
	)
}

export default Shortcuts;
