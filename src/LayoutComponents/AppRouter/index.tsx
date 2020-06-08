import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../Pages/Home';
import Sorting from '../../Pages/Sorting';
import CanvasPage from '../../Pages/Canvas';
import MLClassification from '../../Pages/MLClassification';

function AppRouter() {
    return (
        <div>
            <Route path={ process.env.PUBLIC_URL + '/'} exact component={Home} />
            <Route path={ process.env.PUBLIC_URL + '/sorting'} component={Sorting} />
            <Route path={ process.env.PUBLIC_URL + '/canvas'} component={CanvasPage} />
            <Route path={ process.env.PUBLIC_URL + '/classifier'} component={MLClassification} />
        </div>
    )
}

export default AppRouter;