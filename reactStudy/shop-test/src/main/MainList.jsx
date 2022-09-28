import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
import './Main.css';
import Pagination from "react-js-pagination";

function MainList() {

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: '/main',
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

    // const maxPage = testStr.maxPage[0].maxPage;

    // console.log(maxPage);

    // console.log(testStr.itemsObj)
  
    return(
        <>
            {testStr.items && testStr.items.map((item) => {
                return(
                        <Card className="card">
                            <a href={item.id}>
                                <img className="card-img-top" src={item.imgUrl} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.dtl}</p>
                                    <h3 class="card-title text-danger">{item.stockNumber}</h3>
                                </div>
                            </a>
                        </Card>
                );
            })}

            <div className='pagenation'>
            <Pagination 
            />

            </div>

        </>
    );
}

export default MainList;