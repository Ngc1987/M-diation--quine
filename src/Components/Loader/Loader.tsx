import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHorse } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import "./Loader.scss"

const faPropIcon = faHorse as IconProp;

const Loader = () => {
	return (
		<div className="loader" >
			🐎
		</div>
	)
}

export default Loader