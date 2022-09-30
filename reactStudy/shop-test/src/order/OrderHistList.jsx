import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OrderHist from "./OrderHist";

function OrderHistList() {
    const [ testStr, setTestStr ] = useState('');
    const[pageNum, setPageNum] = useState(0);
    
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: '/orders',
              method: 'GET',
              params: {
                "pageNum": pageNum
              }
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

    // 페이징

    const prevPage = (e) => {
        e.preventDefault();
        setPageNum(pageNum - 1);
        axios({
            url: '/orders',
            method: 'GET',
            params: {
                "pageNum": pageNum-1
            }
        }).then((res) => {
            callback(res.data);
        })
    }

    const nextPage = (pageNum, e) => {
        e.preventDefault();
        setPageNum(pageNum + 1);
        console.log("after ", pageNum)
        axios({
            url: '/orders',
            method: 'GET',
            params: {
                "pageNum": pageNum+1
            }
        }).then((res) => {
            callback(res.data);
        })

    }

    const clickPage = (arr, e) => {
        e.preventDefault();
        console.log(arr)
        axios({
            url: '/orders',
            method: 'GET',
            params: {
                "pageNum": arr
            }
        }).then((res) => {
            callback(res.data);
        })
    }

    const arr = [1, 2, 3, 4, 5]


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
                        <>

        <div>
            <ul className='pagination justify-content-center'>

            <li className='page-item'>
                <a className='page-link'  disabled={pageNum==0?true:false} 
                href={'?page='+ (pageNum)} type='button'
                onClick={prevPage}
                >Previous
                </a>
            </li>
            {arr.map((arr) => {
                return(
                    <>
                <li className='page-item'>
                        <a className='page-link'
                        href={'?page=' + (arr-1)} 
                        onClick={(e) => clickPage(arr-1, e)}
                        >{arr} 
                        </a>
                    </li>
                    </>
                )
            })}

            <li className='page-item'>
                <a className="page-link"  disabled={(pageNum+1)==pageNum?true:false } 
                href={'?page=' + (pageNum)} type='button'
                onClick={(e)=>nextPage(pageNum, e)} 
                >Next
                </a>
            </li>
        </ul>
        </div>
        </>
        </>
    )
}

export default OrderHistList;