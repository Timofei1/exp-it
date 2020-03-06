import React, { Component } from 'react';
import './style.css';

export default class Achievement extends Component {
    render() {
        return (
            <div className="achievement" onClick={this.props.click}>
                <img
                    className="achievement-icon"
                    src={this.props.img}
                    onClick={this.props.clickAchievement}
                />
            </div>
        );
    }
}



// WEBPACK FOOTER //
// ./src/js/components/Achievement.js