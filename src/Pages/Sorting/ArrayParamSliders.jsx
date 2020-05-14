import React from 'react';
import { Slider, Row, Col, InputNumber } from 'antd';

const ArrayParamSliders = props => {
    const { arraySize, generateNewArray, stepDelay, setStepDelay, isDisabled, maxArraySize, maxStepDelay } = props;

    return (
        <div className="slider-container">
            <Row>
                <Col span={4}>
                    <h2 className="slider-label">Array Size:</h2>
                </Col>
                <Col span={16}>
                    <Slider
                        min={1}
                        max={maxArraySize}
                        disabled={isDisabled}
                        onChange={generateNewArray}
                        value={arraySize}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={maxArraySize}
                        disabled={isDisabled}
                        style={{ marginLeft: 16 }}
                        value={arraySize}
                        onChange={generateNewArray}
                    />
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                   <h2 className="slider-label">Step Delay:</h2>
                </Col>
                <Col span={16}>
                    <Slider
                        min={1}
                        max={maxStepDelay}
                        disabled={isDisabled}
                        onChange={setStepDelay}
                        value={stepDelay}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={maxStepDelay}
                        disabled={isDisabled}
                        style={{ marginLeft: 16 }}
                        value={stepDelay}
                        onChange={setStepDelay}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ArrayParamSliders;