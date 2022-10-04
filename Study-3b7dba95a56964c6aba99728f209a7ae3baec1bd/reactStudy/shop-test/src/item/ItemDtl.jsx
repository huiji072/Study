import React, { useState, useEffect } from 'react';
import {useParams} from "react-router"
import axios from 'axios'
import './ItemDtl.css';
import Recomment from './Recomment';

function ItemDtl() {

    // 장바구니에 담기
    const addCart = (id, count) => {

        const paramData = {
            itemId: id,
            count: orderStockNumber
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
            count: orderStockNumber
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
        }).catch((error) => {
            callback(error);
            alert(error);
        })
    }

    // 질문 등록
    const [question, setQuestion] = useState('');

    const inputQuestion = (event) => {
        setQuestion(event.target.value);
      }

    const registerQuestion = (id) => {

        const itemId = id;
        const paramData = {
            question: question,
            itemId: itemId
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
            console.log(err);
        })        
    }    

    // 답변 클릭 시 답변 폼

    const [answerForm, setAnswerForm] = useState(false);
    const [answerId, setAnswerId] = useState('');

    const showAnswerForm = (itemId, e) => {
        setAnswerId(itemId);
    }
    console.log(answerId)



    //답변 등록
    const [answer, setAnswer] = useState('');

    const inputAnswer = (event) => {
        setAnswer(event.target.value);
    }

    const registerAnswer = (itemId, questionId) => {

        const paramData = {
            questionId: questionId,
            itemId: itemId,
            answerInput: answer
        }

        const param = JSON.stringify(paramData);

        axios({
            url: '/registerAnswer',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: param
        }).then((res) => {
            callback(res.data);
            alert("답변이 등록되었습니다.");
            window.location.href='/'+itemId;
        }).error((err) => {
            callback(err);
            alert("답변 등록 권한이 없습니다!");
            console.log(err);
        })        
    }    

    // 구매수량 가져오기
    const [orderStockNumber, setOrderStockNumber] = useState('1');

    const handleChangeOrderStockNumber = (event) => {
        setOrderStockNumber(event.target.value)
    }

    const { itemId } = useParams();
    


// 데이터 가져오기
    const [ testStr, setTestStr ] = useState('');
    const [pageNum, setPageNum] = useState(0)
    const url = '/item/'+itemId

    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: url,
              method: 'GET',
              params: {
                "pageNum": pageNum
              }
          }).then((res) => {
              callback(res.data);
              console.log(res.data);
          })
        }, []
    );

    // 페이징
    const prevPage = (e) => {
        e.preventDefault();
        setPageNum(pageNum - 1);
        axios({
            url: url,
            method: 'GET',
            params: {
                "pageNum": pageNum-1
            }
        }).then((res) => {
            callback(res.data);
        })
    }

    const nextPage = (pageNum, e) => {
        e.preventDefault();
        setPageNum(pageNum + 1);
        console.log("after ", pageNum)
        axios({
            url: url,
            method: 'GET',
            params: {
                "pageNum": pageNum+1
            }
        }).then((res) => {
            callback(res.data);
        })

    }

    const clickPage = (arr, e) => {
        e.preventDefault();
        setPageNum(arr)
        console.log(arr)
        axios({
            url: url,
            method: 'GET',
            params: {
                "pageNum": arr
            }
        }).then((res) => {
            callback(res.data);
        })
    }

const arr = [1, 2, 3, 4, 5]


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
                                        <input type="number" name="count" id="count" class="form-control" 
                                        min="1" max={item.stockNumber} value={orderStockNumber} defaultValue="1"
                                        onChange={handleChangeOrderStockNumber}/>
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

    <ul  className="list-group mb-4">
            {testStr.comment && testStr.comment.map(comment => (
                <li key={comment.answerId}>
                        <>                
                { comment.answerDepth == 0 && 
                <>
                    <div className="commentWrapper">
                        <div>
                            <img className="commentImage"
                                src="/img/comment.png" />
                        </div>
                        <div className="commentCotentContainer" key={comment.id}>
                            <span className="commentNameText">{comment.answerEmail}</span>
                            <span className="commentRegTime">{comment.answerRegTime}</span>
                            <span className="commentCommentText">{comment.answerContent}.</span>
                            <input type="button" value="답변" className="commentRegisterBtn2" id={comment.answerId}
                            onClick={(e) => showAnswerForm(comment.answerId, e)}/>
                            {/* <p>{answerId}</p> */}
                        </div>
                    </div>
                    {answerId == comment.answerId && (
                    <div class="commentAnswerForm" >
                        <textarea onChange={inputAnswer} placeholder=" 답변을 입력하세요." class="question-1"></textarea>
                        <button value="등록" class="commentRegisterBtn"
                        onClick={() => registerAnswer(item.id, comment.groupId)}>등록</button>
                    </div>
                )}
                </>    
                }

                {comment.answerDepth == 1 &&
                    <div className="commentWrapper2">
                        <div>
                            <img className="commentImage"
                            src="/img/comment.png" />
                        </div>

                        <div className="commentCotentContainer" key={comment.id}>
                            <span className="commentNameText">{comment.answerEmail}</span>
                            <span className="commentRegTime">{comment.answerRegTime}</span>
                            <span className="commentCommentText">{comment.answerContent}.</span>                    
                        </div>
                    </div>        
                }                
                
            </>
                    
            </li>
            ))}
        </ul>

        </>
        </>


        );
        })}

<>

        <div>
            <ul className='pagination justify-content-center'>

            <li className='page-item'>
                <a className='page-link'  disabled={pageNum==0?true:false} 
                href={'?page='+ (pageNum)} type='button'
                onClick={prevPage}
                >Previous
                </a>
            </li>
            {arr.map((arr) => {
                return(
                    <>
                <li className='page-item'>
                        <a className='page-link'
                        href={'?page=' + (arr-1)} 
                        onClick={(e) => clickPage(arr-1, e)}
                        >{arr} 
                        </a>
                    </li>
                    </>
                )
            })}

            <li className='page-item'>
                <a className="page-link"  disabled={(pageNum+1)==pageNum?true:false } 
                href={'?page=' + (pageNum)} type='button'
                onClick={(e)=>nextPage(pageNum, e)} 
                >Next
                </a>
            </li>
        </ul>
        </div>
</>     
    </div>
);        
}

export default ItemDtl;