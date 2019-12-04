import React from 'react';
import { Link } from 'react-router-dom';
class CarouselItem extends React.Component {
    render() {
        var { product, index, incre, length } = this.props
        var active = '';
        let style = {
            position: "absolute",
            borderRadius: "10px",
            width: "100%"
        }
        if (index === incre) {
            active = 'active'
        }
        if (index === length) active = 'active'
        return (
            <div className={`item ${active}`}>
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} style={style} />
                </Link>
            </div>
        );
    }

}
export default CarouselItem;
