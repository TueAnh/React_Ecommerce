import React,{Component} from 'react';
import './ProductDetailsPage.css';
import ProductDetailsContent from './ProductDetailsContent';
import ProductDetailsComment from './ProductDetailsComment';

class ProductDetailsPage extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        let product = {"product_id:": 262, "category_id": 19, "product_rating": 4.3, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"}        ;
        let productsSame = [{"product_id:": 262, "category_id": 19,"product_rating": 4.3, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"},
                        {"product_id:": 262, "category_id": 19,"product_rating": 4.3, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"},
                        {"product_id:": 262, "category_id": 19,"product_rating": 4.3, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"},
                        {"product_id:": 262, "category_id": 19,"product_rating": 4.3, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"}];
        
        let rates = [{"user_id": 1, "rate_id": 1, "rate_time": "18/11/2019", "rate_score": 4, "rate_comment": "Cái này kết cấu vừa xấu, xài nhanh hao pin, lại còn đắt, chán !!, cơ mà thích đánh giá 4 sao :D"},
                {"user_id": 2, "rate_id": 2, "rate_time": "18/11/2019", "rate_score": 5, "rate_comment": "Cái này kết cấu vừa xấu, xài nhanh hao pin, lại còn đắt, chán !!, cơ mà thích đánh giá 5 sao :D"}]
        let users = [{"user_id": 1, "user_name": "RonalMes"},{"user_id": 2, "user_name": "Phan Tank"}]
        let hr = <hr/>       
        return (
            <div className = "ProductDetailsPage">
                <div>
                    <ProductDetailsContent 
                        product = {product} 
                        contentDisplay = "flex"
                        contentWidth = "100%"
                        contentMargin = "auto"
                        imgHeight = "100%"
                        imgWidth = "50%"
                        h1FontSize = "30px"
                        h3FontSize = "25px"
                        spanFontSize = "15px"
                        marginElement = "5px"
                    />
                </div>

                <hr/>

                <ProductDetailsComment product = {product} rates = {rates} users = {users}/>

                <hr/>
                
                <p>Sản phẩm tương tự</p>
                <div className = "TheSameProduct">
                    {
                        productsSame.map((product, key) =>
                            <ProductDetailsContent 
                                product = {product} 
                                contentDisplay = "block"
                                contentMargin = "30px"
                                contentWidth = "20%"
                                contentHeight = "100px"
                                imgWidth = "100%"
                                h1FontSize = "18px"
                                h3FontSize = "15px"
                                spanFontSize = "14px"
                                buttonFontSize = "14px"
                                marginElement = "2px"
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProductDetailsPage;