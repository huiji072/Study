import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
import './Main.css';

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
        regTime: "2022-08-230"
    },
    {
        itemId: 3,
        itemNm: "test2",
        itemDetail: "props를 이용하여 출력된 값입니다2!!",
        stockNumber: 200,
        itemSellStatus: "SOLD_OUT",
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-230"
    },
    {
        itemId: 4,
        itemNm: "test2",
        itemDetail: "props를 이용하여 출력된 값입니다2!!",
        stockNumber: 200,
        itemSellStatus: "SOLD_OUT",
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-230"
    }
]

function MainList() {

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: '/main/items',
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );
  
    return(
        <>
            {testStr.item.map((item) => {
                return(
                        <Card className="card">
                            <a href='item/ItemDtl'>
                                <img className="card-img-top" src='/img/bed.jpg' />
                                <div className="card-body">
                                    <h4 className="card-title">{item.itemNm}</h4>
                                    <p className="card-text">{item.itemDetail}</p>
                                    <h3 class="card-title text-danger">{item.stockNumber}</h3>
                                </div>
                            </a>
                        </Card>
                );
            })}
        </>
    );
}

export default MainList;