import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import SocialButton from '../shared/SocialButton';

const Routes = (props) => {
  const alertarBitch = () => alert("yay")
  return (
    <Switch>
      <Route exact path="/" render={() => <SocialButton
        provider="facebook"
        appId="YOUR_APP_ID"
        onLoginSuccess={alertarBitch}
        onLoginFailure={alertarBitch}
      >
        Login with Facebook
      </SocialButton>} />
      <Route exact path="/signup" render={() => <Signup />} />
      <Route exact path="/login" render={() => <Login />} />
    </Switch>
  )
}

export default Routes