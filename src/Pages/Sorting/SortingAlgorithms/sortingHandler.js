import store from '../../../Redux/Store';
import { updateStepQueue } from '../../../Redux/Actions/SortingActions';

export const stepForward = async (array, sourceIndex, destIndex, type) => {
    const { sortingArray } = store.getState().sortingReducer;
    const sourceValue = array[sourceIndex];

    if (type === 'movement') sortingArray[destIndex] = sourceValue;

    let postArray = [...sortingArray];

    let payloadToDispatch = {
        sortingArray: postArray,
        stepType: type,
        stepElements: [sourceIndex, destIndex]
    }

    store.dispatch(updateStepQueue(payloadToDispatch));

}


