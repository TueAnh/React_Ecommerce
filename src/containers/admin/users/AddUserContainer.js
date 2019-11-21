import React from 'react';
import { connect } from 'react-redux'
import AddUser from './../../../components/admin/users/AddUser'
import { actGetUserRequest, actUpdateUserRequest, actAddUserRequest } from '../../../actions/index';
class AddUserContainer extends React.Component {
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditUser(id)
        }
    }
    render() {
        return (
            <AddUser
                onAddUser={this.props.onAddUser}
                userEditting={this.props.userEditting}
                onUpdateUser={this.props.onUpdateUser}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userEditting: state.userEditting
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddUser: (user) => {
            dispatch(actAddUserRequest(user))
        },
        onEditUser: (id) => {
            dispatch(actGetUserRequest(id));
        },
        onUpdateUser: (user) => {
            dispatch(actUpdateUserRequest(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
