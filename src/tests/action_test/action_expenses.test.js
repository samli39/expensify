import {
		startAddExpense,
		addExpense,
		removeExpense,
		editExpense,
		startSetExpense,
		setExpense
	} from '../../action/action_expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixture/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(async()=>{
	const expensesData ={};
	expenses.forEach(({id,description,note,amount,createdAt})=>{
		expensesData[id]={description,note,amount,createdAt};
	})
	await database.ref('expenses').set(expensesData);
})
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
	await store.dispatch(startAddExpense(expenseData)).then(async ()=>{
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
		await database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
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
	await store.dispatch(startAddExpense()).then(async ()=>{
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
		 await database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
			expect(snapshot.val()).toEqual(expenseDefault);
		})
	});
})

//setExpense

test('should setup expense action object with data',()=>{
	const action = setExpense(expenses);
	expect(action).toEqual({
		type:'SET_EXPENSE',
		expenses
	})
})

//startSetExpense
test('should fetch data from the database',async()=>{
	const store = createMockStore();
	await store.dispatch(startSetExpense()).then(()=>{
		const actions = store.getActions();
		//test for redux store
		expect(actions[0]).toEqual({
			type:'SET_EXPENSE',
			expenses
		})
	})

})


