import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Sorting from '../../Pages/Sorting/Sorting';
import CanvasPage from '../../Pages/Canvas';
import CovidTracker from '../../Pages/CovidTracker/CovidTracker';
import Privacy from '../Footer/FooterDocuments/Privacy';

function AppRouter() {
    return (
        <>
            <Route path={ process.env.PUBLIC_URL + '/'} exact  component={Home} />
            <Route path={ process.env.PUBLIC_URL + '/sorting'} component={Sorting} />
            <Route path={ process.env.PUBLIC_URL + '/canvas'} component={CanvasPage} />
            <Route path={ process.env.PUBLIC_URL + '/covid'} component={CovidTracker} />
            <Route path={ process.env.PUBLIC_URL + '/privacy'} component={Privacy} />
        </>
    )
}

export default AppRouter;