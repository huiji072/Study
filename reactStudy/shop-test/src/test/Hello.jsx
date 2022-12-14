import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  

function Hello() {
  // 요청받은 정보를 담아줄 변수 선언
  const [ testStr, setTestStr ] = useState('');
  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
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



  return (

      <div className="App">
          <header className="App-header">

            <h1>s</h1>
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


          </header>
      </div>
  );
}

export default Hello;