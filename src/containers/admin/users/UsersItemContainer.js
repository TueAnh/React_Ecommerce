import React from 'react';
import { connect } from 'react-redux'
import UsersItem from './../../../components/admin/users/UsersItem'
import { actDeleteUserRequest } from '../../../actions/index';
class UsersItemContainer extends React.Component {
    render() {
        var { users, onDeleteUser,filterProduct,searchProduct} = this.props;
        return (
            <UsersItem 
                users={users}
                onDeleteUser={onDeleteUser}
                filterProduct ={filterProduct}
                searchProduct ={searchProduct}
            />
        );
    }

}
const mapStateToProps = (state) => {
    return {
        users: state.users,
        filterProduct : state.filterProduct,
        searchProduct : state.searchProduct

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteUser: (id) => {
            dispatch(actDeleteUserRequest(id));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersItemContainer);
