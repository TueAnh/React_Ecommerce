import React, { Component } from 'react';
import './ProductsShowFilter.css';

class ProductsShowFilter extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let categories = [
            { "id": 1, "name": "Iphone", "type_id": 1 },
            { "id": 2, "name": "Nokia", "type_id": 1 },
            { "id": 3, "name": "Dell", "type_id": 2 },
            { "id": 4, "name": "Asus", "type_id": 2 },
        ]
        let type = [
            { "id": 1, "name": "Phone" },
            { "id": 2, "name": "Laptop" },
        ]
        return (
            <div id="ProductsShowFilter">
                <ul id="ProductsShowFilterUl">
                    <li className="ProductsShowFilterLi">All</li>
                    {
                        categories.map((category, key) => {

                            if (category.type_id == this.props.type_id) {
                                return (
                                    <li key={key} className="ProductsShowFilterLi">{category.name}</li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ProductsShowFilter;