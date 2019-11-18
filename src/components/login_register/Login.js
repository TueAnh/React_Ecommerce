import React from 'react';
import './../layout/Login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            txtEmail: '',
            txtPassword: '',
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
    onLogin = () => {

    }
    render() {
        var { txtEmail, txtPassword } = this.state;
        return (
            <div>
                <h2>Login Form</h2>
                <form>
                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>

                    {/* <div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
</div> */}
                    <div className="container">
                        <div class="alert alert-success" role="alert">
                            This is a success alert—check it out!
</div>
                        <label ><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required
                            name="txtEmail"
                            value={txtEmail}
                            onChange={this.onChange}
                        />
                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required
                            name="txtPassword"
                            value={txtPassword}
                            onChange={this.onChange}
                        />
                        <button type="submit" className="btnLR" onClick={this.onLogin(txtEmail, txtPassword)}>Login</button>
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                  </label>
                    </div>
                    <div className="container" >
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        );
    }
}