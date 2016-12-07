import React from 'react';
import base from '../base';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.authenticate = this.authenticate.bind(this);
        this.authHandler = this.authHandler.bind(this);

        this.state = {
            uid: null,
            owner: null
        }
    }


    authenticate(provider) {
        console.log(`Trying to log in with ${provider}`);
        base.authWithOAuthPopup(provider, this.authHandler);
    }

    componentDidMount() {
        base.onAuth((user) => {
            if (user) {
                this.authHandler(null, { user });
            }
        });
    }

    authHandler(err, authData) {
        console.log(authData);
        if (err) {
            console.error(err);
            return;
        }

        // grab the store info
        const storeRef = base.database().ref(this.props.storeId);

        // query the firebase once for the store data
        storeRef.once('value', (snapshot) => {
            const data = snapshot.val() || {};

            // claim it as our own if there is no owner already
            if (!data.owner) {
                storeRef.set({
                    owner: authData.user.uid
                });
            }

            localStorage.setItem("uid", authData.user.uid);
            localStorage.setItem("owner", data.owner || authData.user.uid);
            this.setState({
                uid: authData.user.uid,
                owner: data.owner || authData.user.uid
            });
        });

    }

    render() {
        return (
            <nav className="login">
                <h2>Mercurial</h2>
                <p>Sign in to use your social network!</p>
                <div>
                    <button className="github" onClick={() => this.authenticate('github')}>Log In with Github</button>
                    <button className="facebook" onClick={() => this.authenticate('facebook')} >Log In with Facebook</button>
                    <button className="twitter" onClick={() => this.authenticate('twitter')} >Log In with Twitter</button>
                    <button className="google" onClick={() => this.authenticate('google')} >Log In with Google</button>
                </div>
                <p className='footnote'>All rights reserved (R)</p>
            </nav>
        )
    }
}

export default Login;
