import React from 'react';
import Header from './Header';
import Principal from './Principal';
import Footer from './Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  constructor() {
    super();
    this.renderHome = this.renderHome.bind(this);
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
