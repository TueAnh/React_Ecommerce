import React from 'react'
import HomePage from './components/HomePage';
import Register from './components/login_register/Register';
import PhonePage from './components/PhonePage';
import LaptopPage from './components/LaptopPage';
import NotFoundPage from './components/NotFoundPage';
import CartPage from './components/CartPage';
import AdminPage from './components/admin/AdminPage';
 import ProductDetailsPage from './components/product/ProductDetailsPage';
import LoginContainer from './containers/login_register/LoginContainer';
import RegisterContainer from './containers/login_register/RegisterContainer';
const routes = [
    {
        path : '/',
        exact : true,
        main :()=><HomePage/>
    },
    {
        path : '/phone',
        exact : false,
        main :()=><PhonePage/>
    },
    ,
    {
        path : '/laptop',
        exact : false,
        main :()=><LaptopPage/>
    },
    {
        path : '/product/:id',
        exact : false,
        main :()=><ProductDetailsPage/>
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
    {
        path : '',
        exact : true,
        main :()=><NotFoundPage/>
    },
];
export default routes;