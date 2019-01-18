import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../action/action_auth';

 export const LoginPage= (props)=>{
	const login=()=>{
		props.startLogin();
	}

	return(
		<div className="box-layout">
			<div className="box-layout__box">
				<h1 className="box-layout__title">Expensify App</h1>
				<p>It's time to get your expenses under control</p>
				<button onClick={login} className="button">Login with Google</button>
			</div>
		</div>

	)
}

const mapDispatchToProps=(dispatch)=>{

	return{
		startLogin:()=>dispatch(startLogin())
	}
}

export default connect(undefined,mapDispatchToProps)(LoginPage);
