import React, { Component } from 'react';
import './ProductDetailsComment.css';

class ProductDetailsComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            clickedStar: [],
            star: [
                "",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o",
                "fa fa-star-o"
            ],
            comments: [
                
            ]
        }
        // this.setStar = this.setStar.bind(this);

        // this.onMouseOverEvent = this.onMouseOverEvent.bind(this);
        // this.onMouseOutEvent = this.onMouseOutEvent.bind(this);
    }

    componentDidMount() {
        this.props.fetchCommentsRequest();
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

    }

    setStar = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars[i] = <span class="fa fa-star"></span>;
            }
            else {
                if (rating > i - 1)
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

    commentStars = (style) => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
            star[i] = <span id={i} class={this.state.star[i]}
                onMouseOver={this.onMouseOverEvent}
                onMouseOut={this.onMouseOutEvent}
                onClick={this.onClickEvent}
            ></span>
        }
        return (
            <div style={style}>
                {star[1]}{star[2]}{star[3]}{star[4]}{star[5]}
            </div>
        );
    }

    onMouseOverEvent = (e) => {
        let starCheck = []
        let id = e.target.id;
        for (let i = 1; i <= 5; i++) {
            if (i <= id) {
                starCheck[i] = "fa fa-star";
            }
            else {
                starCheck[i] = "fa fa-star-o";
            }
        }
        this.setState(
            {
                rating: id,
                star: starCheck
            }
        )
    }

    onMouseOutEvent = (e) => {
        if (this.state.clickedStar.length === 0) {
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
                    star: starCheck
                }
            )
        }
        else {
            this.setState(
                {
                    star: this.state.clickedStar
                }
            )
        }
    }

    onClickEvent = () => {
        this.setState({
            clickedStar: this.state.star
        })
    }

    getDate = () => {
        let d = new Date();
        return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    }

    onClickSubmitComment = (e) => {

        let rating = this.state.rating;
        if (rating) {
            let comment = {
                "rating": rating,
                "comment": e.target.content ? e.target.content : "Qúa tuyệt",
                "date": this.getDate()
            }
            console.log(comment);
            this.props.addCommentRequest(comment);
            console.log(this.props.comments)
            this.setState({
                rating: 0,
                clickedStar: [],
                star: [
                    "",
                    "fa fa-star-o",
                    "fa fa-star-o",
                    "fa fa-star-o",
                    "fa fa-star-o",
                    "fa fa-star-o"
                ],
                comments: this.state.comments.push(comment)
            })
        }
    }

    printPreComment(styleComment, styleDate) {
        if (this.state.comments != []) {
            let _comments = []
            for (let i = this.state.comments - 1; i >= 0; i--) {
                _comments[this.state.comments - 1 - i] = <div>
                    <hr />
                    <h4><b>Nặc danh</b></h4>
                    {this.setStar(this.state.comments[i]["rating"])}
                    <div style={styleComment}>{this.state.comments[i]["comment"] ? this.state.comments[i]["comment"].comment : <i>No Comment</i>}</div>
                    <div style={styleDate}>{this.state.comments[i]["date"] ? this.state.comments[i]["date"] : this.getDate()}</div>
                </div>
            }
            _comments.map((comment, key) => {
                return (
                    <div>
                        <hr />
                        <h4><b>Nặc danh</b></h4>
                        {this.setStar(comment.rating)}
                        <div style={styleComment}>{comment.comment ? comment.comment : <i>No Comment</i>}</div>
                        <div style={styleDate}>{comment.date ? comment.date : this.getDate()}</div>
                    </div>
                )
            })
        }
    }

    render() {
        let { product } = this.props
        let styleTextArea = {
            width: "100%",
        }
        let styleHr = {
            border: "3px solid #f1f1f1",
        }
        let styleComment = {
            fontSize: "18px",
            margin: "10px 0px"
        }
        let styleDate = {
            opacity: 0.5,
        }
        let style = {
            margin: "5px 10px"
        }
        let content;
        return (
            <div>
                {console.log("render")}
                <span class="heading">Người dùng đánh giá</span>
                {this.setStar(product.rating)}
                <div>{product.rating} điểm trên 1 đống người dùng đã đánh giá sản phẩm.</div>
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
                    {/* {this.printPreComment(styleComment, styleDate)} */}
                    {
                        this.props.comments.map((comment, key) => {
                            return (
                                <div>
                                    <hr />
                                    <h4><b>Nặc danh</b></h4>
                                    {this.setStar(comment.rating)}
                                    <div style={styleComment}>{comment.comment ? comment.comment : <i>No Comment</i>}</div>
                                    <div style={styleDate}>{comment.date ? comment.date : this.getDate()}</div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
                <button className="buttonMore">Cũ hơn ...</button>
                <hr />
                <p>Đánh giá của bạn</p>
                <div id="ProductDetailsComment">
                    {this.commentStars(style)}
                    <textarea id="textArea" style={styleTextArea} cols="30" rows="6" placeholder="Viết gì đó đi bạn ơi ..."></textarea>
                    <button content="" className="buttonMore" style={style} onClick={this.onClickSubmitComment}>Bình luận</button>
                </div>
            </div>
        )
    }
}

export default ProductDetailsComment;