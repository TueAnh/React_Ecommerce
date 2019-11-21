import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'

class UserItem extends React.Component {

    render() {
        var { users, filterProduct,searchProduct } = this.props;

        //filer name
        if (filterProduct.name) {
            users = users.filter((product) => {
                return product.name.toLowerCase().indexOf(filterProduct.name.toLowerCase()) !== -1
            })
        }
        //filer quantity
        if (filterProduct.status === 0) {
            users = users.filter((product) => {
                return product.quantity > 0
            })
        }
        if (filterProduct.status === 1) {
            users = users.filter((product) => {
                return product.quantity === 0
            })
        }
        //search
        if (searchProduct) {
            console.log(users)
            users = users.filter((product) => {
                return product.name.toLowerCase().indexOf(searchProduct.toLowerCase()) !== -1 || product.category_id === parseInt(searchProduct) ;
            })
        }
        return (
            <>
                {this.showusers(users)}
            </>
        );
    }
    onDelete = (id) => {
        if (confirm('You sure delete this product ? ')) {// eslint-disable-line
            this.props.onDeleteUser(id);
        }
    }
    showusers = (users) => {
        return (
            users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.isAdmin}</td>
                        <td className="text-center">
                        </td>
                        <td className="text-center">
                            <Link
                                to={`/admin/dashboard/users/${user.id}/edit`} className="btn btn-warning">
                                <span className="fa fa-pencil mr-5" />Sửa
                             </Link>
                            &nbsp;
                             <button type="button"
                                className="btn btn-danger"
                                onClick={() => this.onDelete(user.id)}>
                                <span className="fa fa-trash mr-5" />Xóa
                             </button>
                        </td>
                    </tr>
                )
            })
        );
    }
    showStatus = (quantity, index) => {
        var result = [];
        if (quantity > 0) {
            result.push(<span key={index} className="label label-success">
                {quantity}
            </span>)
        } else {
            result.push(<span key={index} className="label label-default">
                Sold Out
        </span>)
        }
        return result;
    }

}
export default UserItem;
