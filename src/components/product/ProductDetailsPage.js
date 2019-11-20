import React,{Component} from 'react';
import './ProductDetailsPage.css';
import ProductDetailsContent from './ProductDetailsContent'

class ProductDetailsPage extends Component {
    
    constructor(props){
        super(props);
        this.setStar = this.setStar.bind(this);
    }

    setStar(rating) {
        let stars = [];
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars[i] = <span class="fa fa-star checked"></span>;
            }
            else{
                stars[i] = <span class="fa fa-star"></span>
            }
        }
        return (
            <div>
                {stars[1]}{stars[2]}{stars[3]}{stars[4]}{stars[5]}
            </div>
        );
    }

    render() {
        let product = {"product_id:": 262, "category_id": 19, "product_rating": 4.3, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"}        ;
        let productsSame = [{"product_id:": 262, "category_id": 19, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"},
                        {"product_id:": 262, "category_id": 19, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"},
                        {"product_id:": 262, "category_id": 19, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"},
                        {"product_id:": 262, "category_id": 19, "product_name": "Lenovo IdeaPad 330 15 i7 8550U (81DE01JPVN)", "product_price": "16.490.000", "product_image": "https://cdn.tgdd.vn/Products/Images/44/201813/lenovo-ideapad-330-i7-8550u-4g-1tb-16gb-r53-4gb-wi-15-600x600.jpg", "product_desciption": "/Man hinh: 15.6 inch, HD/CPU: Core i7 Coffee Lake, 1.80 GHz/RAM: 4 GB, HDD: 1 TB SATA3, Ho tro khe cam SSD M.2 PCIe, Optane 16GB/Do hoa: AMD 530, 4 GB/HDH: Windows 10 Home SL/Nang: 1.95 kg, Pin: 2 cell"}];
        
        let rates = [{"user_id": 1, "rate_id": 1, "rate_time": "18/11/2019", "rate_score": 4, "rate_comment": "Cái này kết cấu vừa xấu, xài nhanh hao pin, lại còn đắt, chán !!, cơ mà thích đánh giá 4 sao :D"},
        {"user_id": 2, "rate_id": 2, "rate_time": "18/11/2019", "rate_score": 5, "rate_comment": "Cái này kết cấu vừa xấu, xài nhanh hao pin, lại còn đắt, chán !!, cơ mà thích đánh giá 5 sao :D"}]
        let users = [{"user_id": 1, "user_name": "RonalMes"},{"user_id": 2, "user_name": "Phan Tank"}]
        let styleHr = {
            border:"3px solid #f1f1f1",
        }
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

                <div>
                    <span class="heading">Người dùng đánh giá</span>
                    {this.setStar(product.product_rating)}
                    <div>4.1 điểm trên 1 đống người dùng đã đánh giá sản phẩm.</div>
                    <hr style={styleHr} />

                    <div class="row">
                        <div class="side">
                            <div>5 star</div>
                        </div>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-5"></div>
                            </div>
                        </div>
                        <div class="side right">
                            <div>150</div>
                        </div>
                        <div class="side">
                            <div>4 star</div>
                        </div>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-4"></div>
                            </div>
                        </div>
                        <div class="side right">
                            <div>63</div>
                        </div>
                        <div class="side">
                            <div>3 star</div>
                        </div>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-3"></div>
                            </div>
                        </div>
                        <div class="side right">
                            <div>15</div>
                        </div>
                        <div class="side">
                            <div>2 star</div>
                        </div>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-2"></div>
                            </div>
                        </div>
                        <div class="side right">
                            <div>6</div>
                        </div>
                        <div class="side">
                            <div>1 star</div>
                        </div>
                        <div class="middle">
                            <div class="bar-container">
                                <div class="bar-1"></div>
                            </div>
                        </div>
                        <div class="side right">
                            <div>20</div>
                        </div>
                    </div>
                    <div >
                        {
                            rates.map((rate, key) =>
                                {
                                    let user;
                                    let stars = []
                                    for(let i = 0; i < users.length; i++){
                                        if(users[i].user_id === rate.user_id){
                                            user = users[i].user_name;
                                        }
                                    }

                                return (
                                    <div>
                                        <hr/>
                                        <h4><b>{user}</b></h4>
                                        {this.setStar(rate.rate_score)}
                                        <div>{rate.rate_comment}</div>
                                        <div>{rate.rate_time}</div>
                                    </div>
                                    )
                                }
                            )
                        }
                    </div>
                </div>
                <textarea name="Bình luận của bạn" id="" cols="122" rows="5"></textarea>
                <button>Bình luận</button>

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
                                h1FontSize = "25px"
                                h3FontSize = "20px"
                                spanFontSize = "14px"
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