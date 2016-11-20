import React from 'react';
import Application from './Application'

class Dashboard extends React.Component {
    constructor() {
        super();
        this.renderApp = this.renderApp.bind(this);
    }

    renderApp(key) {
        const app = this.props.Apps[key];
        return (
            <Application key={key}
                App={app}
            />
        )
    }

    render() {
        return (
            <div className='dashboard'>
                {Object.keys(this.props.Apps).map(this.renderApp)}
            </div>
        )
    }
}

export default Dashboard;
