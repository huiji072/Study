import React from "react";
import Main from "../main/Main";

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

function MainList(props) {
    return(
        <div>
            {itemList.map(( item) => {
                return(
                    <Main itemNm={item.itemNm} itemDetail={item.itemDetail} stockNumber={item.stockNumber}/>
                    // <ItemMng itemId={item.itemId} />
                );
            })}
        </div>
    );
}

export default MainList;