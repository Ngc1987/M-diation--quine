
import React from 'react';
import "./Map.scss";

import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';


const Map:React.FC = () => {

	const location = {
		address: 'La Brissonière',
		lat: 46.61190075870131,
		lng: -1.7319245852153748
	}

    return (
      // Important! Always set the container height explicitly
      
        <div className="map">
            <h2 className="map__title">Ferme équestre de la Brissonnière, Vairé, Vendée</h2>
            <div className="map__googleComponent">
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