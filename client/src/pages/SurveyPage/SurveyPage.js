import React, { Component } from 'react'
import Survey1 from "../../components/Survey1/Survey1";
import "./SurveyPage.scss";


export default class SurveyPage extends Component {
    state = {
        whichPage: 1
    }

    render() {
        return (
            <div>
                <Survey1 go={(path) => this.props.history.push(path)} />
            </div>
        )
    }
}