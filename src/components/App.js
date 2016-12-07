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
      apps: Apps,
      uid: localStorage.getItem("uid"),
      owner: localStorage.getItem("owner")
    }
  }

  componentWillMount() {
    // this runs right before the <App> is rendered
    this.ref = base.
      fetch('MercurialSocial/Apps', {
        context: this,
        asJSON: true,
        then(data) {
          this.setState({
            apps: data
          });
        }
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
    // check if they are no logged in at all
    if (!this.state.uid || (this.state.uid !== this.state.owner)) {
      this.context.router.transitionTo(`/login`);
      return null;
    }

    return (
      <div className="homePage">
        {this.renderHome()}
      </div>
    )
  }
}


App.contextTypes = {
  router: React.PropTypes.object
}
export default App;
