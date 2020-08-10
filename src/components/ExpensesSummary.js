import React from 'react';
import { selectExpensesTotal } from '../selectors/expenses-total';
import ExpensesSelector from '../selectors/expenses';
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
            <div><h1>Viewing {count} expense{count > 1 ? 's' : ''} totaling {formattedExpensesTotal}</h1></div>
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