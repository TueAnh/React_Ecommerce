import React from 'react';
import { connect } from 'react-redux'
import Login from './../../components/login_register/Login'
import * as actions from './../../actions/index'
class LoginContainer extends React.Component {
    render() {
        return (
            <Login></Login>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
