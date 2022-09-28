import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OrderHist from "./OrderHist";

function OrderHistList() {
    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: '/orders',
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );


    // 주문취소
    const cancelOrder = (id) => {

        const paramData = {
            orderId: id
        }

        const param = JSON.stringify(paramData);

        axios({
            url: '/order/'+id+"/cancel",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: param
        }).then((res) => {
            callback(res.data);
            alert("해당 주문이 취소되었습니다.");
            window.location.href='/order/OrderHist';
        })
    }


    return(
        <>
            {testStr.orderItem && testStr.orderItem.map((orderItem) => {
                <li key={orderItem.id} />

                    return(
                        <div className="orderHistListForm">
                                <div class="d-flex mb-3 align-self-center">
                                <h4 >{orderItem.orderDate}</h4>
                                <div class="ml-3">

                                {
                                orderItem.orderStatus == "ORDER"
                                ? <button type="button" class="btn btn-outline-secondary"  
                                onClick={()=>cancelOrder(orderItem.id)}> 주문취소</button>
                                : <h4>(취소 완료)</h4>
                                }

                                </div>
                                </div>
    
                        
                            <div class="cardOrderHist">
                                <div class="d-flex mb-3">
    
                                    <div class="repImgDiv">
                                        <img src={orderItem.itemDtoList[0].imgUrl} class = "imgOrderHist" />
                                    </div>
    
                                    <div class="contentsOrderHist">
                                        <span  class="fs24 font-weight-bold">{orderItem.itemDtoList[0].itemNm}</span>
                                        <div class="fs18 font-weight-light">
                                            <span>{orderItem.itemDtoList[0].count}</span>
                                        </div>
                                        <div class="fs18 font-weight-light">
                                            <span>판매자 </span>
                                            <span >{orderItem.itemDtoList[0].itemSeller}</span>
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

export default OrderHistList;