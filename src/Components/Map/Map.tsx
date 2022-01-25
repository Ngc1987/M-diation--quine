
import GoogleMapReact from 'google-map-react';
// import google
import React from 'react';
import LocationPin from './LocationPin';

interface MapProps {
  text?: string;
  lat?: number;
  lng?: number;
}

// const AnyReactComponent = ({ text, lat, lng }) => <div>{text}</div>;

const Map = () => {

	const location = {
		address: 'La Buissonière',
		lat: 46.69424,
		lng: -1.81978
		}
  	const defaultProps = {
		center: {
		lat: 46.69424,
		lng: -1.81978
		},
		zoom: 11
	};

  return (
    // Important! Always set the container height explicitly
    
	<div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBz8hOr6hpIMeZI_9-i_rxyw4KqkTMPsi8" }}
        defaultCenter={location}
        defaultZoom={15}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  );
}

export default Map;