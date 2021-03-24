import React, { Component } from 'react';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className='container'>
				<h6 className='blue-text'>Sign In</h6>
				<form className='white' onSubmit={this.handleSubmit}>
					<div className='input-field col s6'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' onChange={this.handleChange}></input>
					</div>
					<div className='input-field col s6'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							onChange={this.handleChange}
						></input>
					</div>

					<div className='input-field'>
						<button className='btn waves-effect waves-light blue darken-3'>
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
