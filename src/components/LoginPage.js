import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../action/action_auth';

 export const LoginPage= (props)=>{
	const login=()=>{
		props.startLogin();
	}

	return(
		<div>
			<button onClick={login}>Login</button>
		</div>

	)
}

const mapDispatchToProps=(dispatch)=>{

	return{
		startLogin:()=>dispatch(startLogin())
	}
}

export default connect(undefined,mapDispatchToProps)(LoginPage);
