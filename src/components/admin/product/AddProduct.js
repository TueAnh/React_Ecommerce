
import React from 'react';
import callApi from './../../../utils/apiCaller'

class ProductsMana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtCode: '',
            txtName: '',
            txtPrice: '',
            txtQuantity: 0,
            txtImage: '',
            txtDescription: '',
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
        if (nextProps && nextProps.productEditting) {
            var {productEditting} = nextProps;
            this.setState({
                id: productEditting.id,
                txtCode: productEditting.category_id,
                txtName: productEditting.name,
                txtPrice: productEditting.price,
                txtQuantity: productEditting.quantity,
                txtImage: productEditting.image,
                txtDescription: productEditting.description,
            })
        }
    }
    onSave = (e) => {
        e.preventDefault();
        var { id, txtCode, txtName, txtPrice, txtQuantity, txtImage, txtDescription } = this.state;
        var product = {
            id: id,
            category_id: txtCode,
            name: txtName,
            price: txtPrice,
            image: txtImage,
            description: txtDescription,
            quantity: txtQuantity
        }
        if (id) {//update
            this.props.onUpdateProduct(product);

        } else {
            this.props.onAddProduct(product)
        }
    }
    render() {
        var { txtCode, txtName, txtPrice, txtQuantity, txtImage, txtDescription } = this.state;
        return (
            <div>
                <form onSubmit={this.onSave} >
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Code</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtCode"
                            value={txtCode}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Name</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Price</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label "> Quantity</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtQuantity"
                            value={txtQuantity}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label "> Image</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtImage"
                            value={txtImage}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 col-form-label ">Description</label>
                        <input type="text" className="form-control-plaintext"
                            name="txtDescription"
                            value={txtDescription}
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
export default ProductsMana;
