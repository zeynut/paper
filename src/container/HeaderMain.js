import React, { Component } from 'react';
import logo1 from '../img/top_logo1.jpg';
import './HeaderMain.css';

class HeaderMain extends Component {
    render() {
        return (
            <div>
                <img src={logo1} alt='Logo'/>
                <div className="headerText">GOOD2BOX</div>
            </div>
        );
    }
}

export default HeaderMain;