import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';
let wrapper,history,startEditExpense,startRemoveExpense;

beforeEach(()=>{
	history={push:jest.fn()};
	startEditExpense=jest.fn().mockReturnValue(new Promise((resolve,reject)=> 
		resolve()
	));;
	startRemoveExpense=jest.fn().mockReturnValue(new Promise((resolve,reject)=> 
		resolve()
	));;
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

test('should handle onSubmit',async()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	await startEditExpense;
	expect(history.push).toHaveBeenCalledWith('/dashboard');
	expect(startEditExpense).toHaveBeenCalledWith(expenses[0].id,expenses[0]);
})

test('should handle remove',async()=>{
	wrapper.find('button').simulate('click');
	await startRemoveExpense;
	expect(startRemoveExpense).toHaveBeenCalledWith(expenses[0].id);
	expect(history.push).toHaveBeenCalledWith('/dashboard');
})