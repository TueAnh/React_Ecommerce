import React from 'react';
import { connect } from 'react-redux'
import Carousel from './../components/Carousel'
import CarouselItem from './../components/CarouselItem'
import * as actions from './../actions/index'
class CarouselContainer extends React.Component {
    componentDidMount() {
        this.props.fectchAllProducts();
    }
    render() {
        let products = [{ image: "https://cdn.tgdd.vn/2019/11/banner/800-300-800x300-(25).png", id: 13 },
                        { image: "https://cdn.tgdd.vn/2019/11/banner/A9-trang-800-300-800x300.png", id: 38 },
                        { image: "https://cdn.tgdd.vn/2019/11/banner/800-300-800x300-(23).png", id: 5 },
                        { image: "https://cdn.tgdd.vn/2019/11/banner/thu-cu-note10-800-300-800x300-(6).png", id: 23 },
                        { image: "https://cdn.tgdd.vn/2019/11/banner/800-300-800x300-(10).png", id: 12 },
                        ]
        var { carousel } = this.props
        return (
            <Carousel
                index={carousel}
                increase={this.controlImageNext}
                reduction={this.controlImagePre}
                length={products.length} >
                {this.showProductImage(products)}
            </Carousel>
        );
    }
    showProductImage = (products) => {
        var result = null;
        console.log(this.props.carousel);
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <CarouselItem
                    key={index}
                    product={product}
                    index={index}
                    incre={this.props.carousel}
                    length={products.length}
                />
            })
        }
        return result;
    }
    controlImageNext = () => {
        this.props.increaseIndex()
    }
    controlImagePre = () => {
        this.props.reductionIndex()
    }
}
const mapStateToProps = (state) => {
    return {
        carousel: state.carousel,

        products: state.products,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseIndex: () => {
            dispatch(actions.increaseIndex())
        },
        reductionIndex: () => {
            dispatch(actions.reductionIndex())
        },
        fectchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselContainer);
