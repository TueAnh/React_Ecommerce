import {combineReducers} from 'redux'
import products from './products'
import carousel from './carousel'
import trendingcarousel from './trendingcarousel'
import trendingproducts from './trendingproducts'
import trendingphone from './trendingphone'
import trendinglaptop from './trendinglaptop'
import productEditting from './productEditting'
import filterProduct from './filterProduct'
import searchProduct from './searchProduct'
const appReducer = combineReducers({
    products,
    carousel,
    trendingcarousel,
    trendingproducts,
    trendingphone,
    trendinglaptop,
    productEditting,
    filterProduct,
    searchProduct
});
export default appReducer;