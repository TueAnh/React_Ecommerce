import React, { Component } from 'react';
import './ProductsShowFilter.css';

class ProductsShowFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: []
        }
    }

    componentDidMount() {
        this.props.fetchCategoriesRequest(this.props.type_id);
        this.props.selectedCategoryFunc(0);
    }

    onClickEvent = (e) => {
        let id = e.target.id;
        let key = e.target.key;
        let _style = []
        this.props.selectedCategoryFunc(id);
        // for (let i = 0; i <= this.props.categories.length; i++) {
        //     _style[i] = "";
        //     // if (i == key)
        //     //     _style[i] = {
        //     //         backgroundColor: "#777"
        //     //     }
        // }
        // console.log(key);
        // this.setState({
        //     style: _style
        // })
    }

    render() {
        let { type_id, categories, fetchCategoriesRequest, selectedCategoryFunc } = this.props
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
                                <li style={this.state.style[key + 1]}
                                    key={key}
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