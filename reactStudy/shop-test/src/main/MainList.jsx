import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
import './Main.css';

function MainList() {

    const [itemTotalPage, setItemTotalPage] = useState('');
    const [itemNumber, setItemNumber] = useState('');
    const [maxPage, setMaxPage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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
                console.log(res.data);
                setItemTotalPage(parseInt(res.data.itemsObj[0].itemsTotalPages));
                setItemNumber(parseInt(res.data.itemsObj[0].itemsNumber));
                setMaxPage(parseInt(res.data.maxPage[0].maxPage));
                setSearchQuery(parseInt(res.data.itemSearchDto[0].searchQuery));
            })
            }, []
    );    

    const arr = [1, 2, 3, 4, 5]

    // 페이징
    const start = parseInt((itemNumber/maxPage) * maxPage + 1);
    const end = itemTotalPage;

    if (parseInt(itemTotalPage) === 0) {
        end = 1;
    }
    else{
        if(start + (maxPage - 1) < parseInt(itemTotalPage)) {
            end = start + (parseInt(maxPage) - 1);
        } 
        // else {
        //     end = parseInt(itemTotalPage);
        // }
    }
    console.log(end)

    const showPrevPage = () => {
    }

    const showNextPage = () => {

    }




  
    return(
        <>
            {testStr.items && testStr.items.map((item) => {
                return(
                    <>
                        <Card className="card" key={item.id}>
                            <a href={item.id}>
                                <img className="card-img-top" src={item.imgUrl} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.dtl}</p>
                                    <h3 class="card-title text-danger">{item.stockNumber}</h3>
                                </div>
                            </a>
                        </Card>
                    </>
                );
            })}
            {testStr.itemsObj && testStr.itemsObj.map((itemsObj) => {
            return(
                    <>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                        {/* <li class="page-item">
                            <a type="button" class="page-link"  disabled={currentPage===1?true:false } 
                            onClick={showFirstPage}>First
                            </a>
                        </li> */}
                        <li class="page-item">
                            <a class="page-link"  disabled={itemNumber==0?true:false} 
                            href={'?page='+ (itemNumber-1)}
                            >Previous</a>
                        </li>
                        {arr.map((arr) => {
                            return(
                                <>
                                <li class="page-item">
                                    <a class="page-link" 
                                    href={'?page=' + ({arr}-1)}
                                    >{arr}
                                    </a>
                                </li>
                                </>
                            )
                        })}

                        <li class="page-item">
                            <a class="page-link"  disabled={(itemNumber+1)==itemTotalPage?true:false } 
                            href={'?page=' + (itemNumber+1)}
                            >Next
                            </a>
                        </li>
                        {/* <li class="page-item">
                            <a type="button" class="page-link"  disabled={(itemNumber+1)==totalPages?true:false} 
                            onClick={showLastPage}>Last
                            </a>
                        </li> */}
                    </ul>
                    </nav>
                    </>
                )
            })}                

           

        </>
    );
}

export default MainList;