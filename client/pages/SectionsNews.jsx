import React, { useState, useEffect } from 'react';
import Layout from '../layout/layout.jsx';
import Noticia from '../components/Noticia.jsx';

var dataNoticia = [
    {
        headline: 'andate a la mierda',
        text: 'en esta oportunidad voy a decirte algo importante, puto el que lee',
        tags: ['general', 'nacionales'],
        mainTag: 'nacionales',
        views: 600
    },
    {
        headline: 'michael jackson revive y postulará a la presidencia de bolivia',
        text: 'noticia de ultimo minuto vizcarra c murio ',
        tags: ['general', 'nacionales'],
        mainTag: 'internacionales',
        views: 88
    },
    {
        headline: 'vizacarra legaliza el matrimonio gey para casarse con antauro humala',
        text: 'noticia de ultimo minuto vizcarra c murio ',
        tags: ['general', 'nacionales'],
        mainTag: 'nacionales',
        views: 450
    },
    {
        headline: 'keiko fujimori se convierte en la primera persidente mujer de Chololandia',
        text: 'noticia de ultimo minuto vizcarra c murio ',
        tags: ['general', 'nacionales'],
        mainTag: 'nacionales',
        views: 600
    },
    {
        headline: 'jefferson farfan entro al congreso por podemos peru',
        text: 'entre sus planes tiene el eliminar las matematicas de la curricula inicial',
        tags: ['general', 'nacionales'],
        mainTag: 'nacionales',
        views: 8900
    },
    {
        headline: 'katy perry se caso con ariana grande',
        text: 'entre sus planes tiene el eliminar las matematicas de la curricula inicial',
        tags: ['general', 'internacionales'],
        mainTag: 'internacionales',
        views: 4500
    }
];

const fetchdata = async (type) =>{
    return dataNoticia;
}

const handleObtainNews = async (typen) => {
    let returndata = [];
    let data = await fetchdata(typen);
    data.map((item,index)=>{
            if(item.mainTag === typen){
                returndata.push(<Noticia key={index} dataNews={item} />);
            }
        });
    return returndata;
}

function SectionNews(props) {

    const [arrayComponents, setArrayComponentsState] = useState([]);

    useEffect(async () => {

        let newsList = async () => {
            var dataNews = [];
            dataNews = await handleObtainNews(props.type);
            return dataNews;
        }

        let News = await newsList();
        console.log(News);
        setArrayComponentsState(News);
        
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