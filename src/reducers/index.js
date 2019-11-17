import {combineReducers} from 'redux'
import products from './products'
import carousel from './carousel'
import trendingcarousel from './trendingcarousel'
import trendingproducts from './trendingproducts'
import trendingphone from './trendingphone'
import trendinglaptop from './trendinglaptop'
import productEditting from './productEditting'
const appReducer = combineReducers({
    products,
    carousel,
    trendingcarousel,
    trendingproducts,
    trendingphone,
    trendinglaptop,
    productEditting
    
});
export default appReducer;