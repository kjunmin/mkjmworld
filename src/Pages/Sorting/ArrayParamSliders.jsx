import React from 'react';
import { Slider, Row, Col, InputNumber } from 'antd';

const ArrayParamSliders = props => {
    const { arraySize, generateNewArray, stepDelay, setStepDelay, isDisabled, maxArraySize, maxStepDelay } = props;

    return (
        <div>
            <Row>
                <Col span={4}>
                    <p>Array Size:</p>
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
                    <p>Step Delay:</p>
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