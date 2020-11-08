import React,{useState} from 'react';

const handleSeeMoreClick = e => {
    console.log('estoy funcionando bien');
    e.preventDefault();
}

const p = (props) => {
    console.log(props);
}

function Noticia(props){
    return(
        <div className="noticia-normal">
            <div className="img-noticia">
                IMGEN
            </div>
            <div className="container-noticia">
                <p>{props.dataNews.headline}</p>
                <p>{props.dataNews.text}</p>
            </div>
        </div>
    )
}

export default Noticia;