import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
import './ThumbnailItem'
import ThumbnailItem from './ThumbnailItem';
import * as Message from './../constants/Message';
import {Link} from 'react-router-dom'
class Thumbnail extends React.Component {
    render() {
        var {label,trending,paths} = this.props;
        var trendingBig = trending[0];
        var trendingSmall = trending.slice(1, 5);
        return (
            <>
                <div >
                    <h3 className="mb-10" >{label}</h3>
                    <Link to={paths}> See more </Link>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature">
                                <a>
                                    <img src={trendingBig.image} alt={trendingBig.name} style={{ width: '100%' }} />
                                </a>
                                <h3>{trendingBig.name} </h3>
                            </div>
                            <div className="caption">
                                <div className="price">
                                    <strong>{this.insertDot(trendingBig.price)}₫ </strong>
                                </div>
                            </div>
                            <a
                            className="btn btn-primary"
                            onClick={() => this.onAddToCart(trendingBig)}
                        >Add to Cart</a>
                        </div>
                        <ThumbnailItem trendingSmall={trendingSmall} 
                        onAddToCart={this.props.onAddToCart}
                        onChangeMessage={this.props.onChangeMessage}
                        />
                    </div>
                </div>
            </>

        );
    }
    insertDot = (p) => {
        var price = p ;
        price = parseInt(price);
        let priceHaveDot = "";
        while (price > 1000) {
            let temp = (price % 1000);
            if(temp == 0)
                temp = "000";
            priceHaveDot = temp + "." + priceHaveDot;
            price /= 1000;
        }
        priceHaveDot = parseInt(price) + "." + priceHaveDot;
        return priceHaveDot;
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
}

export default Thumbnail;
