import React from 'react';
import "./Title.scss";

// Interface for the cmponent props
export interface Props  {
	title: string;
	subtitle?: string;
	className: string;
	ariaHidden: boolean;
}

const Title:React.FC<Props> = ({title, subtitle, className, ariaHidden}) => {

  	return (
	 	<div className={`${className} title`}>
			<h2 tabIndex={ariaHidden ? -1 : 0} >{title}</h2>
			<h3 tabIndex={!subtitle ? -1 : ariaHidden ? -1 : 0} >{subtitle}</h3>
		</div>
  	)
};

export default Title;
