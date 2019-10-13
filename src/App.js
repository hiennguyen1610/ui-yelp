import React, {Component} from 'react';
import Addresses from './components/addresses';

class App extends Component {
    render() {
        return (
            <Addresses addresses={this.state.addresses} />
        )
    }

    state = {
        addresses: []
    };

    componentDidMount() {
        fetch('http://localhost:8080/search')
            .then(res => res.json())
            .then((data) => {
                this.setState({ addresses: data })
            })
            .catch(console.log)
    }
}

export default App;
