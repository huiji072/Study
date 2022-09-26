import React, { useState, useEffect } from 'react';
import {useParams} from "react-router"
import axios from 'axios'
import './ItemDtl.css';
import Comment from '../comment/Comment';

function ItemDtl() {

    // 장바구니에 담기
    const addCart = (id, count) => {

        const paramData = {
            itemId: id,
            count: count
        }

        const param = JSON.stringify(paramData);

        axios({
            url: '/cart',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: param
        }).then((res) => {
            callback(res.data);
            alert("상품을 장바구니에 담았습니다.");
            window.location.href='/cart/Cart';
        })
    }

    // 주문하기
    const order = (id, count) => {

        const paramData = {
            itemId: id,
            count: count
        }
        const param = JSON.stringify(paramData);

        axios({
            url: '/order',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: param
        }).then((res) => {
            callback(res.data);
            alert("구매가 완료 되었습니다.");
            window.location.href='/order/OrderHist';
        })
    }

    // 질문 등록
    const [question, setQuestion] = useState('');

    const inputQuestion = (event) => {
        setQuestion(event.target.value);
      }

    const registerQuestion = (id) => {
        const paramData = {
            itemId: id,
            questionInput: question
        }

        const param = JSON.stringify(paramData);
        axios({
            url: '/registerQuestion',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: param
        }).then((res) => {
            callback(res.data);
            alert("질문이 등록되었습니다.");
            window.location.href='/'+id;
        }).error((err) => {
            alert(err);
        })        
    }    


    const { itemId } = useParams();
    const url = '/item/'+itemId
    console.log(url);

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: url,
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

        return(
            <div className="itemDtl">

                {testStr.item && testStr.item.map ((item) => {
                    return(
                        <>

                        <input type="hidden" id="itemId"/>

                            <div class="d-flex" >
                                <div class="repImgDiv" >
                                    <img src={item.imgDtoList[0].imgUrl} class = "itemDtlImg" />
                                </div>
                                <div class="wd50ItemDtl">
                                    <span class="badge badge-primary mgb-15">
                                        판매중
                                    </span>
                                    <span class="badge btn-danger mgb-15" >
                                        품절
                                    </span>
                                    <div class="h4" >{item.name}</div>
                                    <hr class="my-4"/>

                                    <div class="wd50">
                                        <div class="h4">{item.stockNumber}</div>
                                        <hr class="my-4"/>
                                    </div>

                                    <div class="text-right">

                                        <div class="input-group w-50">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">구매수량</span>
                                            </div>
                                            <input type="number" name="count" id="count" class="form-control" value={item.stockNumber} min="1"/>
                                        </div>
                                    </div>
                                    <hr class="my-4"/>


                                    <div class="text-right">
                                        <button type="button" class="btn btn-light border border-primary btn-lg" onClick={()=>addCart(item.id, item.stockNumber)}>장바구니 담기</button>
                                        <button type="button" class="btn btn-primary btn-lg" onClick={()=>order(item.id, item.stockNumber)}>주문하기</button>
                                    </div>
                                    <div  class="text-right">
                                        {/* <button type="button" class="btn btn-danger btn-lg">{item.sellStatus}</button> */}
                                    </div>
                                </div>
                            </div>

                            <div class="jumbotron jumbotron-fluid mgt-30" >
                                <div class="itemDtlExplain">
                                    <h3 class="display-5">상품 상세 설명</h3>
                                    <hr class="my-4"/>
                                    <p class="lead">{item.dtl}</p>
                                </div>
                            </div>

                            <br/>

{/* 질문과 답변 */}
         <>
         <div class="commentQuestionForm" >
            <textarea onChange={inputQuestion} placeholder=" 질문을 입력하세요." class="question-1"></textarea>
            <button value="등록" class="commentRegisterBtn"
            onClick={() => registerQuestion(item.id)}>등록</button>
        </div>

        {testStr.comment && testStr.comment.map((comment) => {
            return(
        <>                
        { comment.answerDepth == 0 && 
            <div className="commentWrapper">
                <div>
                    <img className="commentImage"
                        src="/img/comment.png" />
                </div>
                    
                <div className="commentCotentContainer">
                    <span className="commentNameText">{comment.answerEmail}</span>
                    <span className="commentRegTime">{comment.answerRegTime}</span>
                    <span className="commentCommentText">{comment.answerContent}.</span>
                    <input type="button" value="답변" className="commentRegisterBtn2"/>
                </div>
            </div>
        }

        {comment.answerDepth == 1 &&
            <div className="commentWrapper2">
                <div>
                    <img className="commentImage"
                    src="/img/comment.png" />
                </div>

                <div className="commentCotentContainer">
                    <span className="commentNameText">{comment.answerEmail}</span>
                    <span className="commentRegTime">{comment.answerRegTime}</span>
                    <span className="commentCommentText">{comment.answerContent}.</span>                    
                </div>
            </div>        
        }


                        
        </>
                );
            })}
        
        </>
                            </>

                    );
                })}

            

            </div>
        );
}

export default ItemDtl;