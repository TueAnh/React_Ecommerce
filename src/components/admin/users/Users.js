import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'
import UsersItemContainer from './../../../containers/admin/users/UsersItemContainer'

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1,
            keyword: ''
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var filter = {
            name: name === 'filterName' ? value : this.state.filterName,
            status: name === 'filterStatus' ? value : this.state.filterStatus,
        };
        this.props.onFilterProduct(filter);
        this.setState({
            [name]: value
        })
    }
    onSearch=()=>{
        this.props.onSearchProduct(this.state.keyword)
    }
    render() {
        var { filterName, filterStatus,keyword } = this.state
        return (
            <div>
                <div className="text-center">
                    <h1>User Management</h1>
                </div>
                <Link to="/admin/dashboard/Users/add" className="btn btn-primary">
                    <span className="fa fa-plus mr-5" />Add User
             </Link>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..."
                        name="keyword"
                        value={keyword}
                        onChange={this.onChange}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick = {this.onSearch  }>
                            <span className="fa fa-search mr-5" />Tìm
                     </button>
                    </span>
                </div>
                <table className="table  table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Code</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">member type</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td />
                            <td>
                                <input type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td />
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onChange}
                                >
                                    <option value={-1}>All</option>
                                    <option value={0}>In Stock</option>
                                    <option value={1}>Out Of Stock</option>
                                </select>
                            </td>
                            <td />
                        </tr>
                        <UsersItemContainer/>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Users;
