import React from 'react';
// import { removeExpense } from "../actions/expenses";
// import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMM Do, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;