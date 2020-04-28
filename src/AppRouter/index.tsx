import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home';

function AppRouter() {
    return (
        <div>
            <Route path={ process.env.PUBLIC_URL + '/'} exact component={Home} />
        </div>
    )
}

export default AppRouter;