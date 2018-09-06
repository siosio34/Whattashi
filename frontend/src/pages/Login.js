import React, { Component } from 'react';
import {default as LoginForm} from './login/Form';
import { connect } from 'react-redux';


class Login extends Component {

	render() {

		return (
			<LoginForm />
		)
	}
}

export default Login;