import React, { Component } from 'react';
import './ProductsShowFilter.css';

class ProductsShowFilter extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchCategoriesRequest(this.props.type_id);
    }

    render() {
        let { type_id ,categories, fetchCategoriesRequest } = this.props
        return (
            <div id="ProductsShowFilter">
                <ul id="ProductsShowFilterUl">
                    <li className="ProductsShowFilterLi">All</li>
                    {
                        categories.map((category, key) => {
                            console.log(category.name);
                            return (
                                <li key={key} className="ProductsShowFilterLi">{category.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ProductsShowFilter;