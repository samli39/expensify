import expenseTotal from '../../selector/expenseTotal';
import expenses from '../fixture/expenses';

test('should return 0 if no expenses',()=>{
	const result  = expenseTotal();
	expect(result).toBe(0);
})

test("should correctly add up a single expense",()=>{
	const result = expenseTotal([expenses[0]]);
	expect(result).toBe(expenses[0].amount);
})

test("should correctly add up multiple expenses",()=>{
	const result = expenseTotal(expenses);
	const answer =  expenses[0].amount+
					expenses[1].amount+
					expenses[2].amount;
					
	expect(result).toBe(answer);
});