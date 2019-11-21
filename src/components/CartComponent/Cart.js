import React from 'react';
// import CartItem from './CartItem'
// import CartResult from './CartResult';
import './../layout/CartItem.css';
class Cart extends React.Component {
    render() {
        var {children} = this.props;
        return (
            <section className="section">
                    <div >
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th><h4 className="center-me">Sản Phẩm</h4></th>
                                    <th><h4 className="center-me">Giá</h4></th>
                                    <th><h4 className="center-me">Số Lượng</h4></th>
                                    <th><h4 className="center-me">Tổng Cộng</h4></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </div>
                </section>
        );
    }
}
export default Cart;
