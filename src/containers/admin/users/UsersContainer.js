import React from 'react';
import { connect } from 'react-redux'
import Users from '../../../components/admin/users/Users'
import { actFilterProduct ,actSeachProduct} from '../../../actions';
class UsersContainer extends React.Component {
    render() {
        var {onFilterProduct,onSearchProduct } = this.props;
        return (
            <Users
                onFilterProduct={onFilterProduct}
                onSearchProduct ={onSearchProduct}
            />
        );
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        onFilterProduct: (filter) => {
            dispatch(actFilterProduct(filter));
        },
        onSearchProduct: (keyword) => {
            dispatch(actSeachProduct(keyword));
        }
    }
}
export default connect(null, mapDispatchToProps)(UsersContainer);
