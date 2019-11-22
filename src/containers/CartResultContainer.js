import React from 'react';
import { connect } from 'react-redux'
import CartResult from '../components/CartComponent/CartResult';
import { actAddOrderRequest,actChangeMessage,actUpdateProductRequest } from './../actions/index';
class CartResultContainer extends React.Component {
    render() {
        var { cart, user, onAddOder, order ,onChangeMessage,onChangeQuantityProductCheckout} = this.props;
        return (
            <CartResult
                cart={cart}
                user={user}
                order={order}
                onAddOder={onAddOder}
                onChangeMessage = {onChangeMessage}
                onChangeQuantityProductCheckout = {onChangeQuantityProductCheckout}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        user: state.user,
        order: state.order
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        //checkout
        onAddOder: (order) => {
            dispatch(actAddOrderRequest(order))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onChangeQuantityProductCheckout :(product)=>{
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartResultContainer);
