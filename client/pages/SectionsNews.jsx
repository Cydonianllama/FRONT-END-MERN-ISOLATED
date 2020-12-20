import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout';
import {getNewsByType} from '../Actions/ActionsNews';

const handleGetNews = async (typen) => {
    let returndata = [];
    let data = await getNewsByType(typen);
    data.map((item, index) => {
        console.log(item.tags[0].name)
        if (item.tags[0].name === typen) {
            returndata.push(<Noticia key={index} dataNews={item} />);
        }
    });
    return returndata;
}

function SectionNews(props) {
    const [arrayComponents, setArrayComponentsState] = useState([]);
    useEffect(async () => {
        //let News = await handleGetNews(props.type);
       //setArrayComponentsState(News);
    }, [props])
    return (
        <div>
            <Layout>
                <div className="container-noticias">
                    {arrayComponents}
                </div>
            </Layout>
        </div>
    )
}

export default SectionNews;