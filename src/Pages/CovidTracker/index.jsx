import React from 'react';
import axios from 'axios';

function CovidTracker() {

    const url = "https://api.covid19api.com/summary";
    
    axios.get(url).then(res => {
        console.log(res);
    })

    return (
        <div>
            <h1>This is the test covid tracker page</h1>
        </div>
    )
}
export default CovidTracker;