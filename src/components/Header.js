import React from 'react';
import {NavLink} from 'react-router-dom';

const Header =()=>(
	<header>
		<NavLink to="/" activeClassName="is-actives" exact>Home </NavLink>
		<br />
		<NavLink to="/create" activeClassName="is-actives">create </NavLink>
		<br />
		<NavLink to="/help" activeClassName="is-actives">Help</NavLink>
	</header>
)

export default Header;