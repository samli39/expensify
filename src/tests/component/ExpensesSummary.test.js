import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixture/expenses';
import {shallow} from 'enzyme';

test('should render ExpensesSummary correctly with no expenses',()=>{

	const wrapper =shallow(<ExpensesSummary expenses={[]}/>);
	expect(wrapper).toMatchSnapshot();
})

test('should show 1 expense and total $1.95',()=>{

	const wrapper =shallow(<ExpensesSummary expenses={[expenses[0]]}/>);
	expect(wrapper).toMatchSnapshot();
})

test('should show three expenses and total $1,141.95',()=>{

	const wrapper =shallow(<ExpensesSummary expenses={expenses}/>);
	expect(wrapper).toMatchSnapshot();
})