import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './ItemForm.css';

function ItemForm(props) {

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    function itemNew(e){
        e.preventDefault();
    }

    const[itemSellStatus, setItemSellStatus] = useState("SELL");
    const[itemNm, setItemNm] = useState("");
    const[stockNumber, setStockNumber] = useState("");
    const[itemDtl, setItemDtl] = useState("");
    const[itemImgFile, setItemImgFile] = useState("");

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

    const handleChangeItemImgDto = (event) => {
        setItemImgFile(event.target.value);
    }

    const data = {
        itemSellStatus: itemSellStatus,
        itemNm: itemNm,
        stockNumber: stockNumber,
        itemDtl: itemDtl
    }


    const jsonData = JSON.stringify(data)

    const sendItemRegisterRequest = () => {
        axios({
            url: '/admin/item/new',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data : jsonData,
            params: {
                "itemImgFile": {
                    imgName: itemImgFile,
                    imgUrl: itemImgFile
                }
            }
        }).then((res) => {
            callback(res.data);
            console.log(res.data);
        }).catch((error) => {
          console.log(error);
        })
        console.log(jsonData)
        console.log(itemImgFile)
        console.log("sending item Register Request");
    }

        return(
            <div className="itemFormContainer">

                <div>
                    <h2>상품 등록</h2>
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

                <div >
                    <div class="form-group" each="itemImgDto, status: ${itemFormDto.itemImgDtoList}">
                        <div class="custom-file img-div">
                            <input value={itemImgFile} onChange={handleChangeItemImgDto}
                            type="file" class="custom-file-input" name="itemImgFile"/>
                            <input type="hidden" name="itemImgIds" value="${itemImgDto.id}"></input>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div>

            

                <div className="d-grid">
                    {/* 저장 버튼 */}
                    <button className="btn btn-primary"
                    onClick={() => sendItemRegisterRequest()}>
                        Submit
                    </button>

                    {/* 수정 버튼 */}
                    {/* <button type="submit" className="btn btn-primary">
                        Submit
                    </button> */}
                    
                </div>
            </form>
            </div>
        );
}

export default ItemForm;