import React from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'
import { logoutRequest} from '../actions'
import Menu from '../components/Menu';
class MenuContainer extends React.Component {
    render() {
        return (
            <Menu
                authentication={this.props.authentication}
                user={this.props.user}
                onLogOut = {this.props.onLogOut}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        authentication: state.authentication,
        user: state.user,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogOut: () => {
            dispatch(logoutRequest())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
