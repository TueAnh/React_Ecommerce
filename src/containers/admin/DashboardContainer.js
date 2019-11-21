import React from 'react';
import { connect } from 'react-redux'
import Dashboard from '../../components/admin/Dashboard';
import * as actions from './../../actions/index'
class DashboardContainer extends React.Component {
    componentDidMount() {
        this.props.fectchAllProducts();
        this.props.fectchAllUsers();
    }
    render() {
        var { products,users } = this.props;
        return (
            <Dashboard 
            lengthProducts={products.length}
            lengthUser={users.length}
            >

            </Dashboard>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        users : state.users,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fectchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        },
        fectchAllUsers: () => {
            dispatch(actions.actFetchUsersRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
