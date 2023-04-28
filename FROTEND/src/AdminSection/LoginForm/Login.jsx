import React from 'react';
import './Login.css'
import { TextField, Button } from '@mui/material'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      adminNameInputText: '',
      passwordInputText: ''
    }
  }


  handleAdminNameInputChange = (e) => {
    this.setState({ adminNameInputText: e.target.value })
  }

  handlePasswordInputChange = (e) => {
    this.setState({ passwordInputText: e.target.value })
  }

  handleLoginData = () => {
    const { adminNameInputText, passwordInputText } = this.state;
    const loginData = {
      adminName: adminNameInputText,
      password: passwordInputText
    }

    console.log(loginData)

  }

  render() {
    const { adminNameInputText, passwordInputText } = this.state;

    let emptyFieldError = (adminNameInputText.length === 0 || passwordInputText.length === 0)

    return (<>

      <div className="loginFormBody">
        <div className="loginFormArea">
          <div className="loginFormElement">
            <h1>Login</h1>
          </div>
          <div className="loginFormElement">

            <TextField className="formElement" variant="standard" label="Username" type="text"
              size="medium"
              onChange={(e) => {
                this.handleAdminNameInputChange(e)
              }} />

          </div>
          <div className="loginFormElement">

            <TextField className="formElement" variant="standard" label="Password" type="password"
              size="normal"
              onChange={(e) => {
                this.handlePasswordInputChange(e)
              }} />

          </div>
          <div className="loginFormElement">
            <Button variant="contained" size="medium" id='login-button'
              disabled={emptyFieldError}
              sx={{ backgroundColor: emptyFieldError ? '#49386b8a!important' : '#49386b !important', cursor: emptyFieldError ? 'not-allowed' : 'pointer' }}
              onClick={() => alert('Claimed')}>
              Login
            </Button>
          </div>
        </div>
      </div>

    </>)
  }
}

export default Login;