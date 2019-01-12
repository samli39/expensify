import database from '../firebase/firebase';

export const addExpense=(expense)=>{
	return{
		type:"ADD_EXPENSE",
		expense
	}

}


//using async/await instead of promise chain
export const startAddExpense=({
		amount=0,
		createdAt=0,
		description="",
		note=""
	}
	={})=>{
	return async (dispatch)=>{
		const expense={
			amount,
			createdAt,
			description,
			note
		};
		try{
			const ref = await database.ref("expenses")
				.push(expense)
				.then((ref)=>{
					dispatch(addExpense({
						id:ref.key,
						...expense
					}))
				})
				return ref;
		}catch(error){
			console.log('Dit not work!',error);
		}

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