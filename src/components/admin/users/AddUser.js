import React from 'react';
class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtEmail: '',
            txtPassword: '',
            txtIsAdmin: '',
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
    // Nhan dc props moi goi
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.userEditting) {
            var { userEditting } = nextProps;
            this.setState({
                id: userEditting.id,
                txtEmail: userEditting.email,
                txtPassword: userEditting.password,
                txtIsAdmin: userEditting.isAdmin,
            })
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, txtEmail, txtPassword, txtIsAdmin } = this.state;
        var user = {
            id: id,
            email: txtEmail,
            password: txtPassword,
            isAdmin: txtIsAdmin,
        }
        if (id) {//update
            this.props.onUpdateUser(user);

        } else {
            this.props.onAddUser(user)
        }
    }
    render() {
        var { txtEmail, txtPassword, txtIsAdmin } = this.state;
        return (
            <div>
                <form onSubmit={this.onSave} >
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Email</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtEmail"
                            value={txtEmail}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Password</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtPassword"
                            value={txtPassword}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Member Type</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtIsAdmin"
                            value={txtIsAdmin}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;
