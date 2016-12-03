import React from 'react';
import Header from './Header';
import Principal from './Principal';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import base from '../base';
import Apps from '../app-samples';

class App extends React.Component {
  constructor() {
    super();
    this.renderHome = this.renderHome.bind(this);

    this.state = {
      apps: Apps
    }
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.syncState(`MercurialSocial/Apps`, {
      context: this,
      state: 'apps'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  renderHome() {
    const profile = {
      Name: 'Miguel Angel'
    };

    return (
      <div className='base'>
        <MuiThemeProvider>
          <Header
            isAuth={true}
            Profile={profile} />
        </MuiThemeProvider>
        <Principal
          view={this.props.params.appId}
          apps={this.state.apps}
          />
        <Footer />
      </div>
    );
  }

  render() {
    return (
      <div className="homePage">
        {this.renderHome()}
      </div>
    )
  }
}

export default App;
