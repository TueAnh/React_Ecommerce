import * as types from './../constants/ActionTypes'
var initialState = [];
var findIndex = (users,id)=>{
    var result =-1;
    users.forEach((user,index)=>{
        if(user.id === id){
            result = index;
        }
    });
    return result;
}
var appReducer = (state = initialState, action) => {
    var index = -1;
    var { id, user } = action
    switch (action.type) {
        case types.FETCH_USERS:
            state = action.users
            return [...state];
        case types.DELETE_USER:
            index = findIndex(state,id);
            state.splice(index,1);
            return [...state];
        case types.ADD_USER:
            state.push(action.user);
            return [...state];
        case types.UPDATE_USER:
            index = findIndex(state,user.id)
            state[index] = user;
            return [...state];
        default: return state;

    }
};
export default appReducer;