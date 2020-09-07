import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapMarker from './mapMarker';

const mapStyles = {
    width: '100%',
    height: '100%',
  };
 
  class GoogleMap extends Component<any, any> {
    
    render() {
        return (
            <div className="map-container">
                 <Map
                google={this.props.google}
                style={mapStyles}
                initialCenter={{ lat: -42.916477, lng: 147.318527}}
                 />
                <MapMarker
                lat={-42.916477}
                lng={147.318527}
                name="The Hive"
                color="black"
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCPCNnHnB3SqNwyf7QutM2ofaxqT0aPp98'
}) (GoogleMap);
