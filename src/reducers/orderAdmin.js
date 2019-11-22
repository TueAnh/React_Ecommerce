// import * as types from './../constants/ActionTypes'
// var initialState = [];
// var findIndex = (orders,id)=>{
//     var result =-1;
//     orders.forEach((order,index)=>{
//         if(order.id === id){
//             result = index;
//         }
//     });
//     return result;
// }
// var appReducer = (state = initialState, action) => {
//     var index = -1;
//     var { id } = action
//     switch (action.type) {
//         case types.FETCH_ORDERS:
//             state = action.products
//             return [...state];
//         case types.DELETE_ORDER:
//             index = findIndex(state,id);
//             state.splice(index,1);
//             return [...state];
//         default: return state;
//     }
// };
// export default appReducer;