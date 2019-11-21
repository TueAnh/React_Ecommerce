import React from 'react';
import * as Message from './../../constants/Message'
import './../layout/CartItem.css';
class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    render() {
        var { item } = this.props;
        var { quantity } = item.quantity > 0 ? item : this.state;
        return (
            <tr>
                <th scope="row">
                    <div className="center-text-1">
                        <img src={item.product.image}

                            alt={item.product.name} className="img-fluid z-depth-0 imgcart" />
                    </div>

                </th>
                <td>
                    <h5 className="center-text">
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td><h4 className="center-text">{item.product.price}$</h4></td>

                <td className="center-on-small-only">
                    <div className="center-text">
                        {/* <span className="qty"> {quantity}</span> */}
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                                className=" button1 btn btn-primary btn-rounded waves-effect waves-light"
                            >
                                <a>—</a>
                            </label>
                            <table
                                className=" button2 btn btn-rounded waves-effect waves-light"
                            >
                                {quantity}
                            </table>
                            <label
                                onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            // className=" button1 btn btn-primary btn-rounded waves-effect waves-light"
                            >
                                <a>+</a>
                            </label>
                        </div>
                    </div>

                </td>
                <td> <h4 className="center-text">{this.showSubTotal(item.product.price, item.quantity)}$</h4></td>

                <td>
                    <div className="center-text-2">
                        <button type="button"
                            className="button waves-effect waves-light"
                            data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Remove item"
                            onClick={() => this.onDelete(item.product)
                            }
                        >
                            Xoá
                    </button>
                    </div>

                </td>
            </tr>
        );
    }
    onDelete = (product) => {
        // console.log(product);
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            this.setState({
                quantity: quantity
            });
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
}
export default CartItem;
