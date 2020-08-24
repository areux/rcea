import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
// import { startRemoveExpense } from '../../actions/expenses';

let startEditExpense, history, startRemoveExpense, wrapper, expense;
beforeEach(() => {
    startEditExpense = jest.fn();
    history = { push: jest.fn() };
    startRemoveExpense = jest.fn();
    expense = { id: expenses[1].id };
    wrapper = shallow(<EditExpensePage 
        expense={expense}
        startEditExpense={startEditExpense}
        history={history}
        startRemoveExpense={startRemoveExpense}
    />);
});

// should render EditExpensePage
// snapshot
test('should render EditExpensePage', () => {
    // 
    wrapper = shallow(<EditExpensePage 
        expense={expenses[1]}
        startEditExpense={startEditExpense}
        history={history}
        startRemoveExpense={startRemoveExpense}
    />);
    expect(wrapper).toMatchSnapshot();
});

// should handle editExpense
// spies
test('should handle startEditExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

// should handle removeExpense
// spies
test('should handle startRemoveExpense', () => {
    wrapper.find('button').simulate('click', undefined);
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});
