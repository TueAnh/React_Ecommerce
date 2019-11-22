import React from 'react';
import { connect } from 'react-redux'
import Dashboard from '../../components/admin/Dashboard';
import * as actions from './../../actions/index'
class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.fectchAllProducts();
        this.props.fectchAllUsers();
        this.props.fectchAllOrders();
    }
    render() {
        var { products,users ,order} = this.props;
        return (
            <Dashboard 
            lengthProducts={products.length}
            lengthUsers={users.length}
            lengthOrders = {order.length}
            >
            </Dashboard>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        users : state.users,
        order : state.order,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fectchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        },
        fectchAllUsers: () => {
            dispatch(actions.actFetchUsersRequest())
        },
        fectchAllOrders: ()=>{
            dispatch(actions.actFetchOrdersRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
