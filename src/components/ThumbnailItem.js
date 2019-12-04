import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
import { Link } from 'react-router-dom'
import * as Message from './../constants/Message';
import ProductDetailsContent from './product/product_details/ProductDetailsContent'

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
        let styleH1 = this.props.type == "1"? "30px":"45px";
        let styleImg = this.props.type == "1"? "180px":"120px";
        return (
            trendingSmall.map((item, index) => {
                return (
                    // <div key={index} className="col-md-2 mt-50">
                    //     <Link to={`/product/${item.id}`}>
                    //         <img src={item.image} alt="product.name" style={{ width: '100%' }} />
                    //         <label className="installment">Trả góp 0%</label>
                    //     </Link>
                    //     <div>
                    //      <div className="price ml-10 mt-10 mb-10  "><strong>{this.insertDot(item.price)}₫</strong></div>
                    //     <a
                    //         className="btn btn-primary"
                    //         onClick={() => this.onAddToCart(item)}
                    //     >Add to Cart
                    //     </a>   
                    //     </div>   
                    // </div>
                    <ProductDetailsContent
                        product={item}
                        textAlign="center"
                        contentDisplay="block"
                        contentMargin="10px"
                        contentWidth="15%"
                        contentHeight="100px"
                        imgWidth="100%"
                        imgDivWidth="100%"
                        imgDivHeight={styleImg}
                        imgDivMargin=""
                        h1FontSize="15px"
                        h1Height={styleH1}
                        h3FontSize="14px"
                        spanFontSize="14px"
                        buttonFontSize="14px"
                        marginElement="2px"
                        showInfo="false"
                        onAddToCart={this.props.onAddToCart}
                    />
                );
            })
        );
    }
    insertDot = (p) => {
        var price = p;
        price = parseInt(price);
        let priceHaveDot = "";
        while (price > 1000) {
            let temp = (price % 1000);
            if (temp == 0)
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

export default ThumbnailItem;
