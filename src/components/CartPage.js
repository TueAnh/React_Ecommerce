import React from 'react';
import Footer from './../components/Footer';
import ProductsContainer from './../containers/ProductsContainer';
// import Message from './CartComponent/Message';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';
import TrendingCarouselContainer from './../containers/TrendingCarouselContainer'
class CartPage extends React.Component {
    render() {
        return (
            <div>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                {/* <ProductsContainer/> */}
                <TrendingCarouselContainer />
                {/* <!-- Message --> */}
                <MessageContainer/>
                {/* <!-- Cart --> */}
                <CartContainer/>
            </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer />
    </div>
        );
    }
}
export default CartPage;
