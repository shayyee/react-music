import React, { Component } from 'react';

export default class Singer extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                歌手页面
            </div>
        )
    }
}