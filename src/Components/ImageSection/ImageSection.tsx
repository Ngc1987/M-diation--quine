import React, { MutableRefObject } from 'react';
import "./ImageSection.scss";


// Interface for the cmponent props
export interface Props  {
	className: string;
	src: string;
	alt: string;
	innerRef?: MutableRefObject<HTMLDivElement>;
	innerRef2?: MutableRefObject<HTMLImageElement>;
}

const ImageSection:React.FC<Props> = ({className, src, alt, innerRef, innerRef2}) => {
  return (
	  	<div ref={innerRef} className={`${className} image`}>
			<img ref={innerRef2} src={src} alt={alt} />
		</div>
  )
};

export default ImageSection;
