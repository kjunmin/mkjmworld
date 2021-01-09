import React from 'react';

const RoseDescription = props => {

    return (
        <div>
            <h3 className="header-text">Fourier Series</h3>
            <p className="paragraph-text">
                To better visualise this example, set the Number of periodic signal inputs to 1. Using p5.js, we create a simple vector point that travels along the circumference of
                a circle with a fixed time series. This generates a smooth rotating point on the canvas. From there we are able to extend the point along the x-axis to offset the value 
                of that point horizontally across the canvas. Next we plot the position of that point on the canvas, at the same time, moving the rest of the points horizontally using the
                fixed time series specified before. This allows us to create a sinusodial periodic wave. 
            </p>
            <br /><br />
            <h3 className="header-text">Try It Out Yourself</h3>
            <p  className="paragraph-text">
                By adding more rotating circles to the reference point, we are able to generate a superposition of all waves which collapse to form our sinusoidual square wave.
            </p>
            <br /><br /><br />
        </div>

    )
}

export default RoseDescription;