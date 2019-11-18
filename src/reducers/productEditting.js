import * as types from './../constants/ActionTypes'
var initialState = {
    id: '',
    txtCode: '',
    txtName: '',
    txtPrice: '',
    txtQuantity: 0,
    txtImage: '',
    txtDescription: '',
};
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            state = action.product
            return state;
        default: return state;

    }
};
export default appReducer;