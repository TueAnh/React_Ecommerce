import * as types from './../constants/ActionTypes'
var initialState = [0,0]; // index
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREASE_INDEX:
            state[0] = 1
            state[1] = state[1] + 1;
            state[1] = (state[1] == 5) ? 0 : state[1];
            return state;
        case types.REDUCTION_INDEX:
            state[0] = 1
            state[1] = (state[1] == 0) ? 5 : state[1]; 
            state[1] = state[1] - 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
            return state;
        default: return state;

    }
};
export default appReducer;