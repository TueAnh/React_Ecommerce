import * as types from './../constants/ActionTypes'
var initialState = [
    {
        "id": 237,
        "category_id": 20,
        "name": "Acer Spin 3 SP314 51 ",
        "price": "11990000",
        "image": "https://cdn.tgdd.vn/Products/Images/44/145919/acer-spin-3-sp314-51-39wk-i3-7130u-nxguwsv001-cava-1-600x600.jpg",
        "description": "/Man hinh: 14 inch, Full HD/CPU: Core i3 Kabylake, 2.70 GHz/RAM: 4 GB, HDD: 500 GB, Ho tro khe cam SSD M.2 PCIe/Do hoa: Intel HD Graphics 620/HDH: Windows 10 Home SL/Nang: 1.7 kg, Pin: 3 cell",
        "trending": 1,
    },
];
var appReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TRENDING_LAPTOPS:
            state = action.trendinglaptop;
            return [...state];
        default: return state;
    }
};
export default appReducer;