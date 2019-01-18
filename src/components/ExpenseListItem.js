import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
//parent:ExpenseList

const ExpenseListItem=({id,description,createdAt,amount})=>(
	<div>
		<Link className="list-item" to ={`/edit/${id}`}>
			<div className="list-item__header">
				<h3 className="list-item__title">{description}</h3>
				<span className="list-item__sub-title">{ moment(createdAt).format("MMMM Do,YYYY") }</span>
			</div>
			<div>
				<h3 className="list-item__data">{numeral(amount/100).format('$0,0.00')}</h3>
			</div>
		</Link>
	</div>
)



export default ExpenseListItem;