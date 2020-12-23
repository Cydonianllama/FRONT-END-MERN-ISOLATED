import React from 'react'
import CommentForm from '../components/CommentForm'
import Comment from '../components/Comment'

function CommentSection(){
    return(
        <>
            <div className = "container-commentsection">
                <CommentForm/>
                <Comment/>
            </div>
        </>
    )
}
export default CommentSection;