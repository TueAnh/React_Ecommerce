import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
//1. Carousel controll slide 
export const increaseIndex = () => {
    return {
        type: types.INCREASE_INDEX,
    }
}
export const reductionIndex = () => {
    return {
        type: types.REDUCTION_INDEX,
    }
}



//2. Trending Carousel
// 2.1 Carousel Control
export const increaseTrendingIndex = () => {
    return {
        type: types.INCREASE_TRENDINGINDEX,
    }
}

export const reductionTrendingIndex = () => {
    return {
        type: types.REDUCTION_ITRENDINGINDEX,
    }
}

// 2.2 All Trending Products
export const actTrendingFetchProducts = (trendingproducts) => {
    return {

        type: types.FETCH_TRENDING_PRODUCTS,
        trendingproducts
    }
}

export const actFetchTrendingLaptops = (trendinglaptop) => {
    console.log(trendinglaptop);
    return {
        type: types.FETCH_TRENDING_LAPTOPS,
        trendinglaptop
    }
}

export const actFetchTrendingPhones = (trendingphone) => {
    console.log(trendingphone);
    return {
        type: types.FETCH_TRENDING_PHONES,
        trendingphone
    }
}



//3. Product Admin
// 3.1 All products
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    }
}
export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

//3.2 Delete Product
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id))
        });
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}
//3.3 Add Product
export const actAddProductRequest = (product) => {
    return (dispatch) => {
        return callApi('products/', 'POST', product).then(res => {
            console.log(product)
            dispatch(actAddProduct(res.data))
        });
    }
}
export const actAddProduct = (product) => {
    return {
        type: types.ADD_PRODUCT,
        product
    }
}
//3.4 Product to Update
export const actGetProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data))
        });
    }
}
export const actGetProduct = (product) => {
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}

//3.5 Update Product
export const actUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data))
        });
    }
}
export const actUpdateProduct = (product) => {
    return {
        type: types.UPDATE_PRODUCT,
        product
    }
}

//3.6 Fillter Table Product 
export const actFilterProduct = (filter) => {
    return {
        type: types.FILTER_PRODUCT,
        filter
    }
}
//3.7 Search Product
export const actSeachProduct = (keyword) => {
    return {
        type: types.SEARCH_PRODUCT,
        keyword
    }
}



// 4.User Admin
// 4.1 All Users
export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data))
        });
    }
}
export const actFetchUsers = (users) => {
    return {
        type: types.FETCH_USERS,
        users
    }
}

// 4.2 Delete User
export const actDeleteUserRequest = (id) => {
    return (dispatch) => {
        return callApi(`users/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteUser(id))
        });
    }
}
export const actDeleteUser = (id) => {
    return {
        type: types.DELETE_USER,
        id
    }
}

//4.3 Add User
export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return callApi('users/', 'POST', user).then(res => {
            dispatch(actAddUser(res.data))
        });
    }
}
export const actAddUser = (user) => {
    return {
        type: types.ADD_USER,
        user
    }
}

//4.4 User to Update
export const actGetUserRequest = (id) => {
    return (dispatch) => {
        return callApi(`users/${id}`, 'GET', null).then(res => {
            dispatch(actGetUser(res.data))
        });
    }
}
export const actGetUser = (user) => {
    return {
        type: types.EDIT_USER,
        user
    }
}

//4.5 Update User
export const actUpdateUserRequest = (user) => {
    return (dispatch) => {
        return callApi(`users/${user.id}`, 'PUT', user).then(res => {
            dispatch(actUpdateUser(res.data))
        });
    }
}
export const actUpdateUser = (user) => {
    return {
        type: types.UPDATE_USER,
        user
    }
}
//4.6 Search User
export const actSeachUser = (keyword) => {
    return {
        type: types.SEARCH_USER,
        keyword
    }
}


//5 Login
// 5.1 Login Request

export const loginRequest = (email, password) => {
    return (dispatch) => {
        return callApi(`users/?email=${email}&&password=${password}`, 'GET', null).then(res => {
            if (res.data.length === 1) {
                dispatch(login(res.data[0]))
                dispatch(success())
                dispatch(alertSuccess('Registration successful'))
            } else {
                dispatch(failure())
                dispatch(alertFailure('Username or password is incorrect'))
            }
        });
    }
}
export const login = (user) => {
    return {
        type: types.LOGIN_REQUEST,
        user
    }
}

// 5.2 Logout Request
export const logoutRequest = () => {
    return (dispatch) => {
        dispatch(logout())
        dispatch(loginClear())
    }
}
export const logout = () => {
    return {
        type: types.LOGOUT,
    }
}
export const loginClear = () => {
    return {
        type: types.LOGIN_CLEAR,
    }
}
// 5.3 Authentication
export const success = () => {
    return {
        type: types.LOGIN_SUCCESS,
    }
}

export const failure = () => {
    return {
        type: types.LOGIN_FAILURE,
    }
}



// 6.1 Login Request
export const registerRequest = (email, password) => {
    var user = {
        email: email,
        password: password,
        isAdmin: 0
    }
    return (dispatch) => {
        return callApi('users/', 'POST', user).then(res => {
            if (res.data) {
                dispatch(register(res.data))
                dispatch(success())
                dispatch(alertSuccess('Registration successful'))
            } else {
                dispatch(failure())
                dispatch(alertFailure('Registration is failed'))
            }
        });
    }
}
export const register = (user) => {
    return {
        type: types.REGISTER_REQUEST,
        user
    }
}



//7. Alert for Login
// 7.1 Login Sussess
export const alertSuccess = (message) => {
    return {
        type: types.ALERT_SUCCESS,
        message
    }
}
// 7.2 Login Fail
export const alertFailure = (message) => {
    return {
        type: types.ALERT_ERROR,
        message
    }
}

// 8 .Cart 
// 8.1 Add Product to Cart
export const actAddToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
// 8.2 Detete Product Cart
export const actDeleteProductInCart = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}
// 8.3 Update Product Cart
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
// 8.4 Checkout 
export const actAddOrderRequest = (order) => {
    return (dispatch) => {
        return callApi('orders/', 'POST', order).then(res => {
            dispatch(actAddOrder(res.data))
        });
    }
}
export const actAddOrder = (order) => {
    return {
        type: types.CHECKOUT_CART,
        order
    }
}
// 8.5 Message for Cart
export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
}



//9 . Order Admin
//9 . Order Admin
// 9.1 All Orders
export const actFetchOrdersRequest = () => {
    return (dispatch) => {
        return callApi('orders', 'GET', null).then(res => {
            dispatch(actFetchOrders(res.data))
        });
    }
}
export const actFetchOrders = (orders) => {
    return {
        type: types.FETCH_ORDERS,
        orders
    }
}

//9.2 Delete Order
export const actDeleteOrderRequest = (id) => {
    console.log("id",id);
    return (dispatch) => {
        return callApi(`orders/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteOrder(id))
        });
    }
}
export const actDeleteOrder = (id) => {
    console.log("id",id);
    return {
        type: types.DELETE_ORDER,
        id
    }
}


//trending laptop + phone
export const actFetchTrendingLaptopsRequest = () => {

    return (dispatch) => {
        var result = [];
        var phones = [];

        callApi('type/2/category?_embed=products', 'GET', null).then(res => {
            var laptop = [];
            result = res.data;
            result.forEach(item => item.products.forEach((product) => { if (product.trending == 1) laptop.push(product) }));
            return dispatch(actFetchTrendingLaptops(laptop));
        });

    }
}
export const actFetchTrendingPhonesRequest = () => {

    return (dispatch) => {
        var result = [];
        callApi('type/1/category?_embed=products', 'GET', null).then(res => {
            var phone = [];
            result = res.data;
            result.forEach(item => item.products.forEach((product) => { if (product.trending == 1) phone.push(product) }));
            return dispatch(actFetchTrendingPhones(phone));
        });

    }
}
export const actFetchTrendingProductsRequest = () => {
    return (dispatch) => {
        return callApi('products/?trending=1', 'GET', null).then(res => {
            dispatch(actTrendingFetchProducts(res.data))
        });
    }
}

export const listPhoneTrending = () => {
    return {
        type: types.LIST_PHONE_TRENDING
    }
}
export const listLatopTrending = () => {
    return {
        type: types.LIST_LAPTOP_TRENDING
    }
}





/*
    <TuanAnh>
*/

export const actFetchProductPhoneOrLapRequest = (id) => {
    return (dispatch) => {
        return callApi(`type/${id}/category?_embed=products`, 'GET', null).then(res => {
            let products = [];
            res.data.map((category, key) =>
                category.products.map((product, key) => products.push(product)));
            dispatch(actFetchProductPhoneOrLap(products));
        });
    }
}

export const actFetchProductPhoneOrLap = (products) => {
    return {
        type: types.LIST_PRODUCT_PHONE_OR_LAPTOP,
        products
    }
}
//////////////////////////
export const actFetchPhonesRequest = () => {
    return (dispatch) => {
        return callApi(`type/1/category?_embed=products`, 'GET', null).then(res => {
            let phones = [];
            res.data.map((category, key) =>
                category.products.map((phone, key) => phones.push(phone)));
            dispatch(actFetchProductPhoneOrLap(phones));
        });
    }
}

export const actFetchPhones = (phones) => {
    return {
        type: types.LIST_PHONE,
        phones
    }
}

export const actFetchLapsRequest = () => {
    return (dispatch) => {
        return callApi(`type/2/category?_embed=products`, 'GET', null).then(res => {
            let laptops = [];
            res.data.map((category, key) =>
                category.products.map((laptop, key) => laptops.push(laptop)));
            dispatch(actFetchProductPhoneOrLap(laptops));
        });
    }
}

export const actFetchLaps = (laptops) => {
    return {
        type: types.LIST_LAPTOP,
        laptops
    }
}
//////////////////

export const actFetchCategoriesRequest = (id) => {
    return (dispatch) => {
        return callApi(`category?typeId=${id}`, 'GET', null).then(res => {
            dispatch(actFetchCategories(res.data))
        });
    }
}

export const actFetchCategories = (categories) => {
    return {
        type: types.LIST_CATEGORY,
        categories
    }
}

export const actSelectedCategory = (id) => {
    return {
        type: types.SELECTED_CATEGORY,
        id
    }
}

export const actFetchProductWithIdRequest = (id) => {
    return (dispatch) => {
        return callApi(`products?categoryId=${id}`, 'GET', null).then(res => {
            dispatch(actFetchProductWithId(res.data))
        });
    }
}

export const actFetchProductWithId = (products) => {
    return {
        type: types.LIST_PRODUCT_WITH_CATEGORY_ID,
        products
    }
}

export const actFetchProductWithProductIdRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actFetchProductWithProductId(res.data))
        });
    }
}

export const actFetchProductWithProductId = (product) => {
    return {
        type: types.SELECTED_PRODUCT,
        product
    }
}

export const actFetchCommentsRequest = () => {
    return (dispatch) => {
        return callApi(`comments?_sort=id&_order=desc`, 'GET', null).then(res => {
            dispatch(actFetchComments(res.data));
        });
    }
}

export const actFetchComments = (comments) => {
    return {
        type: types.LIST_COMMENT,
        comments
    }
}


/*
    </TuanAnh>
*/

