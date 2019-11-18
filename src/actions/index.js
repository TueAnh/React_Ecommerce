import * as types from './../constants/ActionTypes'
import callApi from './../utils/apiCaller'

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
// get all products
export const actTrendingFetchProducts = (trendingproducts) => {
    return {
        type: types.FETCH_TRENDING_PRODUCTS,
        trendingproducts
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
        return callApi(`products/${id}`, 'DELETE',null).then(res => {
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