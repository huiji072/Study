import React, { Component } from 'react';
import './OrderHist.css';

class OrderHist extends Component{
    render() {
        return(
            <>
            <div class="content-mg">

            <h2 class="mb-4">
                구매 이력
            </h2>

            <div>

                <div class="d-flex mb-3 align-self-center">
                    <h4 >2022-08-25 19:16 주문 </h4>
                    <div class="ml-3">
                        <th>
                            <button type="button" class="btn btn-outline-secondary"  onclick="cancelOrder(this.value)">주문취소</button>
                        </th>
                        {/* <th >
                            <h4>(취소 완료)</h4>
                        </th> */}
                    </div>
                </div>

                
                <div class="card d-flex">
                    <div class="d-flex mb-3">

                        <div class="repImgDiv">
                            <img src='img/bed.jpg' class = "rounded repImg" />
                        </div>

                        <div class="align-self-center w-75">
                            <span  class="fs24 font-weight-bold">ItemName</span>
                            <div class="fs18 font-weight-light">
                                <span>itemCount</span>
                            </div>
                            <div class="fs18 font-weight-light">
                                <span>판매자 </span>
                                <span >sellerName</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="card d-flex">
                    <div class="d-flex mb-3">
                        <div class="repImgDiv">
                            <img src='img/bed.jpg' class = "rounded repImg" />
                        </div>
                        <div class="align-self-center w-75">
                            <span  class="fs24 font-weight-bold">ItemName</span>
                            <div class="fs18 font-weight-light">
                                <span>itemCount</span>
                            </div>
                            <div class="fs18 font-weight-light">
                                <span>판매자 </span>
                                <span >sellerName</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            </div>


            </>
        );
    }
}

export default OrderHist;