import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
// import { removeExpense, editExpense } from '../../actions/expenses';

// refactor edit expense page to be a class based component
// setup mapdispatchtoprops editexpense and removeexpense

let editExpense, history, removeExpense, wrapper, expense;
beforeEach(() => {
    editExpense = jest.fn();
    history = { push: jest.fn() };
    removeExpense = jest.fn();
    expense = { id: expenses[1].id };
    wrapper = shallow(<EditExpensePage 
        expense={expense}
        editExpense={editExpense}
        history={history}
        removeExpense={removeExpense}
    />);
});

// should render EditExpensePage
// snapshot
test('should render EditExpensePage', () => {
    // 
    wrapper = shallow(<EditExpensePage 
        expense={expenses[1]}
        editExpense={editExpense}
        history={history}
        removeExpense={removeExpense}
    />);
    expect(wrapper).toMatchSnapshot();
});

// should handle editExpense
// spies
test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expense.id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

// should handle removeExpense
// spies
test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click', undefined);
    expect(removeExpense).toHaveBeenLastCalledWith(expense);
    expect(history.push).toHaveBeenLastCalledWith('/');
});