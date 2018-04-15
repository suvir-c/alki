import React, { Component } from 'react';
import './App.css';
import grapefruit from './grapefruit.png';
import acai from './blu.png';

class SideBar extends Component {
    render() {
        return (
            <div className="sidenav">
                <p className="title">Alki</p>
                <div>
                    <img src={grapefruit} alt="grapefruit" className="pull-left"/>
                    <span className="pull-right" style={{'font-size': '22px'}}> DUI</span>
                </div>
                <div>
                    <img src={acai} alt="acai" className="pull-left"/>
                    <span className="pull-right" style={{'font-size': '22px'}}> Collisions</span>
                </div>
            </div>
        );
    }
}

export default SideBar;
