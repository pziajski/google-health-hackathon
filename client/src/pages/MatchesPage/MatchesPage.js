import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import MatchesCoverage from "../../components/MatchesCoverage/MatchesCoverage";
import "./MatchesPage.scss";
import SurveyPage2 from '../SurveyPage2/SurveyPage2';

export default class MatchesPage extends Component {
    // state = {
    //     insuranceList: []
    // }

    // componentDidMount() {
    //     axios
    //         .get("htp://localhost:8080/insurance")
    //         .then(response => {
    //             this.setState({
    //                 insuranceList: response.data
    //             })
    //         })
    // }

    render() {
        // if (!!this.state.insuranceList) { return <>Loading...</>}
        return (
            <div className="matches-page">
                <BrowserRouter>
                    <Switch>
                        <Route to="/matches/coverage" exact component={MatchesCoverage}/>
                        <Route to="/matches/learn" exact component={SurveyPage2} />
                    </Switch>
                    <BottomMenu />
                </BrowserRouter>
            </div>
        )
    }
}
