import { setRemainingTime,decrementLocalTime } from '../../src/actions/timeActions';

describe('timeActions', () => {

    it('setRemainingTime should return an object', () => {
        expect(setRemainingTime(66, {})).toEqual({
            "type": "SET_REMAINING_TIME", 
            "timeRemaining": 66,             
        });
    });

    it('decrementLocalTime should return an object, timeRemainingLocal should be set to the argument', () => {
        expect(decrementLocalTime(77, {})).toEqual({
            "type": "DECREMENT_LOCAL_TIME", 
            "timeRemainingLocal": 77,             
        });
    });

})