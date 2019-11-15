import React from 'react';
import { connect } from 'react-redux'
import TrendingCarousel from './../components/TrendingCarousel'
import * as actions from '../actions/index'
class TrendingCarouselContainer extends React.Component {
    componentDidMount(){
        this.props.fectchAllTrendingProducts();
    }
    render() {
        var { trendingproducts, trendingcarousel } = this.props
        var trendingproducts = trendingproducts.slice(0,trendingproducts.length-(trendingproducts.length%4))
        return (
            <TrendingCarousel
                increase={this.controlImageNext}
                reduction={this.controlImagePre}
                length={trendingproducts.length}
                index={trendingcarousel}>
            </TrendingCarousel>
        );
    }
    controlImageNext = () => {
        this.props.increaseTrendingIndex()
    }
    controlImagePre = () => {
        this.props.reductionTrendingIndex()
    }
}
const  mapStateToProps = (state, ownProps) => {
    return {
        trendingproducts: state.trendingproducts,
        trendingcarousel: state.trendingcarousel,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseTrendingIndex: () => {
            dispatch(actions.increaseTrendingIndex())
        },
        reductionTrendingIndex: () => {
            dispatch(actions.reductionTrendingIndex())
        },
        fectchAllTrendingProducts : ()=>{
            dispatch(actions.actFetchTrendingProductsRequest())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrendingCarouselContainer);
