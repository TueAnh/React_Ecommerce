
import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'

class OrdersManaItem extends React.Component {

    render() {
        var { orders } = this.props;


        return (
            <>
                {this.showOrders(orders)}
            </>
        );
    }
    onDelete = (id) => {
        if (confirm('You sure delete this orders ? ')) {// eslint-disable-line
            this.props.onDeleteOrder(id);
        }
    }
    showOrders = (orders) => {
        return (
            orders.map((order, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{order.id}</td>
                        <td>{order.user_order.email}</td>
                        <td></td>
                        <td>{order.total}</td>
                        <td className="text-center">
                            {this.showStatus(order.status, index)}
                        </td>
                        <td className="text-center">
                            <button type="button"
                                className="btn btn-danger"
                            onClick={() => this.onDelete(order.id)}
                            >
                                <span className="fa fa-trash mr-5" />Xóa
                             </button>
                        </td>
                    </tr>
                )
            })
        );
    }
    showStatus = (status, index) => {
        var result = [];
        if (status === 'accept') {
            result.push(<span key={index} className="label label-success">
                {status}
            </span>)
        } else {
            result.push(<span key={index} className="label label-danger">
                {status}
            </span>)
        }
        return result;
    }

}
export default OrdersManaItem;
