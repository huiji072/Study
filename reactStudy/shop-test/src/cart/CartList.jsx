import React, { Component } from 'react';
import './CartList.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';

class CartList extends Component {
    render() {
        return(
            <div class="cartList">
            <div class="content-mg">
                <h2 class="mb-4">장바구니 목록</h2>

            <div>

                <table class="table">
                    <colgroup>
                        <col width="30%"/>
                        <col width="70%"/>
                    </colgroup>
                    <thead>
                    <tr class="text-center">
                        <td>
                            <input type="checkbox" id="checkall" onclick="checkAll()"/> 전체선택
                        </td>
                        <td>상품정보</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="text-center align-middle">
                            <input type="checkbox" name="cartChkBox" />
                        </td>
                        <td class="d-flex">
                            <div class="repImgDiv align-self-center">
                                <img src='img/bed.jpg' class = "rounded repImg"/>
                            </div>
                            <div class="align-self-center">
                                <span class="fs24 font-weight-bold"></span>
                                <div class="fs18 font-weight-light">
                                    <span class="input-group mt-2">

                                        <input type="number" name="count" 
                                             min="1"
                                            onchange="changeCount(this)" class="form-control mr-2" />
                                        <button type="button" class="close" aria-label="Close">
                                            <span aria-hidden="true" onclick="deleteCartItem(this)">&times;</span>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </td>

                    </tr>
                    </tbody>
                </table>


                <div class="text-center mt-3">
                    <button type="button" class="btn btn-primary btn-lg" onclick="orders()">주문하기</button>
                </div>

            </div>
        </div>

            </div>
        );
    }
}

export default CartList;