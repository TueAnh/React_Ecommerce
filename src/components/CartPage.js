import React from 'react';
import Footer from './../components/Footer';
import ProductsContainer from './../containers/ProductsContainer';
// import Message from './CartComponent/Message';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';
import TrendingCarouselContainer from './../containers/TrendingCarouselContainer'
class CartPage extends React.Component {
    render() {
        let style = {
            width : "100%"
        }
        return (
            <div>
                <main style={style}>
                    {/* <!-- Products --> */}
                    {/* <ProductsContainer/> */}
                    {/* <TrendingCarouselContainer /> */}
                    {/* <!-- Message --> */}
                    <MessageContainer />
                    {/* <!-- Cart --> */}
                    <CartContainer />
                </main>
                {/* <!-- Footer --> */}
                {/* <Footer /> */}
            </div>
        );
    }
}
export default CartPage;
