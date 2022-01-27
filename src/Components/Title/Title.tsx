import React, { MutableRefObject } from 'react';
import "./Title.scss"

// Interface for the cmponent props
export interface Props  {
	title: string;
	subtitle?: string;
	className: string;
	innerRef?: MutableRefObject<HTMLDivElement>;
}

const Title:React.FC<Props> = ({title, subtitle, className, innerRef}) => {

  	return (
	 	<div ref={innerRef} className={`${className} title`}>
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>
  	)
};

export default Title;
