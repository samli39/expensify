import React from 'react';
import {shallow} from 'enzyme';

//for testing the imported function
// jest.mock('../../action/action_auth', ()=>({startLogin: jest.fn()
// 	.mockReturnValue(new Promise((resolve,reject)=> 
// 		resolve()
// ))}))
// import { startLogin } from '../../action/action_auth';
import {LoginPage} from '../../components/LoginPage';


test('should render LoginPage correctly',()=>{
	const wrapper = shallow(<LoginPage />);
	expect(wrapper).toMatchSnapshot();
})

//for testing imported function
// test("should handle login",()=>{

// 	const wrapper = shallow(<LoginPage />);
// 	wrapper.find("button").simulate('click');
// 	expect(startLogin).toHaveBeenCalled();
// })

test('should handle login',()=>{
	const startLogin =jest.fn();
	const wrapper = shallow(<LoginPage startLogin={startLogin} />);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
})
