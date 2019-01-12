import {
		startAddExpense,
		addExpense,
		removeExpense,
		editExpense,
		setExpense
	} from '../../action/action_expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

	const result = addExpense(expenses[2]);

	expect(result).toEqual({
		type:"ADD_EXPENSE",
		expense:expenses[2]
	})
})


//startAddExpense
test('should add epxense to database and store',async()=>{
	const store = createMockStore({});
	const expenseData={
		description:"mouse",
		amount:3000,
		note:"it is better",
		createdAt:1000
	}
	await store.dispatch(startAddExpense(expenseData)).then(()=>{
		const actions = store.getActions();
		
		//test for redux store
		//the result expect same as addExpense
		expect(actions[0]).toEqual({
			type:'ADD_EXPENSE',
			expense:{
				id:expect.any(String),
				...expenseData
			}
		})
		
		//test for the database
		database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
			expect(snapshot.val()).toEqual(expenseData);
		})
	});
})

test("should add expense to database with default data",async ()=>{
	const store = createMockStore({});
	const expenseDefault={
		description:"",
		amount:0,
		note:"",
		createdAt:0
	}
	await store.dispatch(startAddExpense()).then(()=>{
		const actions = store.getActions();
		
		//test for redux store
		//the result expect same as addExpense
		expect(actions[0]).toEqual({
			type:'ADD_EXPENSE',
			expense:{
				id:expect.any(String),
				...expenseDefault
			}
		})

		//test for database
		 database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
			expect(snapshot.val()).toEqual(expenseDefault);
		})
	});
})



