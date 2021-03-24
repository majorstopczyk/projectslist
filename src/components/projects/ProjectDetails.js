import React from 'react';

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className='container section details'>
			<div className='card'>
				<div className='card-content'>
					<div className='card-title'>Project title</div>
					<p>yeah right boooyaa</p>
				</div>
				<div className='card-action blue lighten-3 white-text'>
					<div>Created by Mikey</div>
					<div>24th March</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
