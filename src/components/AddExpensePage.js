import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../action/action_expenses'


export const AddExpensePage=(props)=>{
	const onSubmit=async(expense)=>{
		await props.startAddExpense(expense);
		props.history.push("/dashboard");
	}


	return(
		<div>
			<div className="page-header">
				<div className="content-container">
					<h1 className="page-header__title">Add Expense</h1>
				</div>
			</div>
			<div className="content-container">
				<ExpenseForm onSubmit={onSubmit}/>
			</div>
		</div>

	)
}

const mapDispatchToProps=(dispatch)=>({
	startAddExpense:(expense)=>dispatch(startAddExpense(expense))
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage);