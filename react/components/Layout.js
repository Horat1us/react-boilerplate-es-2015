import React, {Component} from 'react';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(window.config);
    }

    render() {
        return <div>
            <h1>React Boilerplate</h1>
            <h2>Connected to {window.config.baseURL}</h2>
            <p>Online: <b>{window.config.online ? 'True' : 'False'}</b></p>
            <p>Debug: <b>{window.config.debug ? 'True' : 'False'}</b></p>
            <h3>Config</h3>
            <pre>{JSON.stringify(window.config)}</pre>
        </div>;
    }
}

export default Layout; 