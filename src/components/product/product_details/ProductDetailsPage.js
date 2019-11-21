import React,{Component} from 'react';
import './ProductDetailsPage.css';
import ProductDetailsContent from './ProductDetailsContent';
import ProductDetailsComment from './ProductDetailsComment';

class ProductDetailsPage extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        let product = {
            "id": 262,
            "categoryId": 19,
            "name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)",
            "price": "16490000",
            "image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg",
            "description": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell",
            "trending": 0,
            "rating": 7
          }
        let productsSame = [product,product,product,product];
        
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
                        contentMargin = "10px"
                        imgHeight = "auto"
                        imgWidth = "100%"
                        imgDivWidth = "60%"
                        imgDivHeight =""
                        imgDivMargin = "10px"
                        h1FontSize = "30px"
                        h1Height = ""
                        h3FontSize = "25px"
                        spanFontSize = "15px"
                        marginElement = "5px"
                        showInfo = "true"
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
                                textAlign = "center"
                                contentDisplay = "block"
                                contentMargin = "30px"
                                contentWidth = "20%"
                                contentHeight = "100px"
                                imgWidth = "100%"
                                imgDivWidth = "100%"
                                imgDivHeight = "200px"
                                imgDivMargin = ""
                                h1FontSize = "15px"
                                h1Height = "30px"
                                h3FontSize = "14px"
                                spanFontSize = "14px"
                                buttonFontSize = "14px"
                                marginElement = "2px"
                                showInfo = "false"
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default ProductDetailsPage;