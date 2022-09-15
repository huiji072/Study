import React from "react";
import './Comment.css';
import QuestionComment from "./QuestionComment";

function Comment() {
    return (
        <>
        <div class="commentQuestionForm" >
            <textarea placeholder=" 질문을 입력하세요." class="question-1"></textarea>
            <input type="button" value="등록" class="commentRegisterBtn"/>
        </div>

        <QuestionComment/>
        
        </>

    );
}

export default Comment;