import React from 'react';
import { isMobile } from 'react-device-detect';

function Bar(props) {
    const { length, bgc } = props;

    const styles: any = {
        height: length,
        margin: isMobile ? '0.08rem' : '0.15rem',
        width: '100%',
        backgroundColor: bgc
    }

    return <div style={styles} />
}

function SortingDisplay(props) {
    const { array, stepElements, stepType } = props;

    return (
        <div className="sorting-visual-container">
            {array === undefined ? null : array.map((num, index) => {
                if (stepType) {
                    if (stepElements && stepType === 'comparison' && stepElements.includes(index)) {
                        return <Bar key={index} length={num} bgc={'yellow'} />
                    }
                    if (stepElements && stepType === 'movement' && stepElements.includes(index)) {
                        return <Bar key={index} length={num} bgc={'red'} />
                    }
                }
                return <Bar key={index} length={num} bgc={'lightblue'} />
            })}
        </div>
    )
}

export default SortingDisplay;