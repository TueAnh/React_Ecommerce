import React from 'react';
import './../layout/Login.css';
import { Link, Redirect } from 'react-router-dom'
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPassword: '',
            txtRePassword: '',
            submitted: false,
            disableSubmit: false
        }
    }
    onChange = (e) => {
        var target = e.target
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitted: true
        });
        var { txtEmail, txtPassword } = this.state;
        if (this.state.txtPassword === this.state.txtRePassword && this.state.txtPassword !== '') {
            this.props.logoutRequest();
            if (txtEmail && txtPassword) {
                this.props.register(txtEmail, txtPassword)
            }
        }

    }
    render() {
        var { txtEmail, txtPassword, txtRePassword, submitted, disableSubmit } = this.state;
        var { user, authentication, alert } = this.props;
        if (authentication === true) {
            return (<Redirect to='/' />);
        }
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <h2>Register Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <div className={'form-group ' + (submitted && !txtEmail ? 'has-error' : '')}>
                            <label ><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="uname"
                                className='form-control'
                                name="txtEmail"
                                value={txtEmail}
                                onChange={this.onChange}
                            />
                            {submitted && !txtEmail &&
                                <div className="text-danger">Email is required</div>
                            }
                        </div>
                        <div className={'form-group ' + (submitted && !txtPassword ? 'has-error' : '')}>
                            <label ><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw"
                                className='form-control'
                                name="txtPassword"
                                value={txtPassword}
                                onChange={this.onChange}
                            />
                            {submitted && !txtPassword &&
                                <div className="text-danger">Password is required</div>
                            }
                        </div>
                        <div className={'form-group ' + (submitted && !txtRePassword ? 'has-error' : '')}>
                            <label ><b>Re-Password</b></label>
                            <input type="password" placeholder="Enter Re-Password" name="psw"
                                className='form-control'
                                name="txtRePassword"
                                value={txtRePassword}
                                onChange={this.onChange}
                            />
                            {submitted && (txtRePassword !== txtPassword) &&
                                <div className="text-danger">Re-Password is inCorrect</div>
                            }
                        </div>
                        <button type="submit" className="btnLR" disabled={disableSubmit} >Register</button>
                    </div>
                    <div className="container" >
                        <Link to="/" className="cancelbtn">Cancel</Link>
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}