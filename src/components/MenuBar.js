import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { history } from '../_helpers/history';
import MenuContainer from './../containers/MenuContainer';
import routes from './../routes';
// import ProductsShowContainer from '../containers/product/ProductsShowContainer';
// import  ProductDetailsPage from '../components/product/product_details/ProductDetailsPage';
// import ProductsShowListProducts from '../components/product/products_show/ProductsShowListProducts';
// import ProductDetailsContent from '../components/product/product_details/ProductDetailsContent'

class MenuBar extends React.Component {
    routerLinkMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                    
                );
            });
        }
        return <Switch>
                    {result}    
                </Switch>;
    }
    render() {
        return (    
            <Router history={history}>  
                <MenuContainer />
                {this.routerLinkMenu(routes)}
            </Router>
        );
    }
}
export default MenuBar;
