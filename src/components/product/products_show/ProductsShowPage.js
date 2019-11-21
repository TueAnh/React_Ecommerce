import React,{Component} from 'react';
import ProductsShowFilter from './ProductsShowFilter';
import ProductsShowListProducts from './ProductsShowListProducts';  
import './ProductsShowPage.css';

class ProductsShowPage extends Component{
    render(){

        return(
            <div id = "ProductsShowPage">
                <ProductsShowFilter/>
                <ProductsShowListProducts/>
            </div>
        )
    }
}

export default ProductsShowPage;