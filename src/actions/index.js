import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'
import { history } from '../_helpers/history';
// Carousel 
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
// Trending Carousel
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
// get Data axios
export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data))
        });
    }
}
// get all products
export const actFetchProducts = (products) => {
    return {
        type: types.FETCH_PRODUCTS,
        products
    }
}

export const actFetchTrendingProductsRequest = () => {
    return (dispatch) => {
        return callApi('products/?trending=1', 'GET', null).then(res => {
            dispatch(actTrendingFetchProducts(res.data))
        });
    }
}
//trending laptop
export const actFetchTrendingLaptopsRequest = () => {

    return (dispatch) => {  
        var result = [];
        var phones = [];
        
         callApi('type/2/category?_embed=products', 'GET', null).then(res =>{ 
             var laptop = [];
             result = res.data;
             result.forEach( item=> item.products.forEach((product) => {if (product.trending==1) laptop.push(product)}));
             return dispatch(actFetchTrendingLaptops(laptop));
         });
        
    }
}
// get all products
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
//Admin
//Delete Product
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(res.data))
        });
    }
}
export const actDeleteProduct = (id) => {
    return {
        type: types.DELETE_PRODUCT,
        id
    }
}
//add Product
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
//get Product to Update
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

//Update Product
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
//Fillter table product admin
export const actFilterProduct = (filter) => {
    return {
        type: types.FILTER_PRODUCT,
        filter
    }
}
//Fillter table product admin
export const actSeachProduct = (keyword) => {
    return {
        type: types.SEARCH_PRODUCT,
        keyword
    }
}

// Login
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

export const logout = () => {
    return {
        type: types.LOGOUT,
    }
}

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
export const loginClear = () => {
    return {
        type: types.LOGIN_CLEAR,
    }
}
// logout + loginClear
export const logoutRequest = () => {
    return (dispatch) => {
        dispatch(logout())
        dispatch(loginClear())
    }
}
//Register 
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
// alert logins
export const alertSuccess = (message) => {
    return {
        type: types.ALERT_SUCCESS,
        message
    }
}

export const alertFailure = (message) => {
    return {
        type: types.ALERT_ERROR,
        message
    }
}