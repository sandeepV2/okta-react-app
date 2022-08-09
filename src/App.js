import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, Security } from '@okta/okta-react';
import Home from './Home';
import Profile from './Profile';


const oktaAuth = new OktaAuth({
  issuer: 'https://${dev-xxxxx.okta.com}/oauth2/default',
  clientId: 'XXXXXXXXXXXXXX',
  //redirect_uri: window.location.origin + '/login/callback'
  //redirect_uri: window.location.origin + '/login/implicit/logincallback'
  redirectUri: 'http://localhost:3000/login/implicit/logincallback'

});

class App extends Component {

  constructor(props) {
    super(props);
    this.restoreOriginalUri = async (_oktaAuth, originalUri) => {
      props.history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
    };
  }

  render() {
    return (
     <Security oktaAuth={oktaAuth} restoreOriginalUri={this.restoreOriginalUri}>
  	<Route path="/" exact={true} component={Home}/>
  	<Route path="/login/implicit/logincallback" component={LoginCallback}/>
  	<Route path="/profile" component={Profile}/>
     </Security>
    );
  }
}

const AppWithRouterAccess = withRouter(App);

class RouterApp extends Component {
  render() {
    return (<Router><AppWithRouterAccess/></Router>);
  }
}

export default RouterApp;

