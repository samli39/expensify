import expenseReducer from '../../reducer/expenseReducer';
import expenses from '../fixture/expenses';

//@@INIT
test('should set up default state',()=>{
	const result = expenseReducer(undefined,{type:'@@INIT'});
	expect(result).toEqual([]);
})


//add_expense
test('should add expense correctly',()=>{
	const expense ={
		id:'1',
		amount:120,
		description:"abc",
		note:"abc",
		createdAt:1000
	}
	const result = expenseReducer(undefined,{type:'ADD_EXPENSE',expense});
	expect(result).toEqual([expense]);
})


//remove expense
test('should remove expense with correct id',()=>{
	const result = expenseReducer(expenses,{type:"REMOVE_EXPENSE",id:'2'});
	expect(result).toEqual([expenses[0],expenses[2]]);
})

test('should not remove expens with incorrect id',()=>{
	const result = expenseReducer(expenses,{type:"REMOVE_EXPENSE",id:'10'});
	expect(result).toEqual(expenses);
})


//edit expense
test('should edit expense with correct id',()=>{
	const result = expenseReducer(expenses,{type:"EDIT_EXPENSE",id:'1',update:{createdAt:2000}});
	expect(result[0].createdAt).toBe(2000);
})

test('should not edit expense  with incorrect id',()=>{
	const result = expenseReducer(expenses,{type:"EDIT_EXPENSE",id:'10',update:{createdAt:2000}});
	expect(result).toEqual(expenses);
})




//set expense
test('should set expense correctly',()=>{
	const expense ={
		id:'1',
		amount:120,
		description:"abc",
		note:"abc",
		createdAt:1000
	}
	const result = expenseReducer(expenses,{type:"SET_EXPENSE",expenses:expense});
	expect(result).toEqual(expense);
})