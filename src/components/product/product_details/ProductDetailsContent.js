import React, {Component} from 'react'
import './ProductDetailsContent.css'

class ProductDetailsContent extends Component {
    constructor(props){
        super(props);
        this.setStar = this.setStar.bind(this);
    }

    setStar = (rating) => {
        let stars = [];
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars[i] = <span class="fa fa-star"></span>;
            }
            else{
                if(rating > i-1)
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

        let styleButton = {
            fontSize : this.props.buttonFontSize,
        }

        let styleImgDiv = {
            height : "200px"
        }

        let hr = <hr style = {styleHr}/>
        let {product} = this.props
        //console.log(product);
        let description = product.description.split('/');
        return (
            <div className = "ProductDetailsContent" style = {styleProductDetailsContent}>
                <div style = {styleImgDiv} >
                    <img style = {styleProductDetailsContentImg} src={product.image} alt=""/ >
                </div>
                <div className = "Info" >
                    <h1 style = {styleH1} >{product.name}</h1>
                    {this.setStar(5)}
                    {hr}
                    <h3 style = {styleH3} >{product.price}đ</h3>
                    {hr}
                    {
                        description.map((item, key) =>{
                                if(item != "" && this.props.showInfo == "true")
                                    return  <span style = {styleSpan} key = {key}>{item}{hr}</span>
                                return ""
                            }
                        )
                    }
                    <button style = {styleButton}><span class="glyphicon glyphicon-shopping-cart"></span> MUA NGAY</button>
                </div>
            </div>
        )
    }
}

export default ProductDetailsContent;