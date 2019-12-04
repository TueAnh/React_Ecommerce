import React from 'react';
// import CartItem from './CartItem'
// import CartResult from './CartResult';
import './../layout/CartItem.css';
class Cart extends React.Component {
    render() {
        var { children } = this.props;
        return (
            <section className="section">
                <thead>
                    <tr>
                        <th className="center-me-1"></th>
                        <th className="center-me-2"><p>Sản Phẩm</p></th>
                        <th className="center-me-3"><p>Giá</p></th>
                        <th className="center-me-4"><p>Số Lượng</p></th>
                        <th className="center-me-5"><p>Tổng Cộng</p></th>
                        <th className="center-me-6"></th>
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </section>
        );
    }
}
export default Cart;
