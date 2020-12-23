import React,{useState,useEffect} from 'react'

function Comments({dataComments}){
    const handlePublish = ()=>{
        console.log('estoy publicando');
    }
    useEffect(()=>{
        
    },[dataComments])
    return(
        <>
            <div className="Comments-container">
                <div class="comment-action">
                    <div class="avatar">

                    </div>
                    <div class="options-comment">
                        <input type="text" placeholder="escribe tu comentario" />
                        <button onClick={handlePublish}>publicar</button>
                    </div>
                </div>
            </div>        
        </>
    )

}

export default Comments;