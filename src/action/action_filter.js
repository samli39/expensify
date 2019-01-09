export const setFilter=(update="")=>({
	type:"SET_FILTER",
	update
})

export const sortByDate=()=>{
	return{
		type:"SORT_BY_DATE"
	}
}

export const sortByAmount=()=>{
	return{
		type:"SORT_BY_AMOUNT"
	}
}

export const setStartDate=(date)=>({
	type:"SET_START_DATE",
	date
})

export const setEndDate=(date)=>({
	type:"SET_END_DATE",
	date
})