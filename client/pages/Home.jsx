import React,{useState,useEffect} from 'react'
import Layout from '../layout/layout.jsx'
import Noticia from '../components/Noticia.jsx'
import Titular from '../components/Titular.jsx'

var dataNoticia = [
        {
                headline: 'andate a la mierda',
                tags: ['general', 'nacionales'],
                mainTag: 'nacionales',
                views: 600
        },
        {
                headline: 'michael jackson revive y postulará a la presidencia de bolivia',
                tags: ['general', 'nacionales'],
                mainTag: 'internacionales',
                views: 88
        },
        {
                headline: 'vizacarra legaliza el matrimonio gey para casarse con antauro humala',
                tags: ['general', 'nacionales'],
                mainTag: 'nacionales',
                views: 450
        },
        {
                headline: 'keiko fujimori se convierte en la primera persidente mujer de Chololandia',
                tags: ['general', 'nacionales'],
                mainTag: 'nacionales',
                views: 600
        },
        {
                headline: 'jefferson farfan entro al congreso por podemos peru',
                tags: ['general', 'nacionales'],
                mainTag: 'nacionales',
                views: 8900
        },
        {
                headline: 'katy perry se caso con ariana grande',
                tags: ['general', 'internacionales'],
                mainTag: 'internacionales',
                views: 4500
        }
];


let headlineP =
{
        headline: 'me tire un pedo jugoso',
        text: 'manche al pobre del costado, no se por que había alguien a mi costado'
};

const obtainHeadline = async()=>{
        return headlineP;
}

const obtainData = async () =>{
        const url = 'http://localhost:3500/'
        const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                }})
        let processedResponse = await response.json()
        return processedResponse
}

function Home(props) {

        const [arrayComponents ,setArrayComponentsState] = useState([]);
        const [titular,setTitularState] = useState({});
        
        useEffect(async ()=>{
                
                let processTitular = async() => {
                        var headlinep
                        try{
                                headlinep = await obtainHeadline()
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
                        dataNews = await obtainData()
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

