import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={1}
            expensesTotal={235}
        />);
    expect(wrapper).toMatchSnapshot();
});
test('should correctly render ExpensesSummary with multiple expense', () => {
    const wrapper = shallow(
        <ExpensesSummary 
            expenseCount={23}
            expensesTotal={12384}
        />);
    expect(wrapper).toMatchSnapshot();
});