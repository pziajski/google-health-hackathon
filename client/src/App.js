import { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import SurveyPage from "./pages/SurveryPage/SurveyPage";

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
                    <Route path="/survey" component={SurveyPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
