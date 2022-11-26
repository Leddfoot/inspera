import { types } from '../actions/timeActions';

const defaultState = {
    timeRemaining: 0,
    timeRemainingLocal: 66,
};

export default function (state = defaultState, action) {
    switch (action.type) {
    case types.SET_REMAINING_TIME:
        return {
            ...state,
            timeRemaining: action.timeRemaining,
            timeRemainingLocal: action.timeRemaining,
        };
    case types.DECREMENT_LOCAL_TIME:
        return {
            ...state,
            timeRemainingLocal: action.timeRemainingLocal - 1,
        };
     default:
        return state;
    }
}
