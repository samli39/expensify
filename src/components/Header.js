import React from 'react';
import {connect} from 'react-redux';
import {NavLink,withRouter} from 'react-router-dom';
import {startLogout} from '../action/action_auth';

export const Header =(props)=>{
	const logout=()=>{
		props.startLogout()
	}
	return(
		<header>
			<h1>Expensify</h1>
			<NavLink to="/dashboard" activeClassName="is-actives" >Home </NavLink>
			<br />
			<NavLink to="/create" activeClassName="is-actives">create </NavLink>
			<br />
			<button onClick={logout}>Logout</button>
		</header>
	)
}
const mapDispatchToProps=(dispatch)=>{
	return{
		startLogout:()=>dispatch(startLogout())
	}
}
export default connect(undefined,mapDispatchToProps)(Header);