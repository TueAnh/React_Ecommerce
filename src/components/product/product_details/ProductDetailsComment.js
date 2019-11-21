import React, { Component } from 'react';
import './ProductDetailsComment.css';

class ProductDetailsComment extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating : 0,
            commented : [],
            star : [
                "",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o"
            ],
        }
        // this.setStar = this.setStar.bind(this);

        // this.onMouseOverEvent = this.onMouseOverEvent.bind(this);
        // this.onMouseOutEvent = this.onMouseOutEvent.bind(this);
    }

    setStar = (rating) => {
        let star = [];
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                star[i] = <span class="fa fa-star"></span>;
            }
            else{
                if(rating !== i-1)
                    star[i] = <span class="fa fa-star-half-o"></span>
                else
                star[i] = <span class="fa fa-star-o"></span>
            }
        }
        return (
            <div>
                {star[1]}{star[2]}{star[3]}{star[4]}{star[5]}
            </div>
        );
    }

    commentStars = () =>{
        let star = [];
        for(let i = 1; i <= 5; i++){
            star[i] = <span id = {i} class = {this.state.star[i]} 
                            onMouseOver = {this.onMouseOverEvent}
                            onMouseOut = {this.onMouseOutEvent}
                            onClick = {this.onClickEvent}
                        ></span>
        }
        return(
            <div>
                {star[1]}{star[2]}{star[3]}{star[4]}{star[5]}
            </div>
        );
    }

    onMouseOverEvent = (e) => {
        let starCheck = []
        let id = e.target.id;
        for(let i = 1; i <= 5; i++){
            if(i <= id){
                starCheck[i] ="fa fa-star";
            }
            else{
                starCheck[i] = "fa fa-star-o";
            }
        }
        this.setState(
            {
                rating : id,
                star : starCheck
            }
        )
    }

    onMouseOutEvent = (e) => {
        if(this.state.commented.length === 0){
            let starCheck = [
                "",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o"
            ];
            this.setState(
                {
                    star : starCheck
                }
            )
        }
        else{
            this.setState(
                {
                    star : this.state.commented
                }
            )
        }
    }

    onClickEvent = () => {
        this.setState({
           commented : this.state.star
        })
    }

    render() {
        let {product, rates, users} = this.props
        let styleTextArea = {
            width : "100%",

        }
        let styleHr = {
            border:"3px solid #f1f1f1",
        }
        return (
            <div>
                <span class="heading">Người dùng đánh giá</span>
                {this.setStar(product.product_rating)}
                <div>4.1 điểm trên 1 đống người dùng đã đánh giá sản phẩm.</div>
                <hr style={styleHr} />

                <div class="row">
                    <div class="side">
                        <div>5 star</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-5"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>150</div>
                    </div>
                    <div class="side">
                        <div>4 star</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-4"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>63</div>
                    </div>
                    <div class="side">
                        <div>3 star</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-3"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>15</div>
                    </div>
                    <div class="side">
                        <div>2 star</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-2"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>6</div>
                    </div>
                    <div class="side">
                        <div>1 star</div>
                    </div>
                    <div class="middle">
                        <div class="bar-container">
                            <div class="bar-1"></div>
                        </div>
                    </div>
                    <div class="side right">
                        <div>20</div>
                    </div>
                </div>
                <div >
                    {
                        rates.map((rate, key) => {
                            let user;
                            for (let i = 0; i < users.length; i++) {
                                if (users[i].user_id === rate.user_id) {
                                    user = users[i].user_name;
                                }
                            }
                            return (
                                <div>
                                    <hr/>
                                    <h4><b>{user}</b></h4>
                                    {this.setStar(rate.rate_score)}
                                    <div>{rate.rate_comment}</div>
                                    <div>{rate.rate_time}</div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <hr/>
                <p>Đánh giá của bạn</p>
                <div id = "ProductDetailsComment">
                    {this.commentStars()} 
                    <textarea name="helllo" style = {styleTextArea} cols="30" rows="6" placeholder = "Viết gì đó đi bạn ơi ..."></textarea>
                    <button>Bình luận</button>
                </div>
            </div>
        )
    }
}

export default ProductDetailsComment;