import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
//parent:ExpenseList

const ExpenseListItem=({id,description,createdAt,amount})=>(
	<div>
		<p>description: <Link to ={`/edit/${id}`}>{description}</Link></p>
		<p>amount: {numeral(amount/100).format('$0,0.00')} </p>
		<p>createdAt: { moment(createdAt).format("MMMM Do,YYYY") }</p>
	</div>
)



export default ExpenseListItem;