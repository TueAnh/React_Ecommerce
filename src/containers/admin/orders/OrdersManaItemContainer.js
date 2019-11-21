import React from 'react';
import { connect } from 'react-redux'
import OrdersManaItem from './../../../components/admin/order/OrdersManaItem'
class OrdersManaItemContainer extends React.Component {
    render() {
        return (
            <OrdersManaItem
            />
        );
    }

}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrdersManaItemContainer);
