import React,{useState} from 'react';
import {Link} from 'react-router-dom'

function Noticia(props){

    return(
        <div className="noticia-normal">
            <Link to="/exactpath">
                <div className="img-noticia-normal" >
                    IMGEN
                </div>
            </Link>
            <div className="container-noticia">
                <p>{props.dataNews.headline}</p>
            </div>
        </div>
    )
}

export default Noticia;