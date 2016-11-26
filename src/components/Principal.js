import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import Dashboard from './Dashboard';
import Tetris from './Apps/Tetris'
import Apps from '../app-samples';

class Principal extends React.Component {
    constructor() {
        super();
        this.renderPrincipalPanel = this.renderPrincipalPanel.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
        this.renderBodyContainer = this.renderBodyContainer.bind(this);
        this.getApps = this.getApps.bind(this);
        this.switchView = this.switchView.bind(this);
        this.getValidName = this.getValidName.bind(this);
    }

    renderTitle() {
        const title = this.getValidName();
        return (
            <div className='AplicacionesTitle'>
                <h3><Glyphicon glyph='list' />&nbsp; {title}!</h3>
            </div>
        )
    }

    getValidName() {
        if (this.props.view === "" || this.props.view === undefined) {
            return "Applications"
        }
        return this.props.view;
    }

    switchView() {
        const view = this.props.view;
        switch (view) {
            case "Tetris":
                return <Tetris />;
            default:
                const apps = this.getApps();
                return (
                    <Dashboard
                        Apps={apps}
                    />
                );
        }
    }

    getApps() {
        return Apps;
    }

    renderBodyContainer() {

        return (
            <div className='bodyContainer'>
                {this.switchView()}
            </div>
        )
    }

    renderPrincipalPanel() {
        return (
            <div className='principalPanel'>
                {this.renderTitle()}
                {this.renderBodyContainer()}
            </div>
        )
    }

    render() {
        return this.renderPrincipalPanel();
    }
}

export default Principal;
