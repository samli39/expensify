const sum = (sum,value)=> sum+value;

export default (expenses=[])=>{
	return  expenses.map((e)=>e.amount).reduce(sum,0);
}