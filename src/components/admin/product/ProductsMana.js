
import React from 'react';
import './../../layout/admin.css'
import { Link } from 'react-router-dom'
import ProductsManaItemContainer from './../../../containers/admin/product/ProductsManaItemContainer'

class ProductsMana extends React.Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>Product Management</h1>
                </div>
                <Link to="/admin/dashboard/Products/add" className="btn btn-primary">
                    <span className="fa fa-plus mr-5" />Add Product
             </Link>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                            <span className="fa fa-search mr-5" />Tìm
                     </button>
                    </span>
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button">
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                         </span>
                            </a>
                        </li>
                        <li>
                            <a role="button">
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                         </span>
                            </a>
                        </li>
                        <li role="separator" className="divider" />
                        <li><a role="button">Trạng Thái Kích Hoạt</a></li>
                        <li><a role="button">Trạng Thái Ẩn</a></li>
                    </ul>
                </div>

                <table className="table  table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Code</th>
                            <th className="text-center">Name</th>
                            <th className="text-center">Price</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td />
                            <td />
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td />
                            <td>
                                <select className="form-control">
                                    <option value={-1}>All</option>
                                    <option value={0}>In Stock</option>
                                    <option value={1}>Out Of Stock</option>
                                </select>
                            </td>
                            <td />
                        </tr>
                        <ProductsManaItemContainer />
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ProductsMana;
