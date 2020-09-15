import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const NotFoundPage = (props) => (
    <div>
        404 - <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;