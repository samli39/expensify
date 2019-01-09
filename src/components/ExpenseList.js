import React from 'react';
import {connect} from 'react-redux';
import expenseSelector from '../selector/expenseSelector';
import ExpenseListItem from './ExpenseListItem';

//parent:ExpenseDashboardPage
export const ExpenseList = (props)=>(
	<div>
		<h1>Expense List </h1>
		{
			( props.expenses.length > 0 )?(
				props.expenses.map((e)=>
						<ExpenseListItem key={e.id} {...e} />
					)
				):(
					<p> there is no item </p>
				)

		}
	</div>
)

const mapStateToProps=(state)=>({
	expenses:expenseSelector(state.expenses,state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
