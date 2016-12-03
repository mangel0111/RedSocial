import React from 'react';
import base from '../base';

class Login extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.authenticate = this.authenticate.bind(this);
  }


  authenticate(provider) {
    console.log(`Trying to log in with ${provider}`);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  render() {
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory</p>
        <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
        <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
        <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
      </nav>
    )
  }
}

export default Login;
