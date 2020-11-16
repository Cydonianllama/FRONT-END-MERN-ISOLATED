import {useState,useEffect} from 'react'
import Comments from './Comments.jsx'

function SectionNews({dataSectionNews}){
    return(
        <>
            <div className="container-new-complete">
                <Comments />
            </div>
            
        </>
    )    
}

export default SectionNews;