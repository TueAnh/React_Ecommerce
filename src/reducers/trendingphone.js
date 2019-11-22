import * as types from './../constants/ActionTypes'
var initialState = [
    {
        "id": 12,
        "category_id": 1,
        "name": "iPhone X 64GB",
        "price": "20490000",
        "image": "https://cdn.tgdd.vn/Products/Images/42/114115/TimerThumb/iphone-x-64gb-halloween.jpg",
        "description": "/Man hinh: 5.8 inch, Super Retina/HDH: iOS 12/CPU: Apple A11 Bionic 6 nhan/RAM: 3 GB, ROM: 64 GB/Camera: Chinh 12 MP & Phu 12 MP, Selfie: 7 MP/PIN: 2716 mAh",
        "trending": 1,
    }

];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TRENDING_PHONES:
            state = action.trendingphone;
            return [...state];
        default: return state;
    }
};
export default appReducer;