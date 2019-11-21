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
import authentication from './login/authentication'
import user from './login/user'
import alert from './login/alert'
import cart from './cart'
import message from './messege'
import order from './order/order'
import users from './users'
import userEditting from './userEditting'
import orderAdmin from './orderAdmin'
const appReducer = combineReducers({
    products,
    carousel,
    trendingcarousel,
    trendingproducts,
    trendingphone,
    trendinglaptop,
    productEditting,
    filterProduct,
    searchProduct,
    authentication,
    user,
    alert,
    cart,
    message,
    order,
    users,
    userEditting,
    orderAdmin

});
export default appReducer;