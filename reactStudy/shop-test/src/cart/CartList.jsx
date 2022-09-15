import React from "react";
import Cart from "./Cart";

const itemList = [
    {
        itemId: 1,
        itemNm: "test1",
        itemDetail: "props를 이용하여 출력된 값입니다.",
        stockNumber: 10,
        itemSellStatus: "SELL",
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-25"
    },
    {
        itemId: 2,
        itemNm: "test2",
        itemDetail: "props를 이용하여 출력된 값입니다2!!",
        stockNumber: 200,
        itemSellStatus: "SOLD_OUT",
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-230"
    },
]

function CartList(props) {
    return(
        <>
            {itemList.map((item) => {
                return(
                    <tr>
                    <td class="text-center align-middle">
                        <input type="checkbox" name="cartChkBox" />
                    </td>
                    <td class="d-flex">
                        <div >
                            <img src='/img/bed.jpg' class = "cartImg"/>
                        </div>
                        <div class="align-self-center">
                            <span class="fs24 font-weight-bold">{item.itemNm}</span>
                            <div class="fs18 font-weight-light">
                                <span class="input-group mt-2">

                                    <input type="number" name="count" 
                                         min="1" value={item.stockNumber}
                                        onchange="changeCount(this)" class="form-control mr-2"/>
                                    <button type="button" class="close" aria-label="Close">
                                        <span aria-hidden="true" onclick="deleteCartItem(this)">&times;</span>
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