import selectExpense from '../../selector/expenseSelector';
import expenses from '../fixture/expenses';
import moment from 'moment';
//text
test('should filter by text value',()=>{
	const filter={
		text:'e',
		sortBy:'date',
		startDate:undefined,
		endDate:undefined
	}
	const result = selectExpense(expenses,filter);
	expect(result).toEqual([expenses[1],expenses[2]])
})

//sort by date
test("should sort by date",()=>{
	const filter={
		text:'',
		sortBy:'date',
		startDate:undefined,
		endDate:undefined
	}
	const result = selectExpense(expenses,filter);
	expect(result).toEqual([expenses[1],expenses[0],expenses[2]]);
})

//sort by amount
test("should sort by amount",()=>{
	const filter={
		text:'',
		sortBy:'amount',
		startDate:undefined,
		endDate:undefined
	}
	const result =selectExpense(expenses,filter);
	expect(result).toEqual([expenses[0],expenses[2],expenses[1]])

})
//by start date
test('should filter by start date',()=>{
	const filter={
		text:'',
		sortBy:'date',
		startDate:moment(0),
		endDate:undefined
	}
	const result = selectExpense(expenses,filter);
	expect(result).toEqual([expenses[0],expenses[2]]);
})

//by end date
test("should filter by end date",()=>{
	const filter={
		text:'',
		sortBy:'date',
		startDate:undefined,
		endDate:moment(0).add(2,"days")
	}
	const result = selectExpense(expenses,filter);
	expect(result).toEqual([expenses[1],expenses[0]]);
})
