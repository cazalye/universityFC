import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps' 


function Map() {
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: -42.912295, lng: 147.313701}}
        >
            <Marker
            position={{ lat: -42.912295, lng: 147.313701 }}
            // onClick={props.onToggleOpen}
            key="University of Tasmania Football (Soccer) Club"
            />
            <InfoWindow position={{ lat: -42.912295, lng: 147.313701}}>
                <div>
                    <p style={{color: "red", margin:0}}>University of Tasmania Football (Soccer) Club</p>
                </div>
            </InfoWindow>
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default class UniMap extends Component{
            render() {
        return (
            <div style={{width: "100%", height: "50vh"}}>
                <WrappedMap 
                    googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                        process.env.GATSBY_GOOGLEMAPS_KEY
                    }`} 
                    loadingElement = {<div style={{height: "100%"}} />}
                    containerElement = {<div style={{height: "100%"}} />}
                    mapElement = {<div style={{height: "100%"}} />}
                />
            </div>
        )
    }
}
