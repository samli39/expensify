import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixture/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

//snapshot
test('should render ExpenseForm correctly',()=>{
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm with data',()=>{
	const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
	expect(wrapper).toMatchSnapshot();
})


//form submit with error
test('should render error for invalid form submission',()=>{
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit',{
		preventDefault:()=>{}
	});

	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();

})
//form submit without error
test('should call onSubmit props for vaild from submission',()=>{
	const onSubmitSpy=jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
	wrapper.find('form').simulate('submit',{
		preventDefault:()=>{}
	});
	expect(wrapper.state("error")).toBe("");
	expect(onSubmitSpy).toHaveBeenCalledWith({
		description:expenses[0].description,
		amount:expenses[0].amount,
		note:expenses[0].note,
		createdAt:expenses[0].createdAt
	});

})

//description on chnage
test('should set description on input change',()=>{
	const wrapper = shallow(<ExpenseForm />);
	const value ="new description";
	wrapper.find('input').at(0).simulate('change',{
		target:{value}
	})
	expect(wrapper.state('description')).toBe(value);
})

//amount onchange
test("should set amount on input change",()=>{
	const wrapper = shallow(<ExpenseForm />);
	const value="23.50";
	wrapper.find('input').at(1).simulate('change',{
		target:{value}
	})
	expect(wrapper.state('amount')).toBe(value);
})

test("should not set amount on input change",()=>{
	const wrapper = shallow(<ExpenseForm />);
	const value="23.50000";
	wrapper.find('input').at(1).simulate('change',{
		target:{value}
	})
	expect(wrapper.state('amount')).toBe("");
})


//note on change
test('should set note on the input change',()=>{
	const wrapper =shallow(<ExpenseForm />);
	const value ="new note";
	wrapper.find("textarea").simulate('change',{
		target:{value}
	})

	expect(wrapper.state('note')).toBe(value);
})


//onDateChange
test('should set new createdAt',()=>{
	const now = moment();
	const wrapper =shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop("onDateChange")(now);
	expect(wrapper.state('createdAt')).toEqual(now);
})

//onFocusChange
test('should set new calenderFocus',()=>{
	const focus ={
		focused:true
	} ;
	const wrapper =shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop("onFocusChange")(focus);
	expect(wrapper.state('calenderFocused')).toBe(true);
})
