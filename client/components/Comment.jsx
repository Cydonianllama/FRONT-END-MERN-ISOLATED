import React from 'react'
function RepliesComment(){
    return(
        <>
            <div className = "reply-comment-container">
                reply
            </div>
        </>
    )
}
function ActionsComment(){
    return(
        <>
            <div className = "actions-comment">
                <button>reply</button>
            </div>
        </>
    )
}
function Comment(){
    return(
        <>
            <div className = "wrapper-comment">  
                   <ActionsComment/>
                   <RepliesComment/>
            </div>
        </>
    )
}
export default Comment;