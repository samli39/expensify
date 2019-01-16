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
	return async (dispatch,getState)=>{
		const uid = getState().auth.uid;
		const expense={
			amount,
			createdAt,
			description,
			note
		};
		try{
			
			const ref= await database.ref(`users/${uid}/expenses`).push(expense);
			console.log("first");
				dispatch(addExpense({
						id:ref.key,
						...expense
					}));
		}catch(error){
			console.log('Dit not work!',error);
		}
		console.log("second");
	}
}


export const removeExpense=(id)=>{
	return{
		type:"REMOVE_EXPENSE",
		id
	}
}

export const startRemoveExpense=(id)=>{
	return async (dispatch,getState)=>{
		const uid=getState().auth.uid;
		const ref = await database.ref(`users/${uid}/expenses/${id}`)
		.remove()
		.then(()=>{
			dispatch(removeExpense(id));
		})
		return ref;
	}
}

export const editExpense=(id,update)=>{
	return {	
		type:"EDIT_EXPENSE",
		id,
		update
	}
}

export const startEditExpense=(id,update)=>{
	return async(dispatch,getState)=>{
		const uid = getState().auth.uid;
		const ref = await database.ref(`users/${uid}/expenses/${id}`)
			.update(update).then(()=>{
				dispatch(editExpense(id,update));
			})
		return ref;
	}
}

export const setExpense=(expenses)=>{
	return{
		type:'SET_EXPENSE',
		expenses
	}
}

export const startSetExpense=()=>{

	return async(dispatch,getState)=>{
		const dataArray = [];
		const uid = getState().auth.uid;

		//get the data from firebase
		const data = await database.ref(`users/${uid}/expenses`)
			.once('value')
			.then((snapshot)=>{
				//convert object to array
				snapshot.forEach((child)=>{
					dataArray.push({
						id:child.key,
						...child.val()
					});
			})
		})

		//save to redux store
		return dispatch(setExpense(dataArray));
	}
}