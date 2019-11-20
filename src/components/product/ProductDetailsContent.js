import React, {Component} from 'react'
import './ProductDetailsContent.css'

class ProductDetailsContent extends Component {
    render() {
        let styleProductDetailsContent = {
            display : this.props.contentDisplay,
            width : this.props.contentWidth,
            margin : this.props.contentMargin,
        };

        let styleProductDetailsContentImg = {
            height : this.props.imgHeight,
            width : this.props.imgWidth,
            margin : this.props.marginElement

        };

        let styleH1 = {
            fontSize : this.props.h1FontSize,
            margin : this.props.marginElement
        };

        let styleH3 = {
            fontSize : this.props.h3FontSize,
            margin : this.props.marginElement

        };

        let styleSpan = {
            fontSize : this.props.spanFontSize,
            margin : this.props.marginElement
        }

        let styleHr = {
            margin : this.props.marginElement
        }

        let hr = <hr style = {styleHr}/>
        let {product} = this.props
        let description = product.product_desciption.split('/');
        return (
            <div className = "ProductDetailsContent" style = {styleProductDetailsContent}>
                <img style = {styleProductDetailsContentImg} src={product.product_image} alt=""/ >
                <div className = "Info" >
                    <h1 style = {styleH1} >{product.product_name}</h1>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    {hr}
                    <h3 style = {styleH3} >{product.product_price}đ</h3>
                    {hr}
                    {
                        description.map((item, key) =>{
                                if(item != "")
                                    return  <span style = {styleSpan} key = {key}>{item}{hr}</span>
                                return ""
                            }
                        )
                    }
                    <button>MUA NGAY</button>
                </div>
            </div>
        )
    }
}

export default ProductDetailsContent;