
import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'

class OrdersManaItem extends React.Component {

    render() {
        // var { orders } = this.props;


        return (
            <>
                {/* {this.showProducts(products)} */}
            </>
        );
    }
    // onDelete = (id) => {
    //     if (confirm('You sure delete this orders ? ')) {// eslint-disable-line
    //         this.props.onDeleteProduct(id);
    //     }
    // }
    // showProducts = (products) => {
    //     return (
            // products.map((product, index) => {
            //     return (
            //         <tr key={index}>
            //             <td>{index + 1}</td>
            //             <td>{product.categoryId}</td>
            //             <td>{product.name}</td>
            //             <td>${product.price}</td>
            //             <td className="text-center">
            //                 {this.showStatus(product.quantity, index)}
            //             </td>
            //             <td className="text-center">
            //                 <Link
            //                     to={`/admin/dashboard/products/${product.id}/edit`} className="btn btn-warning">
            //                     <span className="fa fa-pencil mr-5" />Sửa
            //                  </Link>
            //                 &nbsp;
            //                  <button type="button"
            //                     className="btn btn-danger"
            //                     onClick={() => this.onDelete(product.id)}>
            //                     <span className="fa fa-trash mr-5" />Xóa
            //                  </button>
            //             </td>
            //         </tr>
            //     )
            // })
    //     );
    // }
    // showStatus = (quantity, index) => {
    //     var result = [];
    //     if (quantity > 0) {
    //         result.push(<span key={index} className="label label-success">
    //             {quantity}
    //         </span>)
    //     } else {
    //         result.push(<span key={index} className="label label-default">
    //             Sold Out
    //     </span>)
    //     }
    //     return result;
    // }

}
export default OrdersManaItem;
