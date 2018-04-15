import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import SideBar from "./SideBar";
import "./App.css";
import collision from './data/collision_data.json';
import grapefruit from './grapefruit smol.png';

export class MapContainer extends Component {

    constructor(props) {
        super(props);
        let image = grapefruit;
        let collisionsIndex = 0;
        let collisions = collision.filter((item) => {
            return collisionsIndex < 10 && item.lat !== 0 && item.long !== 0;
        }).map((item) => {
            collisionsIndex++;
            return (
                <Marker
                    icon = {image}
                    key = {collisionsIndex}
                    position={{lat: parseFloat(item.long), lng: parseFloat(item.lat)}}
                />
            );
        });

        this.state = {
            collisions: collisions
        }
    }

    onMarkerClick = (props, marker, e) => {

    }

    render() {
        return (
            <div className='sideBySide'>
                <SideBar />
                <div className="map">
                    <Map google={this.props.google}
                        initialCenter={{
                             lat:34.052235,
                             lng: -118.24683
                         }}
                         style={{
                             width: '89%',
                             height: '97%'
                         }}
                         zoom={12}>
                        {this.state.collisions}
                    </Map>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDt-ZVFjsi2t4fs9SGQOi6y33c2mGHFp_s",
    v:"3"
}) (MapContainer)
