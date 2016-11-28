import React from 'react';

class Application extends React.Component {
    constructor() {
        super();
        this.renderAppLayout = this.renderAppLayout.bind(this);
        this.goToApp = this.goToApp.bind(this);
    }

    renderAppLayout(app) {
        var classApp = "app " + app.className;
        return (
            <div className={classApp} onClick={() => this.goToApp(app.code)}>
                <div className='app-tittle'>{app.name}</div>
                <img src={app.icon} alt={app.name} className="app-icon"/>
            </div>
        )
    }

    goToApp(code) {
        this.context.router.transitionTo(`/app/${code}`);
    }

    render() {
        return (
            this.renderAppLayout(this.props.App)
        )
    }
}

Application.contextTypes = {
  router: React.PropTypes.object
}

export default Application;
