import React,{useState,useEffect} from 'react';
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


const obtainData = async () =>{
        return dataNoticia;
}

const processNews = async (props) => {
        let dataNews = await obtainData();
        let returnData = []
        if (props.type === 'home') {
                dataNews.map((item,index)=>{
                        returnData.push(item);   
                })
                return returnData;
        }
        else if(props.type === 'nacionales'){
                dataNews.map((item,index)=>{
                        if(item.mainTag === 'nacionales'){
                              returnData.push(item);  
                        }
                })
        }
        else if(props.type === 'internacionales'){
                dataNews.map((item)=>{
                        if(item.mainTag === 'internacionales'){
                                returnData.push(item);
                        }
                })
        }
        return returnData;
}

function Home(props) {

        const [arrayComponents ,setArrayComponentsState] = useState([]);

        useEffect(async ()=>{
                let newsList = async () => {
                        var dataNews = [];
                        var dataReturn = [];
                        dataNews = await processNews(props);
                        dataReturn = dataNews.map((item, index) => {
                                return <Noticia key={index} dataNews={item} />
                        });
                        return dataReturn;
                }

                let News = await newsList(); 
                console.log(News);
                setArrayComponentsState(News);
        },[props])
        
        return (
                <div>
                        <Layout>
                                <div className = "container-noticias">
                                        {arrayComponents}
                                </div>
                        </Layout>
                </div>
        )
}

export default Home;




