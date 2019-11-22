import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import * as Message from './../../constants/Message'
class CartResult extends React.Component {
    onCheckout = (user, _order) => {
        // console.log(user)
        // if (!user.email) {
        //     if (confirm('You must login to Checkout ? ')) {// eslint-disable-line
        //         // return (<Redirect to='/login/' />); ??? wwhy not 
        //     }
        // }
        this.props.onAddOder(_order);
        this.props.onChangeMessage(Message.MSG_CHECKOUT);
    }
    render() {
        var { cart, user } = this.props;
        var total = this.showTotalAmount(cart)
        var _order = {
            user_order: user,
            products_order: cart,
            total: total,
            status: "accept"
        };

        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{total}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light"
                        onClick={() => this.onCheckout(user, _order)}
                    >
                        Complete purchase
                    </button>
                </td>
            </tr>
        );
    }
    showTotalAmount = (cart) => {
        var total = 0;
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].product.price * cart[i].quantity;
            }

        }
        return total;
    }
}
export default CartResult;
