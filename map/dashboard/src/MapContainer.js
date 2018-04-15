import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import SideBar from "./SideBar";
import "./App.css";
import collision from './data/collision_data.json';
import speedingData from './data/speeding.json';
import grapefruit from './grapefruit smol.png';
import acai from './acai smol.png';
import green from './green_smol.png';

export class MapContainer extends Component {

    constructor(props) {
        super(props);

        let image = grapefruit;
        let collisionsIndex = 0;
        let collisions = collision.filter((item) => {
            return item.lat !== 0 && item.long !== 0 && item.alcohol !== "A";
        }).map((item) => {
            collisionsIndex++;
            return (
                <Marker
                    onClick = {this.onMarkerClick}
                    data = {item}
                    icon = {image}
                    key = {collisionsIndex}
                    position={{lat: parseFloat(item.long), lng: parseFloat(item.lat)}}
                />
            );
        });

        image = acai;
        let duiIndex = 0;
        let duis = collision.filter((item) => {
            return item.lat !== 0 && item.long !== 0 && item.alcohol !== "-";
        }).map((item => {
            duiIndex++;
            return (
                <Marker
                    onClick = {this.onMarkerClick}
                    data = {item}
                    icon = {image}
                    key = {duiIndex}
                    position={{lat: parseFloat(item.long), lng: parseFloat(item.lat)}}
                />
            )
        }));

        image = green;
        let speedIndex = 0;
        let speeding = speedingData.map((item) => {
            speedIndex++;
            return (
                <Marker
                    onClick = {this.onMarkerClick}
                    data = {item}
                    icon = {image}
                    key = {speedIndex}
                    position={{lat: parseFloat(item.long), lng: parseFloat(item.lat)}}
                />
            )
        });

        this.state = {
            collisions: collisions,
            duis: duis,
            speeding: speeding,
            hideCollisions: false,
            hideDUIs: false,
            hideSpeed: false,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    onDUIToggle = () => {
        let curDUIs = this.state.hideDUIs;
        this.setState({
            hideDUIs: !curDUIs
        });
    };

    onCollisionToggle = () => {
        let curCollisions = this.state.hideCollisions;
        this.setState({
            hideCollisions: !curCollisions
        });
    };

    onSpeedingToggle = () => {
        let curSpeed = this.state.hideSpeed;
        this.setState({
            hideSpeed: !curSpeed
        });
    };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    };

    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        let collisions = null;
        if (!this.state.hideCollisions) {
            collisions = this.state.collisions;
        }

        let duis = null;
        if (!this.state.hideDUIs) {
            duis = this.state.duis;
        }

        let speeding = null;
        if (!this.state.hideSpeeding) {
            speeding = this.state.speeding;
        }

        let selectedPlaceInfo = [];
        for (var key in this.state.activeMarker.data) {
            selectedPlaceInfo.push("" + key +": " + this.state.activeMarker.data[key]);
        }

        let renderSelectedPlace = selectedPlaceInfo.map((item) => {
            return (
                <p>{item}</p>
            )
        });

        return (
            <div className='sideBySide'>
                <SideBar onDUIToggle = {this.onDUIToggle.bind(this)} onCollisionToggle = {this.onCollisionToggle.bind(this)} />
                <div className="map">
                    <Map google={this.props.google}
                         onClick={this.onMapClicked}
                        initialCenter={{
                             lat:34.052235,
                             lng: -118.24683
                         }}
                         style={{
                             width: '89%',
                             height: '97%'
                         }}
                         zoom={12}>
                        {collisions}
                        {duis}
                        {speeding}
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <div>
                                {renderSelectedPlace}
                            </div>
                        </InfoWindow>
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
