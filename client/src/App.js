import { Component } from 'react';
import axios from 'axios';

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

            </div>
        );
    }
}

export default App;
