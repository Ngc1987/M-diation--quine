
import React from 'react';
import "./Map.scss";

import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';


export interface MapProps  {
	ariaHidden: boolean;
}

const Map:React.FC<MapProps> = ({ariaHidden}) => {

	const location = {
		address: 'La Brissonière',
		lat: 46.61190075870131,
		lng: -1.7319245852153748
	}

    return (
      // Important! Always set the container height explicitly
      
        <div className="map" tabIndex={-1}>
            <h2 className="map__title"
			tabIndex={ariaHidden ? -1 : 0}>Ferme équestre de la Brissonnière, Vairé, Vendée</h2>
            <div className="map__googleComponent">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBz8hOr6hpIMeZI_9-i_rxyw4KqkTMPsi8" }}
              defaultCenter={location}
              defaultZoom={15}
			  tabIndex={-1}
              // style={{height: '400px', width: '400px'}}
              
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
				ariaHidden={ariaHidden}
              />
            </GoogleMapReact>
          </div>
        </div>
    );
}

export default Map;