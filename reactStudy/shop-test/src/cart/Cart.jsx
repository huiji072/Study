import React, { Component } from 'react';
import './Cart.css';
import CartList from './CartList';
function Cart(props) {



        return(
            <div class="cartContainer">
                <div>
                    <h2 class="mb-4">장바구니 목록</h2>
                <div>

                <table class="table">
                    <thead>
                    <tr class="cartListTr1">
                        <td>
                            <input type="checkbox" id="checkall" onclick="checkAll()"/> 
                        </td>
                        <td>상품정보</td>
                    </tr>
                    </thead>
                    <tbody>
                        <CartList/>
                    </tbody>
                </table>


                {/* <div class="text-center mt-3">
                    <button type="button" class="btn btn-primary btn-lg" onClick={orders}>주문하기</button>
                </div> */}

                </div>
            </div>

            </div>
        );
}

export default Cart;