import React, { Component } from 'react';

class CreateProject extends Component {
	state = {
		title: '',
		content: '',
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
				<h6 className='blue-text'>Create Project</h6>
				<form className='white' onSubmit={this.handleSubmit}>
					<div className='input-field col s6'>
						<label htmlFor='title'>Title</label>
						<input type='text' id='title' onChange={this.handleChange}></input>
					</div>
					<div className='input-field col s6'>
						<label htmlFor='content'>Description</label>
						<textarea
							className='materialize-textarea'
							id='content'
							onChange={this.handleChange}
						></textarea>
					</div>

					<div className='input-field'>
						<button className='btn waves-effect waves-light blue darken-3'>
							Create
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateProject;
