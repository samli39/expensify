import React from 'react';
import {connect} from 'react-redux';
import expenseSelector from '../selector/expenseSelector';
import ExpenseListItem from './ExpenseListItem';

//parent:ExpenseDashboardPage
export const ExpenseList = (props)=>(
	<div className="content-container">
		<div className="list-header">
			<div>Expenses</div>
			<div className="show-for-desktop">Amount</div>
		</div>
		<div className="list-body">
			{
			( props.expenses.length > 0 )?(
				props.expenses.map((e)=>
						<ExpenseListItem key={e.id} {...e} />
					)
				):(
					<div className="list-item list-item--message">
						<span>No Expenses</span>
					</div>
				)

		}
		</div>
	</div>
)

const mapStateToProps=(state)=>({
	expenses:expenseSelector(state.expenses,state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
