import React from 'react';
import Avatar from 'material-ui/Avatar';

const style = { margin: 5 };

class Header extends React.Component {
    constructor() {
        super();
        this.renderAuthHeader = this.renderAuthHeader.bind(this);
        this.renderNoAuthHeader = this.renderNoAuthHeader.bind(this);
        this.renderLogo = this.renderLogo.bind(this);
    }

    renderLogo() {
        return (
            <div className="logo">
                <h2><span className="iconLogo"></span>Mercurial</h2>
            </div>
        );
    };

    renderAuthHeader() {
        return (
            <header className="header">
                <div className="headerContainer">
                    {this.renderLogo()}
                    <div className="searchBox">

                    </div>
                    <div className="manage">
                        <h3> <span>
                            <Avatar
                                src="/images/Gothfather.jpe"
                                size={45}
                                style={style}
                                />
                        </span>
                            {this.props.Profile.Name}
                        </h3>
                    </div>
                </div>
            </header>
        );
    }

    renderNoAuthHeader() {
        return (
            <nav className="header">
                <div className="headerContainer">
                    {this.renderLogo()}
                    <div className="searchBox">
                        <h2></h2>
                    </div>
                    <div className="manage">
                        <h2>Login</h2>
                    </div>
                </div>
            </nav>
        );
    }

    render() {
        var IsAuth = this.props.isAuth || false;
        if (IsAuth) {
            return (this.renderAuthHeader());
        } else {
            return this.renderNoAuthHeader();
        }
    }
}

Header.propTypes = {
    isAuth: React.PropTypes.bool.isRequired,
    Profile: React.PropTypes.object.isRequired
};


export default Header;
