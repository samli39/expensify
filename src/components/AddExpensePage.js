import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../action/action_expenses'


export const AddExpensePage=(props)=>{
	const onSubmit=(expense)=>{
		props.startAddExpense(expense);
		props.history.push("/dashboard");
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