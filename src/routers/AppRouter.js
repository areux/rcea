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
import Header from '../components/Header';

console.log('Loading AppRouter...');
export const history = createBrowserHistory();

const AppRouter = () => {
    return (
        <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                        <Route path="/dashboard" component={ExpenseDashboardPage} />
                        <Route path="/create" component={AddExpensePage} />
                        <Route path="/edit/:id" component={EditExpensePage} />
                        <Route path="/help" component={HelpPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
    );
}

export default AppRouter;