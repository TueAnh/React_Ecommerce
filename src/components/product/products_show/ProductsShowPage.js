import React,{Component} from 'react';
import ProductsShowFilter from './ProductsShowFilter';
import ProductsShowListProducts from './ProductsShowListProducts';  
import './ProductsShowPage.css';

class ProductsShowPage extends Component{
    render(){

        return(
            <div id = "ProductsShowPage">
                <ProductsShowFilter type_id = {this.props.type_id}/>
                <ProductsShowListProducts/>
            </div>
        )
    }
}

export default ProductsShowPage;