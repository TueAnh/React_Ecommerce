import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
import * as Message from './../constants/Message';
class ThumbnailItem extends React.Component {
    render() {
        var { trendingSmall } = this.props
        return (
            <>
                {this.showThumbItem(trendingSmall)}
            </>
        );
    }
    showThumbItem = (trendingSmall) => {
        return (
            trendingSmall.map((item, index) => {
                return (
                    <div key={index} className="col-md-2 mt-50">
                        <a >
                            <img src={item.image} alt="product.name" style={{ width: '100%' }} />
                            <label className="installment">Trả góp 0%</label>
                        </a>
                        <div className="price ml-10 mt-10 mb-10  "><strong>{item.price}</strong></div>
                        <div className="promo noimage">
                            <p> Mua kèm Office 365 Personal giảm 600.000đ và <b>1 K.mãi</b> khác</p>
                        </div>
                        <a
                            className="btn btn-primary"
                            onClick={() => this.onAddToCart(item)}
                        >Add to Cart</a>
                    </div>
                );
            })
        );
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }

}

export default ThumbnailItem;
