import React from 'react';
import { selectExpensesTotal } from '../selectors/expenses-total';
import ExpensesSelector from '../selectors/expenses';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const count = this.props.expenseCount;
        const total = this.props.expensesTotal;
        const formattedExpensesTotal = numeral(total / 100).format('$0,0.00');
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{count}</span> expense{count > 1 ? 's' : ''} totaling <span>{formattedExpensesTotal}</span></h1>
                    <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const r = ExpensesSelector(state.expenses, state.filters)
    return {
        expenseCount: r.length,
        expensesTotal: selectExpensesTotal(r)
    };
}
export default connect(mapStateToProps)(ExpensesSummary);