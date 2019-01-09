import {setFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../action/action_filter';
import moment from 'moment';
//setFilter
test("should set filter correctly with data",()=>{
	const update="123abc";
	const result = setFilter(update);
	expect(result).toEqual({
		type:"SET_FILTER",
		update
	})
})

test("should set filter correctly without data",()=>{
	const result = setFilter();
	expect(result).toEqual({
		type:"SET_FILTER",
		update:""
	})
})

//sortByDate
test("should set sortByDate correctly",()=>{
		const result =sortByDate();
		expect(result).toEqual({
			type:"SORT_BY_DATE"
		})
})


//sortByAmount
test("should set sortByDate correctly",()=>{
		const result =sortByAmount();
		expect(result).toEqual({
			type:"SORT_BY_AMOUNT"
		})
})

//setStartDate
test("should set the start Date correctly",()=>{
	const result = setStartDate(moment(0));
	expect(result).toEqual({
		type:"SET_START_DATE",
		date:moment(0)
	})
})

//setEndDate
test("should set the End Date correctly",()=>{
	const result = setEndDate(moment(0));
	expect(result).toEqual({
		type:"SET_END_DATE",
		date:moment(0)
	})
})