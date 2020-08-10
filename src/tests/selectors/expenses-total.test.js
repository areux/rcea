import { selectExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return total number of amount', () => {
    const r = selectExpensesTotal(expenses);
    expect(r).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
    expect(selectExpensesTotal([])).toBe(0);
    expect(selectExpensesTotal([{amount: 2}])).toBe(2);
});