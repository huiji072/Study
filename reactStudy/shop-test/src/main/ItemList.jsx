import React from "react";
import Main from "./Main";

const itemList = [
    {
        itemNm: "test1",
        itemDetail: "props를 이용하여 출력된 값입니다.",
        stockNumber: 10
    },
    {
        itemNm: "test2",
        itemDetail: "props를 이용하여 출력된 값입니다2",
        stockNumber: 100
    },
]

function ItemList(props) {
    return(
        <div>
            {itemList.map(( item) => {
                return(
                    <Main itemNm={item.itemNm} itemDetail={item.itemDetail} stockNumber={item.stockNumber}/>
                );
            })}
        </div>
    );
}

export default ItemList;