import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


class ItemForm extends Component {
    render() {
        return(
            <div>

                <div>
                    <h2>상품 등록</h2>
                </div>

                <div>
                    <select class="custom-select">
                        <option value="SELL">판매중</option>
                        <option value="SOLD_OUT">품절</option>
                    </select>
                </div>

                <div>
                    <span>상품명</span>
                    <input type="text" placeholder="상품명을 입력해주세요"></input>
                </div>

                <div>
                    <span>재고</span>
                    <input type="text" placeholder="상품의 재고를 입력해주세요"></input>
                </div>

                <div>
                    <span>상품 상세 내용</span>
                    <textarea></textarea>
                </div>

                <div>
                    {/* <input type="file" class="custom-file-input" name="itemImgFile"> */}
                    <label>상품이미지</label>
                </div>


                <Button type='submit' variant="contained" sx={{ mt: 3, ml: 1, mr:1, mb: 2 }} >저장</Button>
            </div>
        );
    }
}

export default ItemForm;