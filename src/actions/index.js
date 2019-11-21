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
// get user-admin
export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('users', 'GET', null).then(res => {
            dispatch(actFetchUsers(res.data))
        });
    }
}
//get all users
export const actFetchUsers = (users) => {
    return {
        type: types.FETCH_USERS,
        users
    }
}
//Delete User
export const actDeleteUserRequest = (id) => {
    return (dispatch) => {
        return callApi(`users/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteUser(res.data))
        });
    }
}
export const actDeleteUser = (id) => {
    return {
        type: types.DELETE_USER,
        id
    }
}
//add User
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
//get User to Update User
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
//Update User
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
export const actAddToCart = (product,quantity) =>{
    return{
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message) =>{
    return{
        type : types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteProductInCart = (product) => {
    return{
        type : types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product,quantity) => {
    return{
        type : types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}

/*
    <TuanAnh>
*/

export const actFetchProductPhoneOrLapRequest = (id) => {
    return (dispatch) => {
        return callApi(`type/${id}/category?_embed=products`, 'GET', null).then(res => {
            let products = [];
            res.data.map((category,key) => 
                category.products.map((product, key) => products.push(product)));
            dispatch(actFetchProductPhoneOrLap(products));
        });
    }
}

export const actFetchProductPhoneOrLap = (products) => {
    return {
        type : types.LIST_PRODUCT_PHONE_OR_LAPTOP,
        products
    }
}

export const actFetchCategoriesRequest = (id) => {
    return (dispatch) => {
        return callApi(`category?typeId=${id}`, 'GET', null).then(res => {
            dispatch(actFetchCategories(res.data))
        });
    }
}

export const actFetchCategories = (categories) => {
    return {
        type : types.LIST_CATEGORY,
        categories
    }
}

export const actSelectedCategory = (id) => {
    return {
        type : types.SELECTED_CATEGORY,
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
        type : types.LIST_PRODUCT_WITH_CATEGORY_ID,
        products
    }
}


/*
    </TuanAnh>
*/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

export const actAddOrderRequest = (order) => {
    return (dispatch) => {
        return callApi('orders/', 'POST', order).then(res => {
            dispatch(actAddOrder(res.data))
        });
    }
}
export const actAddOrder= (order) => {
    return {
        type: types.CHECKOUT_CART,
        order
    }
}