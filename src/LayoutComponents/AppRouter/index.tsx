import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Sorting from '../../Pages/Sorting';
import CanvasPage from '../../Pages/Canvas';
import CovidTracker from '../../Pages/CovidTracker';

function AppRouter(props) {
    return (
        <>
            <Route path={ process.env.PUBLIC_URL + '/'} exact render={() => (<Home {...props} />)} />
            <Route path={ process.env.PUBLIC_URL + '/sorting'} component={Sorting} />
            <Route path={ process.env.PUBLIC_URL + '/canvas'} component={CanvasPage} />
            <Route path={ process.env.PUBLIC_URL + '/covid'} component={CovidTracker} />
        </>
    )
}

export default AppRouter;