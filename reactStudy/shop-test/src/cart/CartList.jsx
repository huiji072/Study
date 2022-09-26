import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cart from "./Cart";
import { DeleteOutlined } from '@mui/icons-material';

function CartList() {

    const deletedCart = id => {
        axios({
            url: '/cartItem/'+id,
            method: 'DELETE'
        }).then((res) => {
            callback(res.data);
            alert("해당 상품이 삭제되었습니다.");
        })
    }

    const [checkItems, setCheckItems] = useState([]);

    const orders = (checked, id) => {
        alert("click")
        if(checked){
            setCheckItems(prev => [...prev, id]);
        }

        // const dataList = new Array();
        // const paramData = new Object();

        // $("input[name=cartChkBox]:checked").each(function() {
        //     const data = new Object();
        //     data["cartItemId"] = id;
        //     dataList.push(data);
        // });

        // paramData['cartOrderDtoList'] = dataList;

        // const param = JSON.stringify(paramData);

        axios({
            url: '/cart/orders',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: "data"
        }).then((res) => {
            callback(res.data);
            alert("주문이 완료되었습니다.");
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
                    <td class="text-center align-middle">
                        <input type="checkbox" name="cartChkBox" />
                    </td>
                    <td class="d-flex">
                        <div >
                            <img src={cartItem.imgUrl} class = "cartImg"/>
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
            <div class="text-center mt-3">
                    <button type="button" class="btn btn-primary btn-lg" onClick={()=>orders()}>주문하기</button>
            </div>
       </>
    )
}

export default CartList;