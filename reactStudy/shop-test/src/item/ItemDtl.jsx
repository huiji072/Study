import React, { Component } from 'react';
import './ItemDtl.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


class ItemDtl extends Component {
    render() {
        return(
            <div className="itemDtl">

            <input type="hidden" id="itemId"></input>

            <div class="d-flex" >
                <div class="repImgDiv" >
                    <img src="img/bed.jpg" class = "rounded repImg" />
                </div>
                <div class="wd50">
                    <span class="badge badge-primary mgb-15">
                        판매중
                    </span>
                    <span class="badge btn-danger mgb-15" >
                        품절
                    </span>
                    <div class="h4" >상품명</div>
                    <hr class="my-4"/>

                    <div class="wd50">
                        <div class="h4" >50</div>
                        <hr class="my-4"/>
                    </div>

                    <div class="text-right">

                        <div class="input-group w-50">
                            <div class="input-group-prepend">
                                <span class="input-group-text">구매수량</span>
                            </div>
                            <input type="number" name="count" id="count" class="form-control" value="1" min="1"/>
                        </div>
                    </div>
                    <hr class="my-4"/>


                    <div class="text-right">
                        <button type="button" class="btn btn-light border border-primary btn-lg" onclick="addCart()">장바구니 담기</button>
                        <button type="button" class="btn btn-primary btn-lg" onclick="order();">주문하기</button>
                    </div>
                    <div  class="text-right">
                        <button type="button" class="btn btn-danger btn-lg">품절</button>
                    </div>
                </div>
            </div>

            <div class="jumbotron jumbotron-fluid mgt-30" >
                <div class="container">
                    <h4 class="display-5">상품 상세 설명</h4>
                    <hr class="my-4"/>
                    <p class="lead">상품 상세 설명을 적는 곳입니다. <br></br> 두번째 줄입니다.</p>
                </div>
            </div>

            </div>
        );
    }
}

export default ItemDtl;