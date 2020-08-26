import React, { Component } from 'react';
import './m-header.less'

export default class MHeader extends Component {
    render() { 
        return ( 
            <div className="m-header">
                <div className="icon"></div>
                <h1 className="text">Sakura Music</h1>
            </div>
         );
    }
}