import React, { Component } from 'react';
import './ItemMng.css';
import ItemMngList from './ItemMngList';

function ItemMng(props) {
        return(
            <div class="containerItemMng">

                <div class="orderByItemMng" >
                    <div>
                        {/* <form action="/admin/items"> */}
                            <button class="btn btn-primary" type="submit" >아이디 내림차순</button>
                        {/* </form>
                        <form action="/admin/item/itemMngOrderByItemNmAsc"> */}
                            <button class="btn btn-primary" type="submit">이름 오름차순</button>
                        {/* </form> */}
                    </div>
                </div>
            <br/>


            <form role="form" method="get" >
                <table class="table">
                    <thead>
                    <tr>
                        <td>상품아이디</td>
                        <td>상품명</td>
                        <td>상품개수</td>
                        <td>상태</td>
                        <td>등록자</td>
                        <td>등록일</td>
                    </tr>
                    </thead>

                    <tbody> 
                        <ItemMngList/>
                    </tbody>

                </table>


                <div class="form-control-main-itemMng">
                    <select  >
                        <option value="all">전체기간</option>
                        <option value="1d">1일</option>
                        <option value="1w">1주</option>
                        <option value="1m">1개월</option>
                        <option value="6m">6개월</option>
                    </select>
                    <select  >
                        <option value="">판매상태(전체)</option>
                        <option value="SELL">판매</option>
                        <option value="SOLD_OUT">품절</option>
                    </select>
                    <select >
                        <option value="itemNm">상품명</option>
                        <option value="createdBy">등록자</option>
                    </select>

                    <input type="text" placeholder="검색어를 입력해주세요"/>
                    <button id="searchBtn" type="submit" class="btn btn-primary">검색</button>
                </div>
            </form>

            </div>
        );
}

export default ItemMng;