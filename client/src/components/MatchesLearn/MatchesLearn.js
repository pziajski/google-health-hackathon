import React, { Component } from 'react';
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import MatchesInfo from "../MatchesInfo/MatchesInfo";
import "./MatchesLearn.scss";

export default class MatchesLearn extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        return (
            <div>
                <TopNavBar title={this.props.match.params.id} menuIcon="back" />
                <MatchesInfo />
            </div>
        )
    }
}
