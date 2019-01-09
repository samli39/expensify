import moment from 'moment';
export default (expenses,{text,sortBy,startDate,endDate})=>{
	return expenses.filter(({createdAt,description})=>{
		const createdAtMoment =moment(createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true;
		const textMatch = description.toLowerCase().includes(text.toLowerCase());
		
		return startDateMatch && endDateMatch && textMatch;
	}).sort((a,b) => (sortBy === "date") ? 
						a.createdAt-b.createdAt :
						a.amount -b.amount);	

}