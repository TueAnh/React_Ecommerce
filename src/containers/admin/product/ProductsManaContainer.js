import React from 'react';
import { connect } from 'react-redux'
import ProductsMana from '../../../components/admin/product/ProductsMana'
import { actFilterProduct ,actSeachProduct} from '../../../actions';
class ProductsManaContainer extends React.Component {
    render() {
        var {onFilterProduct,onSearchProduct } = this.props;
        return (
            <ProductsMana
                onFilterProduct={onFilterProduct}
                onSearchProduct ={onSearchProduct}
            />
        );
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        onFilterProduct: (filter) => {
            dispatch(actFilterProduct(filter));
        },
        onSearchProduct: (keyword) => {
            dispatch(actSeachProduct(keyword));
        }
    }
}
export default connect(null, mapDispatchToProps)(ProductsManaContainer);
