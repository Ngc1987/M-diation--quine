import { Icon } from '@iconify/react';
import React from 'react';
import "./Map.scss"	;


interface MapProps {
  text?: string;
  lat?: number;
  lng?: number;
}



const LocationPin:React.FC<MapProps> = ({ text, lat, lng }) => (
    <div className="pin">
        <Icon icon="clarity:map-marker-solid"  className="pin-icon" />
          <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin;