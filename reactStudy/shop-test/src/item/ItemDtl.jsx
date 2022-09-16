import React, { useState, useEffect } from 'react';
import {useParams} from "react-router"
import axios from 'axios'
import './ItemDtl.css';
import Comment from '../comment/Comment';

function ItemDtl() {

    const { itemId } = useParams();
    const url = '/item/'+itemId
    console.log(url);

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: url,
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

        return(
            <div className="itemDtl">

                {testStr.item && testStr.item.map ((item) => {
                    return(
                        <>

                        <input type="hidden" id="itemId"/>

                            <div class="d-flex" >
                                <div class="repImgDiv" >
                                    <img src={item.imgDtoList[0].imgUrl} class = "itemDtlImg" />
                                </div>
                                <div class="wd50ItemDtl">
                                    <span class="badge badge-primary mgb-15">
                                        판매중
                                    </span>
                                    <span class="badge btn-danger mgb-15" >
                                        품절
                                    </span>
                                    <div class="h4" >{item.name}</div>
                                    <hr class="my-4"/>

                                    <div class="wd50">
                                        <div class="h4">{item.stockNumber}</div>
                                        <hr class="my-4"/>
                                    </div>

                                    <div class="text-right">

                                        <div class="input-group w-50">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">구매수량</span>
                                            </div>
                                            <input type="number" name="count" id="count" class="form-control" value={item.stockNumber} min="1"/>
                                        </div>
                                    </div>
                                    <hr class="my-4"/>


                                    <div class="text-right">
                                        <button type="button" class="btn btn-light border border-primary btn-lg" onclick="addCart()">장바구니 담기</button>
                                        <button type="button" class="btn btn-primary btn-lg" onclick="order();">주문하기</button>
                                    </div>
                                    <div  class="text-right">
                                        {/* <button type="button" class="btn btn-danger btn-lg">{item.sellStatus}</button> */}
                                    </div>
                                </div>
                            </div>

                            <div class="jumbotron jumbotron-fluid mgt-30" >
                                <div class="itemDtlExplain">
                                    <h3 class="display-5">상품 상세 설명</h3>
                                    <hr class="my-4"/>
                                    <p class="lead">{item.dtl}</p>
                                </div>
                            </div>

                            <br/>

                            <Comment/>
                            </>

                    );
                })}

            

            </div>
        );
}

export default ItemDtl;