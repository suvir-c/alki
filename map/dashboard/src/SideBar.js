import React, { Component } from 'react';
import './App.css';

class SideBar extends Component {
    render() {
        return (
            <div className="sidenav">
                <p className="title">Alki</p>
                <div>
                    <span className="pull-left">DUI</span>
                    <img src={"./grapefruit smol.png"} alt="grapefruit" />
                </div>
                <div>
                    <span className="pull-left">Collisions</span>
                    <img src={"./acai smol.png"} alt="acai" />
                </div>
            </div>
        );
    }
}

export default SideBar;
