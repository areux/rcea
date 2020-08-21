import React from 'react';
import { connect } from 'react-redux';
import { editExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
        console.log('updated', expense);
    };
    onRemove = () => {
        // this.props.removeExpense({ id: this.props.expense.id });
        // this.props.history.push('/');
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        // this.props.startRemoveExpense({ id: this.props.expense.id }).then(() => {
        //     this.props.history.push('/');
        // });
    };
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                ></ExpenseForm>
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((i) => i.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (obj) => dispatch(startRemoveExpense(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);