import uuid from 'uuid';

export const addExpense=(
	{
		amount=0,
		createdAt=0,
		description="",
		note=""

	}
	={})=>{
	const id = uuid();
	const expense = {amount,createdAt,description,note,id}
	return{
		type:"ADD_EXPENSE",
		expense
	}

}

export const removeExpense=(id)=>{
	return{
		type:"REMOVE_EXPENSE",
		id
	}
}

export const editExpense=(id,update)=>{
	return {	
		type:"EDIT_EXPENSE",
		id,
		update
	}
}

export const setExpense=(expenses)=>{
	return{
		type:'SET_EXPENSE',
		expenses
	}
}