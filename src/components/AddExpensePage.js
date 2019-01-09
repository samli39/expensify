import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../action/action_expenses'


export const AddExpensePage=(props)=>{
	const onSubmit=(expense)=>{
		props.addExpense(expense);
		props.history.push("/");
	}


	return(
		<div>
			it is add expense Page
			<ExpenseForm onSubmit={onSubmit}/>
		</div>

	)
}

const mapDispatchToProps=(dispatch)=>({
	addExpense:(expense)=>dispatch(addExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);