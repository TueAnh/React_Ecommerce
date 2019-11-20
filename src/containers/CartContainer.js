import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from './../components/CartComponent/Cart'
import * as Message from './../constants/Message'
import CartItem from '../components/CartComponent/CartItem';
import CartResult from '../components/CartComponent/CartResult';
import {actDeleteProductInCart, actChangeMessage,actUpdateProductInCart} from './../actions/index';
// import message from '../reducers/messege';
class CartContainer extends React.Component {
    render() {
        var  {cart} = this.props;
        // console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {/* tính tông tiền */}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) =>{
        var {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} = this.props;
        var result = <tr>
            <td><h3>{Message.MSG_CART_EMPTY}</h3></td>
        </tr>;
        if(cart.length > 0){
            result = cart.map((item,index) =>{
                return (
                    <CartItem
                    key ={index}
                    item={item}
                    index = {index}
                    onDeleteProductInCart = {onDeleteProductInCart}
                    onChangeMessage = {onChangeMessage}
                    onUpdateProductInCart = {onUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length >0){
            result = < CartResult cart = {cart} />
        }
        return result;

    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            // category: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            trending: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired
}
const mapStateToProps = state => {
    return{
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actDeleteProductInCart(product));
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart : (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
