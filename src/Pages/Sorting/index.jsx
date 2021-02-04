import React, { useState } from 'react';
import { Button } from 'antd';
import SortingDisplay from './SortingDisplay';
import { useSelector, useDispatch } from 'react-redux';
import { setVisualArray, clearStepQueue, clearVisualArray } from '../../Redux/Actions/SortingActions';
import { mergeSortBottomUp } from './SortingAlgorithms/mergeSort';
import { quickSort } from './SortingAlgorithms/quickSort';
import { heapSort } from './SortingAlgorithms/heapSort';
import ArrayParamSliders from './ArrayParamSliders';
import { isMobile } from 'react-device-detect';

function Sorting() {

    const MIN_HEIGHT = 1;
    const MAX_HEIGHT = 300;
    const MAX_ARRAY_SIZE_MOBILE = 50;
    const MAX_ARRAY_SIZE = 100;
    const MAX_STEP_DELAY = 300;
    const INITIAL_ARRAY_SIZE = 30;
    const INITIAL_STEP_DELAY = 30;
    const MERGESORT_SELECTION = 'MergeSort';
    const QUICKSORT_SELECTION = 'QuickSort';
    const HEAPSORT_SELECTION = 'HeapSort';

    const maxStepDelay = isMobile ? MAX_STEP_DELAY : MAX_STEP_DELAY;
    const maxArraySize = isMobile ? MAX_ARRAY_SIZE_MOBILE : MAX_ARRAY_SIZE;

    const initialState = {
        sortingMethod: MERGESORT_SELECTION,
        arraySize: INITIAL_ARRAY_SIZE,
        stepDelay: INITIAL_STEP_DELAY,
        sortingArray: [],
        currentVisual: {},
        isSortButtonDisabled: true,
        isVisualButtonDisabled: true,
        isUiDisabled: false
    }

    let sortingArray = useSelector(state => state.sortingReducer.sortingArray);
    let stepQueue = useSelector(state => state.sortingReducer.stepQueue);

    const [sortingMethod, setSortingMethod] = useState(initialState.sortingMethod);
    const [arraySize, setArraySize] = useState(initialState.arraySize);
    const [currentVisual, setCurrentVisual] = useState(initialState.currentVisual);
    const [stepDelay, setStepDelay] = useState(initialState.stepDelay);
    const [isSortButtonDisabled, setSortButtonDisabled] = useState(initialState.isSortButtonDisabled);
    const [isVisualButtonDisabled, setVisualButtonDisabled] = useState(initialState.isVisualButtonDisabled);
    const [isUiDisabled, setIsUiDisabled] = useState(initialState.isUiDisabled);

    const dispatch = useDispatch();

    function shuffleArray(size, minValue, maxValue) {
        let arr = [];
        for (let i = 0; i < size; i++) {
            const gen = Math.floor(Math.random() * (maxValue - minValue) + minValue);
            arr = [...arr, gen];
        }
        return arr;
    }

    function resetScenario() {
        setCurrentVisual({});
        dispatch(clearStepQueue())
        clearVisualArray();
        setSortButtonDisabled(true)
        setVisualButtonDisabled(true);
    }

    function generateNewArray(size) {
        resetScenario();
        setArraySize(size);
        const newArray = shuffleArray(arraySize, MIN_HEIGHT, MAX_HEIGHT)
        dispatch(setVisualArray(newArray));
        const startingVisual = { sortingArray: newArray, }
        setCurrentVisual(startingVisual);
        setSortButtonDisabled(false);
    }

    async function beginVisualisation(stepDelay) {
        setIsUiDisabled(true);

        const sleep = (stepDelay) => {
            return new Promise(resolve => setTimeout(resolve, stepDelay));
        }

        for (let index = 0; index < stepQueue.length; index++) {
            setCurrentVisual(stepQueue[index])
            await sleep(stepDelay)
        }
        setIsUiDisabled(false);
    }


    function startSort() {

        console.log(sortingArray.length)

        switch (sortingMethod) {
            case MERGESORT_SELECTION:
                mergeSortBottomUp([...sortingArray]);
                break;
            case QUICKSORT_SELECTION:
                quickSort([...sortingArray], 0, sortingArray.length)
                break;
            case HEAPSORT_SELECTION:
                heapSort([...sortingArray])
                break;
            default:
        }
        setVisualButtonDisabled(false);
    }

    function selectSortingMethod(method) {
        resetScenario();
        setSortingMethod(method);
    }

    return (
        <div className="sorting-container">
            <div className="sorting-controls-container">
                <ArrayParamSliders
                    isDisabled={isUiDisabled}
                    arraySize={arraySize}
                    generateNewArray={generateNewArray}
                    stepDelay={stepDelay}
                    setStepDelay={setStepDelay}
                    maxArraySize={maxArraySize}
                    maxStepDelay={maxStepDelay} />
                <div className="sorting-button-row">
                    <Button
                        name={MERGESORT_SELECTION}
                        type={sortingMethod === MERGESORT_SELECTION ? 'primary' : 'ghost'}
                        size={isMobile ? "small" : "large"}
                        disabled={isUiDisabled}
                        onClick={(e) => selectSortingMethod(e.target.name)}
                    >
                        {MERGESORT_SELECTION}
                    </Button>
                    <Button
                        name={QUICKSORT_SELECTION}
                        type={sortingMethod === QUICKSORT_SELECTION ? 'primary' : 'ghost'}
                        size={isMobile ? "small" : "large"}
                        disabled={isUiDisabled}
                        onClick={(e) => selectSortingMethod(e.target.name)}
                    >
                        {QUICKSORT_SELECTION}
                    </Button>
                    <Button
                        name={HEAPSORT_SELECTION}
                        type={sortingMethod === HEAPSORT_SELECTION ? 'primary' : 'ghost'}
                        size={isMobile ? "small" : "large"}
                        disabled={isUiDisabled}
                        onClick={(e) => selectSortingMethod(e.target.name)}
                    >
                        {HEAPSORT_SELECTION}
                    </Button>
                </div>
                <br />

                <div className="sorting-button-row">
                    <Button
                        type="primary"
                        size={isMobile ? "small" : "large"}
                        ghost
                        disabled={isUiDisabled}
                        onClick={() => generateNewArray(arraySize)}
                    >
                        Reshuffle
                </Button>
                    <Button
                        name="sort"
                        type="primary"
                        size={isMobile ? "small" : "large"}
                        ghost
                        disabled={isSortButtonDisabled || isUiDisabled}
                        onClick={() => startSort()}
                    >
                        Sort
                </Button>
                    <Button
                        type="primary"
                        ghost
                        size={isMobile ? "small" : "large"}
                        disabled={isVisualButtonDisabled || isUiDisabled}
                        onClick={() => {
                            beginVisualisation(stepDelay);
                        }}
                    >
                        Visualize
                </Button>
                </div>
            </div>
            <div className="sorting-window">
                <SortingDisplay array={sortingArray} />
            </div>
            <div className="sorting-window">
                <SortingDisplay stepType={currentVisual.stepType} stepElements={currentVisual.stepElements} array={currentVisual.sortingArray} />
            </div>
        </div>
    )
}

export default Sorting