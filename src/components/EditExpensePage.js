import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense,startRemoveExpense} from '../action/action_expenses';
import {Redirect} from 'react-router-dom';

export const EditExpensePage=(props)=>{
	const onSubmit=(expense)=>{
		props.startEditExpense(props.expense.id,expense).then(()=>{
			props.history.push("/dashboard");
		});
	}

	const remove=()=>{
		props.startRemoveExpense(props.expense.id).then(()=>{
			props.history.push('/dashboard');
		});
	}

	return(
		!props.expense ?(
			<Redirect to="/notFountdPage" />
		):(
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="paage-header__title">Edit Expense</h1> 
					</div>
				</div>
				<div className="content-container">
					<ExpenseForm onSubmit={onSubmit} expense={props.expense}/>
					<button className="button button--remove" onClick={remove} > Remove Expense </button>
				</div>
			</div>
		)
	)
}

const mapStateToProps=(state,props)=>({
	expense:state.expenses.find((expense)=>{
		return expense.id === props.match.params.id;
	})
})

const mapDispatchToProps=(dispatch)=>({
	startEditExpense:(id,update)=>dispatch(startEditExpense(id,update)),
	startRemoveExpense:(id)=>dispatch(startRemoveExpense(id))
})

//or

// const mapDispatchToProps=(dispatch,props)=>({
// 	editExpense:(id,update)=>dispatch(editExpense(id,update)),
// 	removeExpense:()=>dispatch(removeExpense(props.expense.id))
// })
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);