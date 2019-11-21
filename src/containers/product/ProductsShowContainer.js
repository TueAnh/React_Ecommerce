import React, { Component } from 'react';
import ProductsShowFilter from '../../components/product/products_show/ProductsShowFilter';
import ProductsShowListProducts from '../../components/product/products_show/ProductsShowListProducts';
import { actFetchProductsRequest, actFetchCategoriesRequest, 
        actFetchProductPhoneOrLapRequest } from './../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
class ProductsShowContainer extends Component {
    render() {

        return (
            <div id="ProductsShowPage">
                <ProductsShowFilter 
                    type_id={this.props.type_id}
                    categories={this.props.categories}
                    fetchCategoriesRequest={this.props.fetchCategoriesRequest}/>
                <ProductsShowListProducts
                    type_id={this.props.type_id}
                    productsPhonesOrLaptops={this.props.productsPhonesOrLaptops}
                    fetchProductPhoneOrLapRequest={this.props.fetchProductPhoneOrLapRequest} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        productsPhonesOrLaptops: state.productsPhonesOrLaptops,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCategoriesRequest : bindActionCreators(actFetchCategoriesRequest,dispatch),
    fetchProductPhoneOrLapRequest : bindActionCreators(actFetchProductPhoneOrLapRequest,dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShowContainer);