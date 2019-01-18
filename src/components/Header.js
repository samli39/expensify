import React from 'react';
import {connect} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';
import {startLogout} from '../action/action_auth';

export const Header =(props)=>{
	const logout=()=>{
		props.startLogout()
	}
	return(
		<header className="header">
			<div className="content-container">
				<div className="header__content">
					<Link className="header__title" to="/dashboard" >
					<h1>Expensify</h1>
				 </Link>
				<button className="button button--link" onClick={logout} >Logout</button>
				</div>
			</div>
		</header>
	)
}
const mapDispatchToProps=(dispatch)=>{
	return{
		startLogout:()=>dispatch(startLogout())
	}
}
export default connect(undefined,mapDispatchToProps)(Header);