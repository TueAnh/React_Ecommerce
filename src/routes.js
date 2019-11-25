import React from 'react'
import HomePage from './components/HomePage';
import Register from './components/login_register/Register';
import PhonePage from './components/PhonePage';
import LaptopPage from './components/LaptopPage';
import NotFoundPage from './components/NotFoundPage';
import CartPage from './components/CartPage';
import AdminPage from './components/admin/AdminPage';
import ProductDetailsPage from './components/product/product_details/ProductDetailsPage';
import LoginContainer from './containers/login_register/LoginContainer';
import RegisterContainer from './containers/login_register/RegisterContainer';
import ProductsShowPage from './components/product/products_show/ProductsShowPage';
import ProductsShowContainer from './containers/product/ProductsShowContainer'
import ProductDetailsContainer from './containers/product/ProductDetailsContainer'
const routes = [
    {
        path : '/',
        exact : true,
        main :()=><HomePage/>
    },
    {
        path : '/phone',
        exact : false,
        main :({match})=><ProductsShowContainer type_id = "1" match={match}/>
    },
    {
        path : '/laptop',
        exact : false,
        main :()=><ProductsShowContainer type_id = "2"/>
    },
    {
        path : '/product/:id',
        exact : false,
        main :({match})=><ProductDetailsContainer match={match}/>
    },
    {
        path : '/login',
        exact : false,
        main :()=><LoginContainer/>
    }
    ,
    {
        path : '/register',
        exact : false,
        main :()=><RegisterContainer/>
    },
    {
        path : '/cart',
        exact : false,
        main :()=><CartPage/>
    },
    {
        path : '/admin',
        exact : true,
        main :()=><AdminPage/>
    },
   
];

export default routes;