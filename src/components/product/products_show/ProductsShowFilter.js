import React, { Component } from 'react';
import './ProductsShowFilter.css';
import { delay } from 'q';

class ProductsShowFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {0:{backgroundColor: "#e7e7e7"}}
        }
    }

    delayOfMe = () =>{
        let sum = 0;
        for(let i = 1; i < 1e8; i++){
            sum = sum + i - 100000;
        }
    }


    onClickEvent = (e) => {
        let id = e.target.id;
        let _style = {};
        _style[0] = {};
        if(id == 0){
            this.props.fetchProductPhoneOrLapRequest(this.props.type_id);
            _style[0] = {
                backgroundColor: "#e7e7e7",
            }
        }
        else    
            this.props.fetchProductWithIdRequest(id);
        
        this.props.categories.map((category, key) => {
            _style[category.name] = {};
            if(category.id == id)
                _style[category.name] = {
                    backgroundColor: "#e7e7e7",	                
                }
        })
        this.setState({
            style: _style
        })
    }

    render() {
        let {categories} = this.props;
        return (
            <div id="ProductsShowFilter">
                <ul id="ProductsShowFilterUl">
                    <li id="0"
                        lov="0"
                        style={this.state.style[0]}
                        className={`ProductsShowFilterLi animation-${1}`}
                        onClick={this.onClickEvent}>All</li>
                    {
                        categories.map((category, key) => {
                            return (
                                <li style={this.state.style[category.name]}
                                    key={key+1}
                                    className={`ProductsShowFilterLi animation-${key+2}`}
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