import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import './ItemForm.css';


class ItemForm extends Component {
    render() {
        return(
            <div className="container">

                <div>
                    <h2>상품 등록</h2>
                </div>

                <div class="form-group">
                    <select class="form-select">
                        <option value="SELL">판매중</option>
                        <option value="SOLD_OUT">품절</option>
                    </select>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">상품명</span>
                        
                    </div>
                    <input class="form-control" type="text" placeholder="상품명을 입력해주세요"></input>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">재고</span>
                    </div>
                    <input class="form-control" type="number" placeholder="상품의 재고를 입력해주세요"></input>
                </div>

                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">상품 상세 내용</span>
                    </div>
                    <textarea class="form-control"></textarea>   

                </div>

                {/* 이미지 */}
                <div >
                    <div class="form-group">
                        <div class="custom-file img-div">
                            <input type="file" class="custom-file-input" name="itemImgFile"/>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div>

                <div >
                    <div class="form-group">
                        <div class="custom-file img-div">
                            <input type="file" class="custom-file-input" name="itemImgFile"/>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div>

                <div >
                    <div class="form-group">
                        <div class="custom-file img-div">
                            <input type="file" class="custom-file-input" name="itemImgFile"/>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div>

                <div >
                    <div class="form-group">
                        <div class="custom-file img-div">
                            <input type="file" class="custom-file-input" name="itemImgFile"/>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div>

                <div >
                    <div class="form-group">
                        <div class="custom-file img-div">
                            <input type="file" class="custom-file-input" name="itemImgFile"/>
                            <label class="custom-file-label" ></label>
                        </div>
                    </div>
                </div>


                <div className="d-grid">
                    {/* 저장 버튼 */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>

                    {/* 수정 버튼 */}
                    {/* <button type="submit" className="btn btn-primary">
                        Submit
                    </button> */}
                    
                </div>

            </div>
        );
    }
}

export default ItemForm;