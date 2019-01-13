import React from 'react';
import {startLogin} from '../action/action_auth';

 export default ()=>{
	const login=()=>{
		startLogin();
	}

	return(
		<div>
			<button onClick={login}>Login</button>
		</div>

	)
}
