import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import Layout from '../layout/layout';
import NewContent from '../templates/NewContent'
import CommentsSection from '../templates/CommentsSection'
import RelatedNews from '../templates/RelatedNews'

import {getCompleteInformationNew} from '../Actions/ActionsNews'

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
                    <NewContent/>
                    <CommentsSection/>
                    <RelatedNews/>
                </div>
            </Layout>
            
        </>
    )    
}
//import { useHistory } from "react-router-dom";
// const history = useHistory();
// history.push('url');
export default NoticiaPage;