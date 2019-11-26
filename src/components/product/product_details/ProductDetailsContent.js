import React, { Component } from 'react';
import './ProductDetailsContent.css';
import { Link } from 'react-router-dom'

class ProductDetailsContent extends Component {
    constructor(props) {
        super(props);
        this.setStar = this.setStar.bind(this);
    }

    setStar = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars[i] = <span class="fa fa-star"></span>;
            }
            else {
                if (rating > i - 1)
                    stars[i] = <span class="fa fa-star-half-o"></span>
                else
                    stars[i] = <span class="fa fa-star-o"></span>
            }
        }
        return (
            <div>
                {stars[1]}{stars[2]}{stars[3]}{stars[4]}{stars[5]}
            </div>
        );
    }

    insertDot = (price) => {
        price = parseInt(price);
        let priceHaveDot = "";
        while (price > 1000) {
            let temp = (price % 1000);
            if(temp == 0)
                temp = "000";
            if(priceHaveDot)
                priceHaveDot = temp + "." + priceHaveDot;
            else
                priceHaveDot = temp;
            price /= 1000;
        }
        priceHaveDot = parseInt(price) + "." + priceHaveDot;
        return priceHaveDot;
    }

    render() {
        let styleProductDetailsContent = {
            textAlign: this.props.textAlign,
            display: this.props.contentDisplay,
            width: this.props.contentWidth,
            margin: this.props.contentMargin,
            padding: this.props.contentPadding,
        };

        let styleProductDetailsContentImg = {
            height: this.props.imgHeight,
            width: this.props.imgWidth,
            margin: this.props.marginElement

        };

        let styleH1 = {
            fontSize: this.props.h1FontSize,
            height: this.props.h1Height,
            margin: this.props.marginElement
        };

        let styleH3 = {
            fontSize: this.props.h3FontSize,
            margin: this.props.marginElement

        };

        let styleSpan = {
            fontSize: this.props.spanFontSize,
            margin: this.props.marginElement
        }

        let styleHr = {
            margin: this.props.marginElement
        }

        let styleButton = {
            fontSize: this.props.buttonFontSize,
        }

        let styleImgDiv = {
            height: this.props.imgDivHeight,
            width: this.props.imgDivWidth,
            margin: this.props.imgDivMargin,

        }
        let styleDISCOUNT = {
            lineHeight: "25px",
            borderRadius: "15px",
            height: "25px",
            background: "red",
            color: "white",
            marginBottom: "10px"
        }
        let id = "";
        let still = "";
        let { product } = this.props
        let normal = this.setStar(product.rating)
        let discount = 0;
        if(this.props.discount != undefined){
            normal = <div style={styleDISCOUNT}> GIẢM {this.insertDot(this.props.discount)} ₫</div>;
            discount = parseInt(this.props.discount);
            id = "h3";
            still = "CÒN "
        }
        
        let hr = <hr style={styleHr} />
        let description = product.description.split('/');
        return (
            <div className="ProductDetailsContent" style={styleProductDetailsContent}>
                <div style={styleImgDiv} >
                    <Link to={`/product/${product.id}`}><img style={styleProductDetailsContentImg} src={product.image} /></Link>
                </div>
                <div className="Info" >
                    <Link to={`/product/${product.id}`}><h1 style={styleH1}>{product.name}</h1></Link>
                    {normal}
                    {hr}
                    <h3 id={id} style={styleH3} >{still}{this.insertDot(parseInt(product.price) - discount)} ₫</h3>
                    {hr}
                    {
                        description.map((item, key) => {
                            if (item != "" && this.props.showInfo == "true")
                                return <span style={styleSpan} key={key}>{item}{hr}</span>
                            return ""
                        }
                        )
                    }
                    <button style={styleButton} onClick={() => {this.props.onAddToCart(this.props.product,1)}}><span class="glyphicon glyphicon-shopping-cart"></span> MUA NGAY</button>
                </div>
            </div>
        )
    }
}

export default ProductDetailsContent;