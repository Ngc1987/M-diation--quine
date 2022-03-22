import React from 'react';
import "./ImageSection.scss";

// Interface for the cmponent props
export interface Props  {
	className: string;
	src: string;
	alt: string;
}

const ImageSection:React.FC<Props> = ({className, src, alt}) => {

  	return (
	  	<div className={`${className} image`}>
			<img src={src} alt={alt} />
		</div>
  	)
};

export default ImageSection;
