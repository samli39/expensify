import {login,logout} from "../../action/action_auth";

test('should return correctly value in login',()=>{
	const result = login(1);
	expect(result).toEqual({
		type:'LOGIN',
		uid:1
	})
})

test('should return correctly value in logout',()=>{
	const result = logout();
	expect(result).toEqual({
		type:'LOGOUT'
	})
})