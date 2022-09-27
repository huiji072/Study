import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Cart.css';

function CartList() {

    //장바구니 취소
    const deletedCart = id => {
        axios({
            url: '/cartItem/'+id,
            method: 'DELETE'
        }).then((res) => {
            callback(res.data);
            alert("해당 상품이 삭제되었습니다.");
            window.location.href='/cart/Cart';
        })
    }

    // 체크박스 핸들러
    const [itemList, setItemList] = useState({cartItem: []})
    const dataList = new Array();
    const paramData = new Object();
    var data = new Object();
    const handleCheckbox = (e) => {
        const {value, checked} = e.target;
        const {cartItem} = itemList;

        console.log(`${value} is ${checked}`);

        if(checked) {
            setItemList({cartItem: [...cartItem, value]});
            
            data["cartItemId"] = value;
            dataList.push(data);

        } else {
            setItemList({cartItem: cartItem.filter((e)=> e !== value)});
        }
            

            
    }


    // 주문하기
    const orders = (checked, id) => {

        paramData['cartOrderDtoList'] = [{cartItemId: "352"}];
        const param = JSON.stringify(paramData);

        axios({
            url: '/cart/orders',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: param
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
        <div class="cartContainer">
                <div>
                    <h2 class="mb-4">장바구니 목록</h2>
                <div>

                <table class="table">
                    <thead>
                    <tr class="cartListTr1">
                        <td>
                            <input type="checkbox" id="checkall" onClick="checkAll()"/> 
                        </td>
                        <td>상품정보</td>
                    </tr>
                    </thead>
                    <tbody>
                    {testStr.cartItem && testStr.cartItem.map((cartItem, id) => {
            {/* {cartItem && cartItem.map((cartItem) => { */}
            <li key={cartItem.itemId}/>
                return(
                    <>
                    <tr>
                    <td class="text-center align-middle">
                        <input type="checkbox" name="cartItem" value={cartItem.itemId}
                        onChange={handleCheckbox}/>
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
                {cartItem.itemId}
                </>
                
                )
                
            })}
                    </tbody>
                </table>

                <div class="text-center mt-3">
                    <button type="button" class="btn btn-primary btn-lg" 
                    onClick={()=>orders()}>
                        주문하기</button>
                </div>
                
                </div>
            </div>

            </div>
       </>
    )
}

export default CartList;