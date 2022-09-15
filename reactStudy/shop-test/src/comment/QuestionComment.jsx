import React from "react";
import './Comment.css';

const commentList = [
    {
        id: 1,
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-25",
        content: "질문입니다.",
        depth: 0
    },
    {
        id: 2,
        createdBy: "buyer@gmail.com",
        regTime: "2022-08-25",
        content: "답변입니다.",
        depth: 1
    },
    {
        id: 3,
        createdBy: "seller1@gmail.com",
        regTime: "2022-08-25",
        content: "질문입니다22222.",
        depth: 0
    },
    {
        id: 4,
        createdBy: "buyer@gmail.com",
        regTime: "2022-08-25",
        content: "답변입니다22222.",
        depth: 1
    },
    {
        id: 4,
        createdBy: "buyer@gmail.com",
        regTime: "2022-08-25",
        content: "질문입니다.123456789",
        depth: 0
    }
    
]

function QuestionComment() {
    return(
        <>
        {commentList.map((comment) => {
                return(
        <>
                    
        { comment.depth == 0 && 
            <div className="commentWrapper">
                <div>
                    <img className="commentImage"
                        src="/img/comment.png" />
                </div>
                    
                <div className="commentCotentContainer">
                    <span className="commentNameText">{comment.createdBy}</span>
                    <span className="commentRegTime">{comment.regTime}</span>
                    <span className="commentCommentText">{comment.content}.</span>
                    <input type="button" value="답변" className="commentRegisterBtn2"/>
                </div>
            </div>
        }

        {comment.depth == 1 &&
            <div className="commentWrapper2">
                <div>
                    <img className="commentImage"
                    src="/img/comment.png" />
                </div>

                <div className="commentCotentContainer">
                    <span className="commentNameText">{comment.createdBy}</span>
                    <span className="commentRegTime">{comment.regTime}</span>
                    <span className="commentCommentText">{comment.content}.</span>                    
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