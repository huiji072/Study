import React, { useState, useEffect } from 'react';
import {useParams} from "react-router"
import axios from 'axios'
import './Comment.css';

function QuestionComment() {
    
    const { itemId } = useParams();
    const url = '/item/'+itemId

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url:  url,
              method: 'GET'
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );

    return(
        <>
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
    );
}

export default QuestionComment;