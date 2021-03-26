import React, { Component } from 'react';
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default class MatchesLearn extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        console.log(this.props.match.params)
        return (
            <div className="matches-learn">
                <TopNavBar title={this.props.match.params.id} menuIcon="back" />
            </div>
        )
    }
}
