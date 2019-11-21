import React, { Component } from 'react';
import ProductDetailsContent from '../product_details/ProductDetailsContent'
import './ProductsShowListProducts.css'

class ProductsShowListProducts extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchProductsRequest();
    }

    showProduct = (products) => {
        let rows = []
        let cols = []
        let styleRow = {
            display: "flex"
        };
        for (let i = 0; i < products.length; i += 3) {
            for (let j = i; j <= i + 2 && j < products.length; j++) {
                cols[j % 3] = <ProductDetailsContent
                    product={products[j]}
                    contentDisplay="block"
                    contentMargin="30px"
                    contentWidth="30%"
                    contentHeight="100px"
                    imgWidth="100%"
                    h1FontSize="15px"
                    h3FontSize="14px"
                    spanFontSize="14px"
                    buttonFontSize="14px"
                    marginElement="4px"
                    showInfo="false"
                />
            }
            rows[i/3] = <div style = {styleRow}>
                        {
                            cols.map((col, key) => <>{col}</>) 
                        }   
                        </div>
        }
            return (
                rows.map((row, key) => <>{row}</>)
            )
        }

        render() {
            let { products, fetchProductsRequest } = this.props;
            return (
                <div id="ProductsShowListProducts">
                    {this.showProduct(products)}
                </div>
            );
        }
    }

    export default ProductsShowListProducts;