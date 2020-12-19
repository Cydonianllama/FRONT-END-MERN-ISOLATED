import React,{useState,useEffect} from 'react'
import Layout from '../layout/layout'
import Noticia from '../components/Noticia'
import Titular from '../components/Titular'
import {getAllNews,getHeadline} from '../Actions/ActionsNews'

function Home(props) {

        const [arrayComponents ,setArrayComponentsState] = useState([]);
        const [titular,setTitularState] = useState({});
        
        useEffect(async ()=>{
                let processTitular = async() => {
                        var headlinep
                        try{
                                headlinep = await getHeadline()
                        }catch(err){
                                console.log(err)
                        }
                        if (headlinep !== undefined || headlinep !== null) {
                                setTitularState(headlinep) 
                        } 
                }
                let newsList = async () =>
                {
                        var dataNews = []
                        var dataReturn = []
                        dataNews = await getAllNews()
                        dataReturn = dataNews.map((item, index) => {
                                return <Noticia key={index} dataNews={item} />
                        })
                        return dataReturn
                }

                let News = await newsList(); 
                console.log(News);
                setArrayComponentsState(News);
                processTitular();
        },[props])

        return (
                <div>
                        <Layout>        
                                <div className="headline">
                                        <Titular dataTitular={titular}/>
                                </div>
                                <div className="container-noticias">
                                        {arrayComponents}
                                </div>
                                <div className="container-deportes">
                                        <h2>DEPORTES</h2>
                                        
                                </div>
                                <div className="container-espectaculos">
                                        <h2>ESPECTACULOS</h2>
                                </div>
                                <div className= "container-variados">
                                        <h2>VARIADOS</h2>
                                </div>
                        </Layout>
                </div>
        )
}

export default Home;

