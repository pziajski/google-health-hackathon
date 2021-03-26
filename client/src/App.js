import { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import SurveyPageTwo from "./pages/SurveryPage2/SurveyPage2";

class App extends Component {
    state = {
        insurance: null,
        hospitals: null,
        user: null
    }

    componentDidMount() {
        // axios.get('http://localhost:8080/insurance')
        //     .them(res => {
        //         this.setState({ insurance: res.data });
        //     });
        // axios.get('http://localhost:8080/hospitals')
        //     .them(res => {
        //         this.setState({ hospitalsance: res.data });
        //     });
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/survey/2" component={SurveyPageTwo} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
