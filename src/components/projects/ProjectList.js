import React from 'react';
import ProjectSummary from './ProjectSummary';

export const ProjectList = ({ projects }) => {
	return (
		<div className='section'>
			{projects && projects.map(project => {
				return (
					<ProjectSummary project={project} key={project.id}/>
				)
			})}
		</div>
	);
};

export default ProjectList;
