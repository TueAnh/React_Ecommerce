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