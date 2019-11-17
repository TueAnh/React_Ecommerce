import React from 'react';
import { connect } from 'react-redux'
import ProductsManaItem from './../../../components/admin/product/ProductsManaItem'
import { actDeleteProductRequest } from '../../../actions';
class ProductsManaItemContainer extends React.Component {
    render() {
        var { products, onDeleteProduct,onUpdateProduct } = this.props;
        return (
            <ProductsManaItem products={products}
                onDeleteProduct={onDeleteProduct}
            />
        );
    }

}
const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsManaItemContainer);
