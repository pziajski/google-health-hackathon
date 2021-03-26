import { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import SurveyPage2 from "./pages/SurveyPage2/SurveyPage2";
import SurveyPage3 from "./pages/SurveyPage3/SurveyPage3";
import OnbordingPage1 from './pages/Onbording/OnboardingPage1';
import './App.scss';

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
            <div className="App">
                <BrowserRouter>
                <Switch>
                    <Route path='/survey/1' render={(renderProps) => <OnbordingPage1 {...renderProps} />}/>
                    <Route path="/survey/2" render={(renderProps) => <SurveyPage2 {...renderProps} />} />
                    <Route path="/survey/3" render={(renderProps) => <SurveyPage3 {...renderProps} />} />
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
