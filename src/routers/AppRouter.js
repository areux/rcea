import React, { Component } from 'react';
import { Router } from 'react-router';
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory, withRouter, browserHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

console.log('Loading AppRouter...');
export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                        <PrivateRoute path="/create" component={AddExpensePage} />
                        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
    );
}

export default AppRouter;