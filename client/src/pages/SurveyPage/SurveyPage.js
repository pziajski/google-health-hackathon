import React, { Component } from 'react'
import Survey1 from "../../components/Survey1/Survey1";
import "./SurveyPage.scss";
import TopNavBar from "../../components/TopNavBar/TopNavBar";


export default class SurveyPage extends Component {
    state = {
        whichPage: 1
    }

    render() {
        return (
            <div className="survey-page">
                <TopNavBar title="Insurance Analysis" menuIcon="back" />
                <Survey1 go={(path) => this.props.history.push(path)} />
            </div>
        )
    }
}