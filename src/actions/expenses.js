import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense 
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        return database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            });
    };
};

// export const removeExpense = ({ id } = {}) => {
//     console.log('here', id);
//     return {
//         type: 'REMOVE_EXPENSE',
//         id
//     };
// };
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// 1. fetch all expense data once
// 2. parse that data into an array
// 3. dispatch SET_EXPENSES
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const r = [];
            snapshot.forEach((child) => {
                const id = child.key;
                const val = child.val();
                r.push({
                    id,
                    ...val
                });
            });
            dispatch(setExpenses(r));
        });
    };
};