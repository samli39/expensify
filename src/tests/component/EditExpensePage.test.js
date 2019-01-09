import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';
let wrapper,history,editExpense,removeExpense;

beforeEach(()=>{
	history={push:jest.fn()};
	editExpense=jest.fn();
	removeExpense=jest.fn();
	wrapper = shallow(<EditExpensePage 
						expense={expenses[0]} 
						history={history} 
						editExpense={editExpense} 
						removeExpense={removeExpense} 
						/>);

})


test('should render EditExpensePage correctly',()=>{
	expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit',()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

	expect(history.push).toHaveBeenCalledWith('/');
	expect(editExpense).toHaveBeenCalledWith(expenses[0].id,expenses[0]);
})

test('should handle remove',()=>{
	wrapper.find('button').simulate('click');

	expect(removeExpense).toHaveBeenCalledWith(expenses[0].id);
	expect(history.push).toHaveBeenCalledWith('/');
})