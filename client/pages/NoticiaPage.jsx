import React,{useState,useEffect} from 'react'
//import { useHistory } from "react-router-dom";
// const history = useHistory();
// history.push('url');
import {useParams,} from 'react-router-dom'
import Layout from '../layout/layout';
import {getCompleteInformationNew} 
from '../Actions/ActionsNews'

function RemoveDecorateURl(url) {
    let withoutDecoration = url.replace(/[-]/g, " ")
    return withoutDecoration
}

function NoticiaPage(props){

    const [data,setDataState] = useState([{content : ''}])
    let  {title} = useParams();

    useEffect( async ()=>{
        await getCompleteInformationNew(title).then((res) => {
            if (res[0] === undefined) setDataState([{ content: '' }])
            else setDataState(res)  
        })
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
                                <p class = "comment-section">{data[0].content}</p>
                                
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