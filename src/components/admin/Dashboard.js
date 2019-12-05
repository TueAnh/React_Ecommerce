import React from 'react';
import './../layout/admin.css'
import { Link } from 'react-router-dom'
class Dashboard extends React.Component {
    render() {
        var { lengthProducts,lengthUsers,lengthOrders } = this.props;
        return (
            <div className="col-sm-9">
                {console.log("dashboard")};
                <div className="row">
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>Product</h4>
                            <p><b>{lengthProducts}</b> Items</p>
                            <Link to="/admin/dashboard/products">View Details <span className="glyphicon">&#xe032;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>Catagories</h4>
                            <p><b>{lengthProducts}</b> Items</p>
                            <Link to="/admin/dashboard/Orders">View Details <span className="glyphicon">&#xe032;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>New Orders</h4>
                            <p>{lengthOrders} Orders</p>
                            <Link to="/admin/dashboard/Orders">View Details <span className="glyphicon">&#xe032;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>Users</h4>
                            <p><b>{lengthUsers}</b> Items</p>
                            <Link to="/admin/dashboard/Users">View Details <span className="glyphicon">&#xe032;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
