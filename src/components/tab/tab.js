import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './tab.less'

class Tab extends Component {
    highlightClass(path) {
        return this.props.history.location.pathname === path ? 'router-link-active' : '';
    }
    render() {
        return (
            <div className="tab">
                <Link to="/recommend" className={`tab-item ${this.highlightClass('/recommend')}`}>
                    <span className="tab-link">推荐</span>
                </Link>
                <Link to="/singer" className={`tab-item ${this.highlightClass('/singer')}`}>
                    <span className="tab-link">歌手</span>
                </Link>
                <Link to="/rank" className={`tab-item ${this.highlightClass('/rank')}`}>
                    <span className="tab-link">排行</span>
                </Link>
                <Link to="/search" className={`tab-item ${this.highlightClass('/search')}`}>
                    <span className="tab-link">搜索</span>
                </Link>
            </div>
        )
    }
}

export default withRouter(Tab)