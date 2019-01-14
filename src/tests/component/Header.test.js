import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';

//for testing imported function
// jest.mock('../../action/action_auth', ()=>({startLogout: jest.fn()
// 	.mockReturnValue(new Promise((resolve,reject)=> 
// 		resolve()
// ))}))
// import { startLogout } from '../../action/action_auth';


test('should render Header correctly',()=>{
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();

})

//for testing imported function
// test('should handle logout',()=>{
// 	const wrapper = shallow(<Header />);
// 	wrapper.find("button").simulate('click');
// 	expect(startLogout).toHaveBeenCalled();	
// })

test('should handle logout',()=>{
	const startLogout=jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout}/>);
	wrapper.find('button').simulate("click");
	expect(startLogout).toHaveBeenCalled();
})