import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';
let wrapper,history,startEditExpense,startRemoveExpense;

beforeEach(()=>{
	history={push:jest.fn()};
	startEditExpense=jest.fn();
	startRemoveExpense=jest.fn();
	wrapper = shallow(<EditExpensePage 
						expense={expenses[0]} 
						history={history} 
						startEditExpense={startEditExpense} 
						startRemoveExpense={startRemoveExpense} 
						/>);

})


test('should render EditExpensePage correctly',()=>{
	expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit',()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

	expect(history.push).toHaveBeenCalledWith('/dashboard');
	expect(startEditExpense).toHaveBeenCalledWith(expenses[0].id,expenses[0]);
})

test('should handle remove',()=>{
	wrapper.find('button').simulate('click');

	expect(startRemoveExpense).toHaveBeenCalledWith(expenses[0].id);
	expect(history.push).toHaveBeenCalledWith('/dashboard');
})