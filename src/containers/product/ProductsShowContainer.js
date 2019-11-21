import React,{Component} from 'react';
import ProductsShowFilter from '../../components/product/products_show/ProductsShowFilter';
import ProductsShowListProducts from '../../components/product/products_show/ProductsShowListProducts';  
import { actFetchProductsRequest } from './../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ProductsShowContainer extends Component{
    render(){

        return(
            <div id = "ProductsShowPage">
                <ProductsShowFilter type_id = {this.props.type_id}/>
                <ProductsShowListProducts 
                    products = {this.props.products} 
                    fetchProductsRequest = {this.props.fetchProductsRequest}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchProductsRequest : actFetchProductsRequest}, dispatch)    
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShowContainer);