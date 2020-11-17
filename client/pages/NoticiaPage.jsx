import React,{useState,useEffect} from 'react'
//import { useHistory } from "react-router-dom";
// const history = useHistory();
// history.push('url');
import {useParams} from 'react-router-dom'
import Layout from '../layout/layout.jsx';

function NoticiaPage(props){

    const [url,setURLState] = useState('');
    let  {title} = useParams();

    useEffect(()=>{
    
        // const nodecorateurl = async (url) => {
        //     let url_ = '';
        //     url_ = await url.replace('-', /\s/g);
        //     setURLState(url_)
        // }
        //<h2>{url}</h2>
        //nodecorateurl(id)

    },[props]);
    
    return(
        <>
            <Layout>
                <div className="container-new-complete">
                    <h2>DREAMCATCHER - {window.location.pathname} - {title}</h2>
                </div>
            </Layout>
            
        </>
    )    
}

export default NoticiaPage;