import React from 'react';
import * as Message from './../constants/Message';
import {Link} from 'react-router-dom'
import ProductDetailsContent from './product/product_details/ProductDetailsContent'


class TrendingCarouselItem extends React.Component {
    render() {
        var sale = Math.floor(Math.random() *100);
        var { trendingproducts, trendingcarousel } = this.props;
        var active = 'active'
        return (
            <div className="carousel-inner">
                {this.showTrendingItem(trendingproducts,sale, trendingcarousel)}
            </div>
        );

    }
    showTrendingItem = (trendingproducts,sale, trendingcarousel) => {
        var result = [];
        for (let i = 0; i < trendingproducts.length; i += 4) {
            var active = '';
            if ((i) / 4 === trendingcarousel) {
                active = 'active'
            }
            result.push(this.showContent(trendingproducts.slice(i, i + 4),sale, active,i));
        }
        return result;
    }
    showContent = (trendingproducts,sale, active, i) => {
        let style = {
            display: "flex",
        }
        return (
            <div key ={i}className={`item carousel-item ${active}`}>
                <div style={style}>
                    {trendingproducts.map((product, index) => {
                        return (
                            // <div key={index} className="col-sm-3">
                            //     <div className="thumb-wrapper">
                            //         <div className="img-box">
                            //             <Link to={`/product/${product.id}`}>
                            //             <img src={product.image} className="img-responsive img-fluid" alt={product.name} />
                            //             </Link>
                            //         </div>
                            //         <div className="thumb-content">
                            //             <h4>{product.name}</h4>
                            //             <p className="item-price"> <span>{this.insertDot(product.price)}₫</span></p>
                            //             <div className="star-rating">
                            //                 <ul className="list-inline">
                            //                     <li className="list-inline-item">
                            //                         {this.showRating(product.rating)}
                            //                     </li>
                            //                 </ul>
                            //             </div>
                            //             <a 
                            //              className="btn btn-primary"
                            //             onClick = {() => this.onAddToCart(product)}
                            //             >Add to Cart</a>
                            //         </div>
                            //     </div>
                            // </div>
                            <ProductDetailsContent 
                                product = {product} 
                                textAlign = "center"
                                contentDisplay = "block"
                                contentMargin = "10px"
                                contentWidth = "25%"
                                contentHeight = "100px"
                                imgWidth = "100%"
                                imgDivWidth = "100%"
                                imgDivHeight = "auto"
                                imgDivMargin = ""
                                h1FontSize = "15px"
                                h1Height = "30px"
                                h3FontSize = "20px"
                                spanFontSize = "14px"
                                buttonFontSize = "14px"
                                marginElement = "2px"
                                showInfo = "false"
                                onAddToCart={this.props.onAddToCart}
                                discount = "500000"
                            />
                        );
                    })}
                </div>
            </div>
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
    onAddToCart =(product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS);
    }
    showRating = (rate) => {
        rate= rate> 5 ? 5 :rate;
        if (rate > 0) {
            var result = [];
            for (let i = 1; i <= rate; i++) {
                result.push(<i key={i} className="fa fa-star" />);
            }
            for (let i = 1; i <= 5 - rate; i++) {
                result.push(<i key={i + rate} className="fa fa-star-o" />);
            }
            return result;
        }
    }
}
export default TrendingCarouselItem;
