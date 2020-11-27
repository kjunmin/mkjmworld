import React from 'react';

const RoseDescription = props => {

    return (
        <div>
            <h3 className="header-text">The Rose Function</h3>
            <p className="paragraph-text">
                The Rose is a sinusoid curve resembling the shape of flower petals. The curve was named rhodonea after the Italian mathematician Luigi Guido Grandi
                who was best known for his work <i>Flores geometrici</i> in 1728 where he studied the Rose Curve.
            </p>
            <br /><br />
            <h3>Ring Around the Rosie</h3>
            <ul>
                <li>If the value of <i>k</i> is odd, the rose will have <i>k</i> number of petals. </li>
                <li>If the value of <i>k</i> is even, the rose will have <i>2k</i> number of petals.</li>
                <li>If <i>k</i> is a half integer (e.g. 1/2, 3/2, 5/2), the curve will have <i>4k</i> petals.</li>
                <li>If <i>k</i> can be expressed as <i>n ± 1/6</i>, where <i>n</i> is a nonzero integer, the curve will be rose-shaped with <i>12k</i> petals.</li>
                <li>If <i>k</i> is rational, then the curve is closed and has finite length. If <i>k</i> is irrational, then it is not closed and has infinite length. </li>
            </ul>
            <br />
            <h3>Try It Out Yourself</h3>
            <p>
                The value of <i>n</i> and <i>d</i> respectively are directly and inversely related to <i>j=k</i> in the form k = n/d. 
                Adjust the values of <i>d</i> and <i>n</i> to generate the <i>k</i> value for the Rose Curve.
            </p>
            <br /><br /><br />
        </div>

    )
}

export default RoseDescription;