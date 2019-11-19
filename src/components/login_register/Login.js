import React from 'react';
import './../layout/Login.css';
import { Link ,Redirect} from 'react-router-dom'
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPassword: '',
            submitted: false
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
        if (txtEmail && txtPassword) {
            //checkLogin
            this.props.login(txtEmail, txtPassword)
        }

    }
    render() {
        var { txtEmail, txtPassword, submitted } = this.state;
        console.log(this.props.user, this.props.authentication,this.props.alert)
        var {user,authentication,alert} = this.props;
        if(authentication === true) {
            return (<Redirect to ='/' />);
        }
        return (
            <div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <h2>Login Form</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    {/* <div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
</div> */}
                    {/* <div class="alert alert-success" role="alert">
                            This is a success alert—check it out!
</div> */}
                    <div className="container">
                        <div className={'form-group ' + (submitted && !txtEmail ? 'has-error' : '')}>
                            <label ><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname"
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
                        <button type="submit" className="btnLR" >Login</button>
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                  </label>
                    </div>
                    <div className="container" >
                        <Link to="/" className="cancelbtn">Cancel</Link>
                        <Link to="/register" className="btn btn-link">Register</Link>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
}