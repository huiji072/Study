import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cart from "./Cart";
import { DeleteOutlined } from '@mui/icons-material';

function CartList() {

    const deletedCart = id => {
        alert("click");
        axios({
            url: '/cartItem/'+id,
            method: 'DELETE'
        }).then((res) => {
            callback(res.data);
        })
    }

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: '/cart',
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

    return(
        <>
            {testStr.cartItem && testStr.cartItem.map((cartItem, id) => {
            {/* {cartItem && cartItem.map((cartItem) => { */}
            <li key={cartItem.itemId}/>
                return(
                    <tr>
                        <h1>{cartItem.itemId}</h1>
                    <td class="text-center align-middle">
                        <input type="checkbox" name="cartChkBox" />
                    </td>
                    <td class="d-flex">
                        <div >
                            <img src='/img/bed.jpg' class = "cartImg"/>
                        </div>
                        <div class="align-self-center">
                            <span class="fs24 font-weight-bold">{cartItem.itemNm}</span>
                            <div class="fs18 font-weight-light">
                                <span class="input-group mt-2">

                                    <input type="number" name="count" 
                                         min="1" value={cartItem.count}
                                        onChange="changeCount(this)" class="form-control mr-2"/>
                                    <button type="button" class="close" aria-label="Close" onClick={()=>deletedCart(cartItem.itemId)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </td>

                </tr>
                )
            })}
       </>
    )
}

export default CartList;