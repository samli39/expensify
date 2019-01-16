import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../action/action_expenses'


export const AddExpensePage=(props)=>{
	const onSubmit=async(expense)=>{
		console.log("start");
		await props.startAddExpense(expense);
		console.log("check point");
		props.history.push("/dashboard");
		console.log("end");
		
	}


	return(
		<div>
			it is add expense Page
			<ExpenseForm onSubmit={onSubmit}/>
		</div>

	)
}

const mapDispatchToProps=(dispatch)=>({
	startAddExpense:(expense)=>dispatch(startAddExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);