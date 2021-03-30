import React from 'react';

export const ProjectSummary = ({ project }) => {
	return (
		<div className='section'>
			<div className='card '>
				<div className='card-content white-text blue lighten-1'>
					<span className='card-title'>{project.title}</span>
					<p>{project.content}</p>
					<p className='white-text'>24th March</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSummary;
