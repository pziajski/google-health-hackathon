import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import MatchesCoverage from "../../components/MatchesCoverage/MatchesCoverage";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import "./MatchesPage.scss";


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
                <>
                    <TopNavBar title="Matches" menuIcon="back" />
                    <BrowserRouter>
                        <Switch>
                            <Route to="/matches/coverage" render={renderProps =>
                                <MatchesCoverage {...renderProps} />
                            } />
                        </Switch>
                        <BottomMenu />
                    </BrowserRouter>
                </>
            </div>
        )
    }
}
