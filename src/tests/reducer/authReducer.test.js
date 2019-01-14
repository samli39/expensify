import authReducer from '../../reducer/authReducer';

test('should set up default state',()=>{
	const result = authReducer(undefined,{type:"@@INIT"});
	expect(result).toEqual({});
})

test("should set up uid",()=>{
	const result = authReducer(undefined,{type:"LOGIN",uid:1});
	expect(result.uid).toBe(1);
})

test("should handle log out and delete uid",()=>{
	const result = authReducer({uid:1},{type:'LOGOUT'});
	expect(result).toEqual({});
})