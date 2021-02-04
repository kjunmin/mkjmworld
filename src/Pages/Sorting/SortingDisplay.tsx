import React from 'react';
import { isMobile } from 'react-device-detect';

function SortingBar(props) {
    const { length, cn } = props;

    const styles = {
        height: isMobile ? length / 2 : length,
    }

    return <div className={cn} style={styles} />
}

function SortingDisplay(props) {
    const { array, stepElements, stepType } = props;

    return (
        <div className="sorting-visual-container">
            {array ? array.map((num, index) => {
                let sortingClass = 'sorting-bar';

                if (stepElements?.includes(index) && stepType === 'comparison')
                    sortingClass = 'sorting-bar-cmp'
                if (stepElements?.includes(index) && stepType === 'movement') {
                    sortingClass = 'sorting-bar-move'
                }
                return <SortingBar cn={sortingClass} key={index} length={num} />
            }) : null}
        </div>
    )
}

export default SortingDisplay;