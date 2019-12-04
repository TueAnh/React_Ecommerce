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
        let style = {
            witdh : "100%"
        }
        var { item } = this.props;
        var { quantity } = item.quantity > 0 ? item : this.state;
        return (
            <>
                <tr>
                    <th scope="row"  className="center-text-1" >
                        <div >
                        <img src={item.product.image}
                            alt={item.product.name}
                            className="img-fluid z-depth-0 imgcart" />
                        </div>
            
                    </th> 
                    <td className="center-text-2" >
                        <p>
                        <strong> {item.product.name} </strong> 
                        </p> 
                    </td> 
                    <td  className="center-text-3"> 
                        <p> {this.showFomatNumber(this.showSubTotal(item.product.price, 1))} </p>
                    </td >

                    <td>
                        <div className="center-text-4">
                            <div className="btn-group radio-group" data-toggle = "buttons" >
                                <label onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
                                        className=" button1 btn btn-primary btn-rounded waves-effect waves-light" >
                                <span class="glyphicon glyphicon-minus"></span></label> 
                                <label className=" button2 btn btn-rounded waves-effect waves-light" > {quantity} </label> 
                                <label onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                                        className=" button1 btn btn-primary btn-rounded waves-effect waves-light" >
                                <span class="glyphicon glyphicon-plus"></span> 
                                </label> 
                            </div> 
                        </div>
                    </td> 
                    <td  className="center-text-5"> 
                        < p > {this.showFomatNumber(this.showSubTotal(item.product.price, item.quantity))} </p>
                    </td >

                    <td>
                    <div className="center-text-6" >
                        <button type="button" className="button waves-effect waves-light" data-toggle = "tooltip"
                                data-placement = "top"
                                title = ""
                                data-original-title = "Remove item"
                            onClick = {() => this.onDelete(item.product)} >Xoá</button> 
                    </div>
                                                                        
                    </td> 
                </tr>
                <hr style = {style}/>
            </>
        );
    }
    showFomatNumber = (a) => {
        var number = a;
        number = number.toLocaleString('vi', {style: 'currency', currency: 'VND' });
        return number;
    }
    onDelete = (product) => {
        // console.log(product);
        var {onDeleteProductInCart, onChangeMessage} = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var {onUpdateProductInCart, onChangeMessage} = this.props;
            this.setState({
                quantity: quantity
            });
            onUpdateProductInCart(product, quantity);
             onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
            console.log(quantity);
        }
        }
    }
export default CartItem;