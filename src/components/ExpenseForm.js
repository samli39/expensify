import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from'react-dates';



//parent:AddExpensePage,EditExpensePage

class ExpenseForm extends React.Component{
	state={
		description:this.props.expense?this.props.expense.description:"",
		amount:this.props.expense ? (this.props.expense.amount/100).toString():"",
		note:this.props.expense ? this.props.expense.note : "",
		createdAt:this.props.expense?moment(this.props.expense.createdAt): moment(),
		calenderFocused:false,
		error:""
	}
	//form submition
	onSubmit=(e)=>{
		e.preventDefault();
		if(!this.state.description || !this.state.amount){
			this.setState(()=>({error:"please enter description or amount"}))
		}else{
			this.setState(()=>({error:""}));
			this.props.onSubmit({
				description:this.state.description,
				amount:parseFloat(this.state.amount,10)*100,
				createdAt:this.state.createdAt.valueOf(),
				note:this.state.note
			})
		}
	}
	//description
	onDescriptionChange=(e)=>{
		const description=e.target.value;
		this.setState(()=>({description}));
	}

	//Amount
	onAmountChange=(e)=>{
		const amount=e.target.value;
		//!amount refer to delete amount
		//^\d{1,}-start from number
		//{1,}-at least 1 to infinite
		//()?-appear zero or one time
		// \. - .symbol
		//\d{0,2} - happen 0 to 2 times
		( !amount || (/^\d{1,}(\.\d{0,2})?$/).test(amount))
		&&
		this.setState(()=>({amount}));
	}
	
	//date picker
	onDateChange=(createdAt)=>{
		if(createdAt)
			this.setState(()=>({createdAt}));
	}
	
	//focus on date picker
	onFocusChange=({focused})=>{
		this.setState(()=>({calenderFocused:focused}));
	}
	//note
	onNoteChange=(e)=>{
		const note = e.target.value;
		this.setState(()=>({note}));
	}
	
	render(){
		return(
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error ? 
						<p className="form__error">{this.state.error}</p>
					:
						<p> Please provide description and amount </p>
					}

					{/*description*/}
					<input 
						className="text-input"
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>

					{/*amount*/}
					<input 
						type="text"
						className="text-input"
						placeholder="Amount"
						onChange={this.onAmountChange}
						value={this.state.amount}
					/>
				{/*	dates
					numberOfMonths =show how many month
					isOutsideRange =allow pick previous month
				*/}
				<SingleDatePicker 
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calenderFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={()=>false}
					showClearDate={true}
				/>


					
					{/* note */}
					<textarea
						className="textarea"
						placeholder="Add some not for your expense{optional}"
						value = {this.state.note}
						onChange={this.onNoteChange}
					>

					</textarea>
					<div className="form__button">
						<button className="button">Add Expense</button>
					</div>
				</form>
		)
	}
}

export default ExpenseForm;