import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Sorting from '../../Pages/Sorting/Sorting';
import CanvasPage from '../../Pages/Canvas';
import CovidTracker from '../../Pages/CovidTracker/CovidTracker';

function AppRouter() {
    return (
        <>
            <Route path={ process.env.PUBLIC_URL + '/'} exact  component={Home} />
            <Route path={ process.env.PUBLIC_URL + '/sorting'} component={Sorting} />
            <Route path={ process.env.PUBLIC_URL + '/canvas'} component={CanvasPage} />
            <Route path={ process.env.PUBLIC_URL + '/covid'} component={CovidTracker} />
        </>
    )
}

export default AppRouter;