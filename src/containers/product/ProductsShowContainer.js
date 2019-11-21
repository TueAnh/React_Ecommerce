import React, { Component } from 'react';
import ProductsShowFilter from '../../components/product/products_show/ProductsShowFilter';
import ProductsShowListProducts from '../../components/product/products_show/ProductsShowListProducts';
import {
    actFetchProductWithIdRequest, 
    actFetchCategoriesRequest,
    actFetchProductPhoneOrLapRequest,
    actSelectedCategory
} from './../../actions/index'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
class ProductsShowContainer extends Component {
    
    componentDidMount() {
        this.props.fetchCategoriesRequest(this.props.type_id);
        this.props.fetchProductPhoneOrLapRequest(this.props.type_id);
    }

    render() {
        return (
            <div id="ProductsShowPage">
                <ProductsShowFilter
                    type_id={this.props.type_id}
                    categories={this.props.categories}
                    fetchProductWithIdRequest={this.props.fetchProductWithIdRequest}
                    fetchProductPhoneOrLapRequest={this.props.fetchProductPhoneOrLapRequest}
                    />
                <ProductsShowListProducts
                    type_id={this.props.type_id}
                    productsPhonesOrLaptops={this.props.productsPhonesOrLaptops} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        productsPhonesOrLaptops: state.productsPhonesOrLaptops,
        selectedCategory: state.selectedCategory,
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCategoriesRequest: bindActionCreators(actFetchCategoriesRequest, dispatch),
    fetchProductPhoneOrLapRequest: bindActionCreators(actFetchProductPhoneOrLapRequest, dispatch),
    selectedCategoryFunc: bindActionCreators(actSelectedCategory, dispatch),
    fetchProductWithIdRequest: bindActionCreators(actFetchProductWithIdRequest, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsShowContainer);