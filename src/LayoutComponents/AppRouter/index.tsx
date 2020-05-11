import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Sorting from '../../Pages/Sorting';

function AppRouter() {
    return (
        <div>
            <Route path={ process.env.PUBLIC_URL + '/'} exact component={Home} />
            <Route path={ process.env.PUBLIC_URL + '/sorting'} component={Sorting} />
        </div>
    )
}

export default AppRouter;