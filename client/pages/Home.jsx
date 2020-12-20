import React,{useState,useEffect} from 'react'
import Layout from '../layout/layout'
import Noticia from '../components/Noticia'
import Titular from '../components/Titular'
import {getHeadline,getAllNews} from '../Actions/ActionsNews'
import {useDispatch, useSelector} from 'react-redux'

// async function insertStateTitular(callback){
//         var headlinep
//         try {headlinep = await getHeadline()} 
//         catch (err) {console.log(err)}
//         if (headlinep !== undefined || headlinep !== null) callback(headlinep)
// }

async function pushComponentNoticia(data,setData){
        var dataReturn = []
        dataReturn = data.map((item, index) => {
                return <Noticia key={index} dataNews={item} />
        })
        setData(dataReturn)
}

function Home(props) {
        const [arrayComponents ,setArrayComponentsState] = useState([])
        const [titular,setTitularState] = useState({})
        const dataHeadline = useSelector((state) => state.chargeHeadline)
        const { loading, data, error } = dataHeadline
        const dispatch = useDispatch();
        useEffect(async ()=>{
                // setTitularState(headline)
                // let dataNews = await getAllNews()
                // pushComponentNoticia(dataNews,setArrayComponentsState)
                dispatch(getHeadline())
                console.log(error)
                console.log(loading)
                console.log(data)
                
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

