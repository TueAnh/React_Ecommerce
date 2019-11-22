import React from 'react';
import { connect } from 'react-redux'
import Thumbnail from './../components/Thumbnail'
import * as actions from '../actions/index'
class ThumbnailContainer extends React.Component {
    componentDidMount() {
        this.props.fetchAllTrendingLaptops();
    }
    render() {
        var { trendingphone, trendinglaptop, onAddToCart, onChangeMessage } = this.props
        trendingphone = trendingphone.slice(0, 5)
        trendinglaptop = trendinglaptop.slice(0, 5)

        return (
            <>
                <Thumbnail
                    label='ĐIỆN THOẠI NỔI BẬT NHẤT' trending={trendingphone}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                ></Thumbnail>
                <Thumbnail
                    label='MÁY TÍNH NỔI BẬT NHẤT'
                    trending={trendinglaptop}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                ></Thumbnail>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        trendingphone: state.trendingphone,
        trendinglaptop: state.trendinglaptop,
    }
}
const mapDistpatchtoProps = (dispatch) => {
    return {
        fetchAllTrendingLaptops: () => {
            dispatch(actions.actFetchTrendingLaptopsRequest())
        },
        onAddToCart: (product) => {
            dispatch(actions.actAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actions.actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProps, mapDistpatchtoProps)(ThumbnailContainer);
