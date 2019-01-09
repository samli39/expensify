import React from 'react';
import {ExpenseList} from '../../components/ExpenseList';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses';

test('should render ExpenseList with given expenses',()=>{
	const wrapper = shallow(<ExpenseList expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList without given expenses',()=>{
	const wrapper = shallow(<ExpenseList expenses={[]} />);
	expect(wrapper).toMatchSnapshot();
})