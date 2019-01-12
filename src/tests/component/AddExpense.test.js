import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixture/expenses';

let startAddExpense,history,wrapper;
beforeEach(()=>{
	startAddExpense =jest.fn();
	history={push:jest.fn()};
	wrapper= shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
})

test('should render AddExpensePage correctly',()=>{
	expect(wrapper).toMatchSnapshot();

})


test('should handle the onSubmit',()=>{
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(history.push).toHaveBeenCalledWith("/");
	expect(startAddExpense).toHaveBeenCalledWith(expenses[0]);
})