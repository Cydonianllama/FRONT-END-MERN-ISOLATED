import React,{useState,useEffect} from 'react'
import Image from '../components/Image'

function New({title}){
    return(
        <>
            <div className = "new-container">
                <Image/>
                <a href = "#">{title}</a>
            </div>
        </>
    )
}
export default New;