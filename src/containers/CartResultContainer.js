import React from 'react';
import { connect } from 'react-redux'
import CartResult from '../components/CartComponent/CartResult';
import {actAddOrderRequest} from './../actions/index';
class CartResultContainer extends React.Component {
    render() {
        var { cart,user,onAddOder,order } = this.props;
        return (
            <CartResult
                cart={cart}
                user = {user}
                order ={order}
                onAddOder = {onAddOder}

            />
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        user : state.user,
        order : state.order
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        //checkout
        onAddOder: (order) => {
            dispatch(actAddOrderRequest(order))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartResultContainer);
