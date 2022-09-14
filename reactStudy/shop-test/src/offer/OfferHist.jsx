import React, { Component } from 'react';
import './OfferHist.css';

function OfferHist(props) {
        return(
            <div class="containerOfferHist">
                
                
            <h2 class="mb-4">판매 이력</h2>
            <div>

                <div class="d-flex mb-3 align-self-center">
                    <h4 >{props.regTime}  </h4>
                    <div class="ml-3">
                        <th>
                            <button type="button" class="btn btn-outline-secondary"  onclick="cancelOrder(this.value)"> 주문취소</button>
                        </th>
                        {/* <th >
                            <h4>(취소 완료)</h4>
                        </th> */}
                    </div>
                </div>

                
                <div class="cardOfferHist">
                    <div class="d-flex mb-3">

                        <div class="repImgDiv">
                            <img src='/img/sopa.jpg' class = "imgOfferHist" />
                        </div>

                        <div class="contentsOfferHist">
                            <span  class="fs24 font-weight-bold">{props.itemNm}</span>
                            <div class="fs18 font-weight-light">
                                <span>{props.stockNumber}</span>
                            </div>
                            <div class="fs18 font-weight-light">
                                <span>구매자 </span>
                                <span >{props.createdBy}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <br/>

            </div>
            </div>
        );
}

export default OfferHist;