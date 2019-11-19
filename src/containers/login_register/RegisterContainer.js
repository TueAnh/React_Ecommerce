import React from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import Register from '../../components/login_register/Register';
class RegisterContainer extends React.Component {
    render() {
        return (
            <Register
                register = {this.props.register}
                logoutRequest = {this.props.logoutRequest}
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
        register: (email,password) => {
            dispatch(actions.registerRequest(email,password))
        },
        logoutRequest:()=>{
            dispatch(actions.logoutRequest)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
