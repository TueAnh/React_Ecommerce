import React from 'react';
import { connect } from 'react-redux'
import TrendingCarouselItem from '../components/TrendingCarouselItem'
class TrendingCarouselItemContainer extends React.Component {
    render() {
        var { trendingproducts ,trendingcarousel} = this.props
        return (
            <TrendingCarouselItem
                trendingproducts={trendingproducts}
                trendingcarousel ={trendingcarousel}
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
export default connect(mapStateToProps, null)(TrendingCarouselItemContainer);
