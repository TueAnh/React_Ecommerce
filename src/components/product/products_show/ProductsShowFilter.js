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
        let lov = e.target.lov;
        let _style = [];
        console.log(lov);
        if(id == 0)
            this.props.fetchProductPhoneOrLapRequest(this.props.type_id);
        else    
            this.props.fetchProductWithIdRequest(id);
        
        // for (let i = 0; i <= this.props.categories.length; i++) {
        //     _style[i] = "";
        //     // if (i == key)
        //     //     _style[i] = {
        //     //         backgroundColor: "#777"
        //     //     }
        // }
        // //console.log(key);
        // this.setState({
        //     style: _style
        // })
    }

    render() {
        let {categories} = this.props
        return (
            <div id="ProductsShowFilter">
                <ul id="ProductsShowFilterUl">
                    <li id="0"
                        lov="0"
                        style={this.state.style[0]}
                        className="ProductsShowFilterLi"
                        onClick={this.onClickEvent}>All</li>
                    {
                        categories.map((category, key) => {
                            return (
                                <li style={this.state.style[key + 1]}
                                    key={key+1}
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