import React from 'react';
import { connect } from 'react-redux'
import Dashboard from '../../components/admin/Dashboard';
import * as actions from './../../actions/index'
class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.fectchAllProducts();
    }
    render() {
        var { products } = this.props;
        console.log(products.length)
        return (
            <Dashboard lengthProducts={products.length}
            >

            </Dashboard>
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
        fectchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
