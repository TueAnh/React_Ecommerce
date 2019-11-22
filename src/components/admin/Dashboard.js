import React from 'react';
import './../layout/admin.css'
import { Link } from 'react-router-dom'
class Dashboard extends React.Component {
    render() {
        var { lengthProducts,lengthUsers } = this.props;
        return (
            <div className="col-sm-9">
                <div className="well">
                    <h4>Dashboard</h4>
                    <p>Some text..</p>
                </div>
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
                            <Link to="/admin/dashboard/products">View Details <span className="glyphicon">&#xe032;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="well">
                            <h4>New Orders</h4>
                            <p>12400 Orders</p>
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

                <div className="row">
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                            <p>Text</p>
                            <p>Text</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="well">
                            <p>Text</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="well">
                            <p>Text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
