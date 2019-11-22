import React from 'react';
import { connect } from 'react-redux'
import Thumbnail from './../components/Thumbnail'
import * as actions from '../actions/index'
class ThumbnailContainer extends React.Component {
    componentDidMount(){
        this.props.fetchAllTrendingLaptops();
        this.props.fetchAllTrendingPhones();
    }
    render() {
        console.log("props",this.props)
        var { trendingphone, trendinglaptop } = this.props
        trendingphone = trendingphone.slice(0, 5)
        trendinglaptop = trendinglaptop.slice(0, 5)
        return (
            <>
                <Thumbnail label='ĐIỆN THOẠI NỔI BẬT NHẤT' trending={trendingphone} paths='/phone'></Thumbnail>
                <Thumbnail label='MÁY TÍNH NỔI BẬT NHẤT' trending={trendinglaptop} paths='/laptop'></Thumbnail>
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
        fetchAllTrendingLaptops : () =>{
            dispatch(actions.actFetchTrendingLaptopsRequest())
        },
        fetchAllTrendingPhones : () =>{
            dispatch(actions.actFetchTrendingPhonesRequest())
        }
    }
}
export default connect(mapStateToProps, mapDistpatchtoProps)(ThumbnailContainer);
