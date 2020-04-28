import React from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';

function AppRouter() {
    return (
        <div className="page-container">
            <Route path={ process.env.PUBLIC_URL + '/'} exact component={Home} />
        </div>
    )
}

export default AppRouter;