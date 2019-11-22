
import React from 'react';
import './../../layout/admin.css'
import OrdersManaItemContainer from '../../../containers/admin/orders/OrdersManaItemContainer'

class OrdersMana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterStatus: -1,
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        // this.props.onFilterProduct(filter);
        this.setState({
            [name]: value
        })
    }
    render() {
        var {filterStatus} = this.state
        return (
            <div>
                <div className="text-center">
                    <h1>Order Management</h1>
                </div>
                <table className="table  table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Order_Id</th>
                            <th className="text-center">Content</th>
                            <th className="text-center">Total</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td />
                            <td />
                            <td />
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onChange}
                                >
                                    <option value={-1}>All</option>
                                    <option value={0}>Accept</option>
                                    <option value={1}>Denied</option>
                                </select>
                            </td>
                            <td />
                        </tr>
                        <OrdersManaItemContainer />
                    </tbody>
                </table>
            </div>
        );
    }
}
export default OrdersMana;
