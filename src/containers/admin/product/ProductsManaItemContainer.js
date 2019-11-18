import React from 'react';
import { connect } from 'react-redux'
import ProductsManaItem from './../../../components/admin/product/ProductsManaItem'
import { actDeleteProductRequest } from '../../../actions';
class ProductsManaItemContainer extends React.Component {
    render() {
        var { products, onDeleteProduct,filterProduct,searchProduct} = this.props;
        return (
            <ProductsManaItem products={products}
                onDeleteProduct={onDeleteProduct}
                filterProduct ={filterProduct}
                searchProduct ={searchProduct}
            />
        );
    }

}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        filterProduct : state.filterProduct,
        searchProduct : state.searchProduct

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
