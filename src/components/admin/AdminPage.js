import React from 'react';
import './../layout/admin.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import DashboardContainer from '../../containers/admin/DashboardContainer';
import Chart from './Chart';
import ProductsMana from './product/ProductsMana'
import AddProduct from './product/AddProduct'
import AddProductContainer from './../../containers/admin/product/AddProductContainer'
class AdminPage extends React.Component {
    render() {
        return (

            <Router>
                <div>
                    <div className="container-fluid">
                        <div className="row content">
                            <div className="col-sm-3 sidenav hidden-xs">
                                <h2><Link to="/admin">LOGO</Link></h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li className="active"><Link to="/admin/dashboard">Dashboard</Link></li>
                                    <li><Link to="/admin/chart">Chart</Link></li>
                                    <li><a href="#section3">Log Out</a></li>
                                </ul><br />
                            </div>
                            <br />
                            {/* <DashboardContainer /> */}
                            <Switch>
                                <Route path="/admin/dashboard" exact component={DashboardContainer} />
                                <Route path="/admin/chart" component={Chart} />
                                <Route exact path="/admin/dashboard/products" component={ProductsMana} />
                                <Route path="/admin/dashboard/products/add" component={()=> <AddProductContainer/>} />
                                <Route path="/admin/dashboard/products/:id/edit" component={({match})=> <AddProductContainer match = {match}/>} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
export default AdminPage;
