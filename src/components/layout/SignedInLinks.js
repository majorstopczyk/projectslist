import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const SignedInLinks = () => {
	return (
		<ul className='right'>
			<li>
				<NavLink to='/'>New Project</NavLink>
			</li>
			<li>
				<NavLink to='/'>Log Out</NavLink>
			</li>
			<li>
				<NavLink to='/' className='btn blue darken-2'>
					MW<i class='material-icons right'>account_circle</i>
				</NavLink>
			</li>
		</ul>
	);
};

export default SignedInLinks;