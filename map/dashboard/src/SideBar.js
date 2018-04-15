import React, { Component } from 'react';
import './App.css';
import grapefruit from './grapefruit.png';
import acai from './blu.png';

class SideBar extends Component {
    render() {
        return (
            <div className="sidenav">
                <p className="title">Alki</p>
                <div onClick={this.props.onDUIToggle} className="dui" style={{'font-size': '22px'}}>
                    <img src={acai} alt="acai" className="pull-left"/>
                    <span className="pull-right" > DUI</span>
                </div>
                <div onClick={this.props.onCollisionToggle} className="collisions" style={{'font-size': '22px'}}>
                    <img src={grapefruit} alt="grapefruit" className="pull-left"/>
                    <span className="pull-right"> Collisions</span>
                </div>
            </div>
        );
    }
}

export default SideBar;
