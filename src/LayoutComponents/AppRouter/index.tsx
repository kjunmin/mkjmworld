import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Sorting from '../../Pages/Sorting';
import CanvasPage from '../../Pages/Canvas';
import CovidTracker from '../../Pages/CovidTracker';
import MLClassification from '../../Pages/MLClassification';
import FFMpegConverter from '../../Pages/FFMpegConverter';

function AppRouter() {
    return (
        <div>
            <Route path={ process.env.PUBLIC_URL + '/'} exact component={Home} />
            <Route path={ process.env.PUBLIC_URL + '/sorting'} component={Sorting} />
            <Route path={ process.env.PUBLIC_URL + '/canvas'} component={CanvasPage} />
            <Route path={ process.env.PUBLIC_URL + '/covid'} component={CovidTracker} />
            <Route path={ process.env.PUBLIC_URL + '/classifier'} component={MLClassification} />
            <Route path={ process.env.PUBLIC_URL + '/converter' } component={FFMpegConverter} />
        </div>
    )
}

export default AppRouter;