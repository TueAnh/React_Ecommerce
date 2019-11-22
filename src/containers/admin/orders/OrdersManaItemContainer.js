import React from 'react';
import { connect } from 'react-redux'
import OrdersManaItem from './../../../components/admin/order/OrdersManaItem'
import { actDeleteOrderRequest } from '../../../actions';
class OrdersManaItemContainer extends React.Component {
    render() {
        return (
            <OrdersManaItem
                orders={this.props.orders}
                onDeleteOrder = {this.props.onDeleteOrder}
            />
        );
    }

}
const mapStateToProps = (state) => {
    return {
        orders: state.order,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteOrder: (id) => {
            dispatch(actDeleteOrderRequest(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrdersManaItemContainer);
