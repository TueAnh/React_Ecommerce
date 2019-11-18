import React from 'react';
import { connect } from 'react-redux'
import AddProduct from './../../../components/admin/product/AddProduct'
import { actGetProductRequest ,actUpdateProductRequest, actAddProductRequest} from '../../../actions';
class AddProductContainer extends React.Component {
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id)
        }
    }
    render() {
        return (
            <AddProduct onAddProduct={this.props.onAddProduct}
                productEditting={this.props.productEditting}
                onUpdateProduct={this.props.onUpdateProduct}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        productEditting: state.productEditting
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProductContainer);
