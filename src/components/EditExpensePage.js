import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from "../actions/expenses";
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
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
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">
                            Edit Expense
                        </h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    ></ExpenseForm>
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(props);
    return {
        expense: state.expenses.find((i) => i.id === props.match.params.id),
        props: props
    };
};

const mapDispatchToProps = (dispatch, props) => {
    console.log('>>', props)
    return {
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: (obj) => dispatch(startRemoveExpense(obj))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);