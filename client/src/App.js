import { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import SurveyPageTwo from "./pages/SurveryPage2/SurveyPage2";
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
                    <Route exact path='/' component={OnbordingPage1}/>
                    <Route path="/survey/2" component={SurveyPageTwo} />
                </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
