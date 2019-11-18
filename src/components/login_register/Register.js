import React from 'react';
import './../layout/Login.css';
export default class Register extends React.Component {
    render() {
        return (
            <div>
                <h2>Register Form</h2>
                <form>
                    <div className="imgcontainer">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                    </div>
                    <div className="container">
                        <label ><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label ><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <label ><b>Re-Password</b></label>
                        <input type="password" placeholder="Enter Re-Password" name="psw" required />
                        <button type="submit" className="btnLR">Register</button>
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