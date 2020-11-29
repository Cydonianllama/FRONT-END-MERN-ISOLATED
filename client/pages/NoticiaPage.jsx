import React,{useState,useEffect} from 'react'
//import { useHistory } from "react-router-dom";
// const history = useHistory();
// history.push('url');
import {useParams} from 'react-router-dom'
import Layout from '../layout/layout.jsx';

const interactionNew = async (type) =>{

}

const addComment = async () => {

}

function RemoveDecorateURl(url){
    let withoutDecoration = url.replace(/[-]/g, " ")
    console.log(withoutDecoration);
    return withoutDecoration
}

const fetchNewsoneData = async (titleURL) => {
    let url = await RemoveDecorateURl(titleURL)
    let urlComplete = `http://localhost:3500/getnew`
    let data = await fetch(urlComplete, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ title: url })
    })
    //JSON.stringify(url)
    console.log(data)
}

function NoticiaPage(props){

    const [url,setURLState] = useState('');
    let  {title} = useParams();

    useEffect( async ()=>{
        await fetchNewsoneData(title)
    },[props]);
    
    return(
        <>
            <Layout>
                <div className="container-new-complete">
                    <div className = "container-new-content" >
                        <div className = "container-new-content-I">
                            <span class="span-noticia-page">17 de noviembre de 2020</span>
                            <h2 class="h2-noticia-page">{RemoveDecorateURl(title)}</h2>
                            <div className = "image-container-new-content-I">

                            </div>
                            <div className = "interaction-container-new-content-II">
                                <div className = "3-interaction-container-new-content-II">
                                    I F G
                                </div>
                                <div className = "card-publicante">
                                    name publicante
                                </div>
                            </div>
                            <div className = "container-new-content-II">
                                <p class = "comment-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et, ducimus ea cumque, sed officiis magni deleniti error explicabo culpa cum nulla. Veniam impedit, dicta sed in a voluptates fuga.</p>
                                <p class = "comment-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum et, ducimus ea cumque, sed officiis magni deleniti error explicabo culpa cum nulla. Veniam impedit, dicta sed in a voluptates fuga.</p>
                            </div>
                            <div className = "container-new-content-III">
                                <div className = "input-comment-container-new-content-III">
                                    <div className = "input-comment">
                                        colocar comentario
                                    </div>
                                </div>
                                <div className = "comentarios-container-new-content-III">
                                    Seccion de los comentarios
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "container-new-relacionadas">
                        Relaciones
                    </div>
                </div>
            </Layout>
            
        </>
    )    
}

export default NoticiaPage;