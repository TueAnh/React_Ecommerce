
import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'

class ProductsManaItem extends React.Component {
    render() {
        var { products } = this.props;
        return (
            <>
                {this.showProducts(products)}
            </>
        );
    }
    onDelete =(id)=>{
        if(confirm('You sure delete this product ? ')){// eslint-disable-line
            this.props.onDeleteProduct(id); 
        }
    }
    showProducts = (products) => {
        console.log(this.props.products)
        return (
            products.map((product, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td className="text-center">
                            <span className="label label-success">
                                {product.quantity}
                            </span>
                        </td>
                        <td className="text-center">
                            <Link
                                to={`/admin/dashboard/products/${product.id}/edit`} className="btn btn-warning">
                                <span className="fa fa-pencil mr-5" />Sửa
                             </Link>
                            &nbsp;
                             <button type="button"
                                className="btn btn-danger"
                                onClick={() => this.onDelete(product.id)}>
                                <span className="fa fa-trash mr-5" />Xóa
                             </button>
                        </td>
                    </tr>
                )
            })
        );
    }
}
export default ProductsManaItem;
