import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'

class UserItem extends React.Component {

    render() {
        var { users, searchUser } = this.props;
        //search
        if (searchUser) {
            console.log(users)
            users = users.filter((user) => {
                return user.email.toLowerCase().indexOf(searchUser.toLowerCase()) !== -1 || user.id === parseInt(searchUser);
            })
        }
        return (
            <>
                {this.showusers(users)}
            </>
        );
    }
    onDelete = (id) => {
        if (confirm('You sure delete this user ? ')) {// eslint-disable-line
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
                        <td className="text-center">
                            {this.showIsAdmin(user.isAdmin,index)}
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
    showIsAdmin = (isAdmin, index) => {
        var result = [];
        if (isAdmin == 1) {
            result.push(<span key={index} className="label label-success">
                true
            </span>)
        } else {
            result.push(<span key={index} className="label label-info">
                false
        </span>)
        }
        return result;
        
    }

}
export default UserItem;
