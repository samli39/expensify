import {
		startAddExpense,
		addExpense,
		startRemoveExpense,
		removeExpense,
		editExpense,
		startEditExpense,
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

//startRemoveExpense
test('should remove expense from database and store',async()=>{
	const store = createMockStore();

	await store.dispatch(startRemoveExpense('1')).then(()=>{
		const actions = store.getActions();
		
		//test for redux store
		expect(actions[0]).toEqual({
			type:"REMOVE_EXPENSE",
			id:'1'
		})

		//test for database
		return database.ref('expenses')
			.once("value")
			.then((snapshot)=>{
				const dataArray=[];
				snapshot.forEach((ele)=>{
					dataArray.push({
						id:ele.key,
						...ele.val()
					})
				})
				return dataArray;
			})
	}).then((childData)=>{
				expect(childData).toEqual([
						expenses[1],
						expenses[2]
					])
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

//startEditExpense
test('should edit expense to data and store',async()=>{
	const expense={
		...expenses[0],
		note:"abc"
	}
	const store = createMockStore();

	await store.dispatch(startEditExpense('1',expense)).then(()=>{
		const actions = store.getActions();

		//test for redux store
		expect(actions[0]).toEqual({
			type:"EDIT_EXPENSE",
			id:'1',
			update:expense
		})

		//test for database
		return database.ref('expenses/1').once('value');
	}).then((child)=>{
		expect(child.val()).toEqual(expense);
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
	await store.dispatch(startAddExpense(expenseData)).then( ()=>{
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
		return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
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
		 return database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
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


