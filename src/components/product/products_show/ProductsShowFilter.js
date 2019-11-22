import React, { Component } from 'react';
import './ProductsShowFilter.css';

class ProductsShowFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: []
        }
    }

    onClickEvent = (e) => {
        let id = e.target.id;
        let _style = [];
        _style[0] = {}
        if (id == 0) {
            this.props.fetchProductPhoneOrLapRequest(this.props.type_id);
            _style[0] = { backgroundColor: "#e7e7e7" }
        }
        else
            this.props.fetchProductWithIdRequest(id);

        this.props.categories.map((category, key) => {
            _style[category.id] = {}
            if (category.id == id)
                _style[category.id] = { backgroundColor: "#e7e7e7" }
        });


        this.setState({
            style: _style
        })
    }

    render() {
        let { categories } = this.props
        console.log(this.state.style)
        return (
            <div id="ProductsShowFilter">
                <ul id="ProductsShowFilterUl">
                    <li id="0"
                        style={this.state.style[0]}
                        className="ProductsShowFilterLi"
                        onClick={this.onClickEvent}>All</li>
                    {
                        categories.map((category, key) => {
                            return (
                                <li style={this.state.style[category.id]}
                                    className="ProductsShowFilterLi"
                                    onClick={this.onClickEvent}
                                    id={category.id}
                                >{category.name}</li>
                            )

                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ProductsShowFilter;