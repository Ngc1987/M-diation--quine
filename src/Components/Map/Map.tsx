
import GoogleMapReact from 'google-map-react';
// import google
import React from 'react';
import LocationPin from './LocationPin';
import "./Map.scss"

interface MapProps {
  text?: string;
  lat?: number;
  lng?: number;
}

// const AnyReactComponent = ({ text, <l></l>at, lng }) => <div>{text}</div>;

const Map = () => {

	const location = {
		address: 'La Brissonière',
		lat: 46.61190075870131,
		lng: -1.7319245852153748
		}
  	const defaultProps = {
		center: {
		lat: 46.61190075870131,
		lng: -1.7319245852153748
		},
		zoom: 10
	};

    return (
      // Important! Always set the container height explicitly
      
        <div className="map">
            <h2 className="map-h2">Ferme équestre de la Brissonnière</h2>
            <div className="google-map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBz8hOr6hpIMeZI_9-i_rxyw4KqkTMPsi8" }}
              defaultCenter={location}
              defaultZoom={15}
              // style={{height: '400px', width: '400px'}}
              
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