import filterReducer from '../../reducer/filterReducer';
import moment from'moment';


//SET UP 
test("should setup default filter values",()=>{
	const result=filterReducer(undefined,{type:'@@INIT'});
	expect(result).toEqual({
		text:"",
		sortBy:'date',
		startDate:moment().startOf('month'),
		endDate:moment().endOf('month')
	})
})

//set filter
test("should setup default filter values",()=>{
	const result=filterReducer(undefined,{type:'SET_FILTER',update:{text:"123"}});
	expect(result.text).toBe("123");
})

//sort by amount
test("should set sortBy to amount",()=>{
	const result = filterReducer(undefined,{type:"SORT_BY_AMOUNT"});
	expect(result.sortBy).toBe("amount");
})

 //sort by date
test("should set sortBy to date",()=>{
	const state={
		text:"",
		sortBy:'amount',
		startDate:moment().startOf('month'),
		endDate:moment().endOf('month')
	}

	const result =filterReducer(state,{type:"SORT_BY_DATE"});
	expect(result.sortBy).toBe("date");
})

//set start date
test("should set the start date",()=>{
	const result = filterReducer(undefined,{type:'SET_START_DATE',date:moment(0)});
	expect(result.startDate).toEqual(moment(0));
})


//set end date
test("should set the end date",()=>{
	const result = filterReducer(undefined,{type:'SET_END_DATE',date:moment(0)});
	expect(result.endDate).toEqual(moment(0));
})