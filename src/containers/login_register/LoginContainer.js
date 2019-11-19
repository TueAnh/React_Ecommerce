import React from 'react';
import { connect } from 'react-redux'
import Login from './../../components/login_register/Login'
import * as actions from './../../actions/index'
class LoginContainer extends React.Component {
    render() {
        return (
            <Login
                login = {this.props.login}
                authentication = {this.props.authentication}
                user = {this.props.user}
                alert = {this.props.alert}
            />
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        authentication : state.authentication,
        user : state.user,
        alert : state.alert
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (email,password) => {
            dispatch(actions.login(email,password))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
