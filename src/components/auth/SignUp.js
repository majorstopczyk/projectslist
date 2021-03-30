import React, { Component } from 'react';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
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
				<form className='white' onSubmit={this.handleSubmit}>
				<h6 className='blue-text'>Sign Up</h6>
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
					<div className='input-field col s6'>
						<label htmlFor='firtsName'>First Name</label>
						<input
							type='text'
							id='firstName'
							onChange={this.handleChange}
						></input>
					</div>
					<div className='input-field col s6'>
						<label htmlFor='lastName'>Last Name</label>
						<input
							type='text'
							id='LastName'
							onChange={this.handleChange}
						></input>
					</div>
					<div className='input-field'>
						<button className='btn waves-effect waves-light blue darken-3'>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
