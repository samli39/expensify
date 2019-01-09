import React from 'react';
import {connect} from 'react-redux';
import {setFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../action/action_filter';
import {DateRangePicker} from 'react-dates';

//parent:ExpenseDashboardPahe

export class ExpenseListFilter extends React.Component{
	state={
		calendarFocused:null
	}
	
	// input text for filter text
	onTextChange=(e)=>{
		this.props.setFilter(e.target.value);
	}

	//for sortBy
	onSortByChange=(e)=>{
		(e.target.value === "date") ?
		this.props.sortByDate()
		:
		this.props.sortByAmount();
	}

	//DateRanger Picker
	onDateChange=({startDate,endDate})=>{
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	}

	onFocusChange=(calenderFocused)=>{
		this.setState(()=>({calenderFocused}))
	}

	render(){
		return (
			<div>
				{/*for filter text*/}
				<input 
					type="text" 
					value={this.props.filters.text}
					onChange={this.onTextChange}
				/>
				
				{/*option for sortBy*/}
				<select
					value={this.props.filters.sortBy}
					onChange={this.onSortByChange}
					>
					<option value="date">Date</option>
					<option value="amount">Amount</option>


				</select>
				
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDateChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={()=>false}
					showClearDates={true}
				/>
			</div>

		)
	}
}

const mapStateToProps=(state)=>({
	filters:state.filters
})
const mapDispatchToProps=(dispatch)=>({
	setFilter:(text)=>dispatch(setFilter({text})),
	sortByDate:()=>dispatch(sortByDate()),
	sortByAmount:()=>dispatch(sortByAmount()),
	setStartDate:(date)=>dispatch(setStartDate(date)),
	setEndDate:(date)=>dispatch(setEndDate(date))
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter);
// export default ExpenseListFilter;

