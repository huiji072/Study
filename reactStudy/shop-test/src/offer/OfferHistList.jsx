import React from "react";
import "./OfferHist.css";

const itemList = [
    {
        itemId: 1,
        itemNm: "test1",
        itemDetail: "props를 이용하여 출력된 값입니다.",
        stockNumber: 10,
        itemSellStatus: "SELL",
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-25"
    },
    {
        itemId: 2,
        itemNm: "test2",
        itemDetail: "props를 이용하여 출력된 값입니다2!!",
        stockNumber: 200,
        itemSellStatus: "SOLD_OUT",
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-23"
    },
]

function OfferHistList() {
    return(
        <>
            {itemList.map((item) => {
                return(
                    <div className="offerHistListForm">
                    <div class="d-flex mb-3 align-self-center">
                        <h4 >{item.regTime}  </h4>
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
                            <span  class="fs24 font-weight-bold">{item.itemNm}</span>
                            <div class="fs18 font-weight-light">
                                <span>{item.stockNumber}</span>
                            </div>
                            <div class="fs18 font-weight-light">
                                <span>구매자 </span>
                                <span >{item.createdBy}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
                )
            })}
        </>
    )
}

export default OfferHistList;