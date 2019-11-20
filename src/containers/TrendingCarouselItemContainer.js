import React from 'react';
import { connect } from 'react-redux'
import TrendingCarouselItem from '../components/TrendingCarouselItem'
import {actAddToCart, actChangeMessage} from './../actions/index'
class TrendingCarouselItemContainer extends React.Component {
    render() {
        var { trendingproducts ,trendingcarousel,onAddToCart,onChangeMessage} = this.props
        return (
            <TrendingCarouselItem
                trendingproducts={trendingproducts}
                trendingcarousel ={trendingcarousel}
                onAddToCart = {onAddToCart}
                onChangeMessage = {onChangeMessage}
            >
            </TrendingCarouselItem>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        trendingproducts: state.trendingproducts,
        trendingcarousel : state.trendingcarousel,
    }
}
const mapDispatchToProp = (dispatch,props) =>{
    return{
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(TrendingCarouselItemContainer);
