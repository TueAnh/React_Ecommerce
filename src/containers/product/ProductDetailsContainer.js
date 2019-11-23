import React, { Component } from 'react';
import ProductDetailsPage from '../../components/product/product_details/ProductDetailsPage'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    actFetchProductWithProductIdRequest,
    actFetchCommentsRequest,
    actAddCommentRequest,
    actAddToCart
} from './../../actions/index'
class ProductDetailsContainer extends Component {
    render () {
        return (
            
            <ProductDetailsPage 
                    id={this.props.match.params.id}
                    product={this.props.product}
                    fetchProductWithProductIdRequest={this.props.fetchProductWithProductIdRequest}
                    comments={this.props.comments}
                    fetchCommentsRequest={this.props.fetchCommentsRequest}
                    addCommentRequest={this.props.addCommentRequest}
                    onAddToCart={this.props.onAddToCart}
                />
        )
    }
}

const mapStateToProps = (state) => ({
    product : state.product,
    comments : state.comments
})

const mapDispatchToProps = (dispatch) => ({
    fetchCommentsRequest: bindActionCreators(actFetchCommentsRequest, dispatch),
    fetchProductWithProductIdRequest: bindActionCreators(actFetchProductWithProductIdRequest, dispatch),
    addCommentRequest: bindActionCreators(actAddCommentRequest, dispatch),
    onAddToCart: bindActionCreators(actAddToCart, dispatch),

})

export default connect(mapStateToProps, mapDispatchToProps) (ProductDetailsContainer);