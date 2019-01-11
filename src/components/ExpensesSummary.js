import React from 'react';
import {connect} from 'react-redux';
import expenseSelector from '../selector/expenseSelector';
import numeral from 'numeral';
import expenseTotal from '../selector/expenseTotal';

//parent:ExpenseDashboardPage
export const ExpensesSummary=(props)=>{
	const amount = expenseTotal(props.expenses);
	const expenseWord = (props.expenses.length === 1) ? 'expense' :'expenses';
	return(
		<div>
			<h1>Viewing {props.expenses.length} {expenseWord} totalling {numeral(amount/100).format('$0,0.00')}</h1>
		</div>
	)
}

const mapStateToProps=(state)=>({
	expenses:expenseSelector(state.expenses,state.filters)
});

//other way

// export const ExpensesSummary =({expenseCount,expenseTotal})=>(
// 	<div>
// 	<h1>Viewing {expenseCount} expenses totalling : {expenseTotal}</h1>
// 	</div>
// 	)




// const mapStateToProps=(state)=>{
// 	const expenses=expenseSelector(state.expenses,state.filters);
// 	return{
// 		expenseCount:expenses.length,
// 		expenseTotal:numeral(getExpensesTotal(expenses)).format("$0,0.00")
// 	}
// }

export default connect(mapStateToProps)(ExpensesSummary);