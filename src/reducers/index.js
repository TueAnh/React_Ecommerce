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
import categories from './product/categories'
import productsPhonesOrLaptops from './product/productsPhonesOrLaptops'
import order from './order/order'
import users from './users'
import userEditting from './userEditting'
import searchUser from './searchUser'
import selectedCategory from './product/selectedCategory'
import orderAdmin from './orderAdmin'
import laptops from './product/laptops'
import phones from './product/phones'
import product from './product/product'
import comments from './product/comments'
import comment from './product/comment'

const appReducer = combineReducers({
    comment,
    comments,
    product,
    selectedCategory,
    productsPhonesOrLaptops,
    categories,
    laptops,
    phones,
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
    orderAdmin,
    searchUser

});
export default appReducer;