import React from 'react';
import { connect } from 'react-redux'
import Users from '../../../components/admin/users/Users'
import {actSeachUser} from '../../../actions';
class UsersContainer extends React.Component {
    render() {
        var {onSearchUser } = this.props;
        return (
            <Users
                onSearchUser ={onSearchUser}
            />
        );
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchUser: (keyword) => {
            dispatch(actSeachUser(keyword));
        }
    }
}
export default connect(null, mapDispatchToProps)(UsersContainer);
