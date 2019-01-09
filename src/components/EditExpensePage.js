import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense,removeExpense} from '../action/action_expenses';

export const EditExpensePage=(props)=>{
	const onSubmit=(expense)=>{
		props.editExpense(props.expense.id,expense);
		props.history.push("/");
	}

	const remove=()=>{
		props.removeExpense(props.expense.id);
		props.history.push('/');
	}

	return(
		<div>
			it is Edit expense Page
			<h1>{props.expense.description}</h1>
			<ExpenseForm onSubmit={onSubmit} expense={props.expense}/>
			<button onClick={remove} > remove </button>
		</div>

	)
}

const mapStateToProps=(state,props)=>({
	expense:state.expenses.find((expense)=>{
		return expense.id === props.match.params.id;
	})
})

const mapDispatchToProps=(dispatch)=>({
	editExpense:(id,update)=>dispatch(editExpense(id,update)),
	removeExpense:(id)=>dispatch(removeExpense(id))
})

//or

// const mapDispatchToProps=(dispatch,props)=>({
// 	editExpense:(id,update)=>dispatch(editExpense(id,update)),
// 	removeExpense:()=>dispatch(removeExpense(props.expense.id))
// })
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);