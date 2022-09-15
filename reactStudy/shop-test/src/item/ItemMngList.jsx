import React from "react";
import ItemMng from "./ItemMng";
import './ItemMng.css';

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

function ItemMngList() {
    return(
        <div>
            {itemList.map((item) => {
                return(
                    <>
                    <div>
                        <tr >
                            <td >{item.itemId}</td>
                            <td>
                                <a>{item.itemNm}</a>
                            </td>
                            <th>{item.stockNumber}</th>
                            <td>{item.itemSellStatus}</td>
                            <td>{item.createdBy}</td>
                            <td>{item.regTime}</td>
                        </tr>
                    </div>
                    {/* <ItemMngForm itemId={item.itemId} itemNm={item.itemNm} stockNumber={item.stockNumber}
                    itemSellStatus={item.itemSellStatus} createdBy={item.createdBy} regTime={item.regTime} /> */}
                    </>
                    
                )
            })}
        </div>
    )
}

export default ItemMngList



