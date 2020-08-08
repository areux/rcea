import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1',
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
    const e = {
        id: '4',
        description: '4 desc',
        note: '4 note',
        amount: 0,
        createdAt: moment(0).valueOf(),
    };
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense: e
    });
    expect(state).toEqual([...expenses, e]);
});

test('should edit an expense', () => {
    const expenseUpdated = {
        description: 'new description!'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: expenseUpdated
    };
    const state = expensesReducer(expenses, action);
    // expect(state[1]).toEqual({...state[1], ...expenseUpdated});
    expect(state[1].description).toBe('new description!');
});

test('should not edit expense if expense not found', () => {
    const expenseUpdated = {
        description: 'new description!'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: expenseUpdated
    };
    const state = expensesReducer(expenses, action);
    // expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
    expect(state).toEqual(expenses);
});