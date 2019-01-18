import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import expenseSelector from '../selector/expenseSelector';
import numeral from 'numeral';
import expenseTotal from '../selector/expenseTotal';

//parent:ExpenseDashboardPage
export const ExpensesSummary=(props)=>{
	const amount = expenseTotal(props.expenses);
	const expenseWord = (props.expenses.length === 1) ? 'expense' :'expenses';
	return(
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{numeral(amount/100).format('$0,0.00')}</span></h1>
				<div className="page-header__actions">
					<Link to="/create" className="button">Add Expense</Link>
				</div>
			</div>
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