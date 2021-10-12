import { GoogleLogin } from 'react-google-login';
import AuthService from '../service/auth.service'
const authService = new AuthService()

const login = (res) => authService.google(res)
  .then(res => console.log(res))
  .catch(err => console.log(err))

const onError = (err) => console.log(err)

const GoogleButton = () => <GoogleLogin
  clientId={process.env.REACT_APP_GOOGLE_LOGIN}
  buttonText="Login"
  onSuccess={login}
  onFailure={onError}
  isSignedIn={true}
  cookiePolicy={'single_host_origin'}
/>

export default GoogleButton