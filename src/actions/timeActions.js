export const types = {
    SET_REMAINING_TIME: 'SET_REMAINING_TIME',
    DECREMENT_LOCAL_TIME: 'DECREMENT_LOCAL_TIME',
};

export function setRemainingTime(timeRemaining) {
    return { type: types.SET_REMAINING_TIME, timeRemaining };
}

export function decrementLocalTime(timeRemainingLocal) {
    return { type: types.DECREMENT_LOCAL_TIME, timeRemainingLocal };
}
