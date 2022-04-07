import { Icon } from '@iconify/react';
import React from 'react';
import "./Map.scss"	;


interface LocationPinProps {
	text?: string;
	lat?: number;
	lng?: number;
	ariaHidden: boolean;
}



const LocationPin:React.FC<LocationPinProps> = ({ text, lat, lng, ariaHidden }) => (
    <div className="pin" tabIndex={ariaHidden ? -1 : 0} aria-hidden={ariaHidden ? true : false}>
        <Icon icon="clarity:map-marker-solid"  
				className="pin-icon"
				tabIndex={ariaHidden ? -1 : 0}
		 />
          <p className="pin-text" tabIndex={ariaHidden ? -1 : 0}>{text}</p>
    </div>
)

export default LocationPin;