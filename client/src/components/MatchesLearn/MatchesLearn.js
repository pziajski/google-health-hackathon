import React, { Component } from 'react';
import TopNavBar from "../../components/TopNavBar/TopNavBar";

export default class MatchesLearn extends Component {
    constructor(props) {
        console.log("yes")
        super();
        this.props = props;
    }

    render() {
        console.log(this.props)
        return (
            <div className="matches-learn">
                <TopNavBar title={this.props.match.params.id} menuIcon="back" />
            </div>
        )
    }
}
