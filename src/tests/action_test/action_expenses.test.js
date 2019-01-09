import {addExpense,removeExpense,editExpense,setExpense} from '../../action/action_expenses';

//removeExpense
test("should remove expense correctly with id ",()=>{
	const result = removeExpense("123abc");
	expect(result).toEqual({
		type:"REMOVE_EXPENSE",
		id:"123abc"
	})
})


//editExpense

test("should edit expense correctly with data",()=>{
	const update={
		note:'New note value'
	}
	const id = "123abc";
	const result = editExpense(id,update);
	expect(result).toEqual({
		type:"EDIT_EXPENSE",
		id,
		update
	})
})

//addExpense
test("should add epxense with date",()=>{
	const data ={
		amount:123,
		createdAt:123,
		description:"123abc",
		note:"123abc",
		id:expect.any(String)
	}

	const result = addExpense(data);

	expect(result).toEqual({
		type:"ADD_EXPENSE",
		expense:data
	})
})

test("should add expense correctly without data",()=>{
	const data ={
		amount:0,
		createdAt:0,
		description:"",
		note:"",
		id:expect.any(String)
	}
	const result = addExpense();

	expect(result).toEqual({
		type:"ADD_EXPENSE",
		expense:data
	})
})


//set expense
// test("should set expense correctly",()=>{

// })