import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import {filters,altFilters} from '../fixture/filters';
import moment from 'moment';

let setFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate,
	wrapper;

beforeEach(()=>{
	setFilter=jest.fn();
	sortByDate=jest.fn();
	sortByAmount=jest.fn();
	setStartDate=jest.fn();
	setEndDate=jest.fn();

	wrapper = shallow(<ExpenseListFilter
						filters={filters}
						setFilter={setFilter}
						sortByDate={sortByDate} 
						sortByAmount={sortByAmount}
						setStartDate={setStartDate}
						setEndDate={setEndDate}
						/>)
})



test('should render ExpenseListFilter correctly',()=>{
	expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilter with alterFilter',()=>{
	wrapper.setProps({
		filters:altFilters
	})
	expect(wrapper).toMatchSnapshot();
})

//onTextChange
test('should handle onTextChange',()=>{
	const value='abc';
	wrapper.find('input').at(0).simulate('change',{
		target:{value}
	})
	expect(setFilter).toHaveBeenCalledWith(value);
})

//onSortByChange for dates
test('should handle onSortByChange for dates',()=>{
	const value='date';
	wrapper.find('select').simulate('change',{
		target:{value}
	})

	expect(sortByDate).toHaveBeenCalled();
})

//onSortByChange for amount
test('should handle onSortByChange for amount',()=>{
	const value='amount';
	wrapper.find('select').simulate('change',{
		target:{value}
	})

	expect(sortByAmount).toHaveBeenCalled();
})

//DateRangerPicker for onDateChange
test('should handle onDateChange',()=>{
	const startDate="abc";
	const endDate="bbc";
	wrapper.find('DateRangePicker').prop("onDatesChange")({startDate,endDate});

	expect(setStartDate).toHaveBeenCalledWith(startDate);
	expect(setEndDate).toHaveBeenCalledWith(endDate);
})

//DateRangerPicker for onFocusChange
test('should hand onFcousChange',()=>{
	wrapper.find('DateRangePicker').prop('onFocusChange')("startDate");

	expect(wrapper.state("calendarFocused")).toBe("startDate");
})
	



