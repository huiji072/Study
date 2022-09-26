import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './ItemForm.css';
import { useParams } from 'react-router-dom';

function ItemUpdate(props) {

    let formData = new FormData();

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    function itemNew(e){
        e.preventDefault();
    }

    const params = useParams();

    useEffect(
        () => {
            const itemId = params.itemId;
          axios({
              url: '/admin/item/'+itemId,
              method: 'GET'
          }).then((res) => {
              callback(res.data);
              const itemNm2= res.data.item[0].itemNm
          })
          
        }, []
    );

    const[itemSellStatus, setItemSellStatus] = useState("SELL");
    const[itemNm, setItemNm] = useState("");
    const[stockNumber, setStockNumber] = useState("");
    const[itemDtl, setItemDtl] = useState("");

    const handleChangeItemSellStatue = (event) => {
        setItemSellStatus(event.target.value);
    }

    const handleChangeItemNm = (event) => {
        setItemNm(event.target.value);
    }

    const handleChangeStockNumber = (event) => {
        setStockNumber(event.target.value);
    }

    const handleChangeItemDtl = (event) => {
        setItemDtl(event.target.value);
    }

    // const handleChangeItemImgDto = (e) => {
    //     formData.append("imgFile", e.target.files[0]);
    // }

    const onFileChange = (e) => {
        formData.append("imgFile", e.target.files[0]);
    }

    const data = {
        itemSellStatus: itemSellStatus,
        itemNm: itemNm,
        stockNumber: stockNumber,
        itemDetail: itemDtl,
        id: 334,
        itemImgIds: [335, 1]
    }
    
    const jsonData = JSON.stringify(data);
    console.log(jsonData)

    formData.append("data", new Blob([jsonData], {type: "application/json"}));

    // 상품 수정
    const updateItem = () => {
        const itemId = params.itemId
        axios({
            url: '/admin/item/'+itemId,
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            data : formData
        }).then((res) => {
            callback(res.data);
            console.log(res.data);
        }).catch((error) => {
          console.log(error);
        })
        window.location.href = "/";
    }

        return(
            <div className="itemFormContainer">
            {testStr.item && testStr.item.map ((item) => {
                <li key={item.id}/>
                return(
                    <>
                     <div>
                    <h2>상품 수정</h2>
                    
                </div>
            <form onSubmit={itemNew}>
                <div class="form-group">
                    <select class="form-select" value={itemSellStatus} onChange={handleChangeItemSellStatue}>
                        <option value="SELL">판매중</option>
                        <option value="SOLD_OUT">품절</option>
                    </select>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">상품명</span>
                        
                    </div>
                    <input value={itemNm} onChange={handleChangeItemNm} 
                    class="form-control" type="text" placeholder="상품명을 입력해주세요"></input>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">재고</span>
                    </div>
                    <input value={stockNumber} onChange={handleChangeStockNumber}
                    class="form-control" type="number" placeholder="상품의 재고를 입력해주세요"></input>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">상품 상세 내용</span>
                    </div>
                    <textarea value={itemDtl} onChange={handleChangeItemDtl}
                    class="form-control"></textarea>   

                </div>

                {/* 이미지 */}

                {/* <div >
                    <div class="form-group" each="itemImgDto, status: ${itemFormDto.itemImgDtoList}">
                        <div class="custom-file img-div">
                            <input onChange={handleChangeItemImgDto}
                            type="file" class="custom-file-input" name="imgFile"/>
                            <input type="hidden" name="itemImgIds" value="${itemImgDto.id}"></input>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div> */}

                <div>
                    <input type="file" name="imgFile" onChange={onFileChange}/>
                    <input type="hidden" name="itemImgIds" 
                    value={item.itemDtoList[0].id}/>
                    {item.itemDtoList[0].id}
                </div>
        

                {/* 수정 버튼 */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary"
                    onClick={()=>updateItem()}
                    formAction={'/admin/item/'+item.id}
                    >
                        Update
                    </button>
                </div>

            </form>
                    </>
                );
               
            })}
            </div>
        );
}

export default ItemUpdate;