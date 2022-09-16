import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
import './Main.css';

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
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.dtl}</p>
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