import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'


const decorateURL = async (URL) => {
    let url_ = URL;
    return await url_.replace(/\s/g,'-');
}

function Noticia(props){

    const [url,setURLState] = useState('');

    useEffect(()=>{
        const transformToURL = async() =>{
            let url_ = '';
            url_ = await decorateURL(props.dataNews.headline); 
            setURLState(url_); 
            console.log(url_);
        }
        transformToURL();
    
    },[props]);
    
    return(
        <div className="noticia-normal">
            <Link to={`/home/${props.dataNews.mainTag}/${url}`}>
                <div className="img-noticia-normal" >
                     <p className = "titulo-noticia" >{props.dataNews.headline}</p>
                </div>
            </Link> 
        </div>
    )
}

export default Noticia;