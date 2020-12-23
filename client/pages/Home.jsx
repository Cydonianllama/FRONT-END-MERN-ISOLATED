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
        const [prueba,setStatePrueba] = useState({})
        const dispatch = useDispatch();
        const dataHeadline = useSelector((state) => state.chargeHeadline)
        const { loading, data, error } = dataHeadline
        useEffect(async ()=>{
                // setTitularState(headline)
                // let dataNews = await getAllNews()
                // pushComponentNoticia(dataNews,setArrayComponentsState)
                dispatch(getHeadline())  
        },[props])
        return (
                <div>
                        <Layout>
                                <div className="headline">
                                        <Titular dataTitular={titular} />
                                </div>
                                <div className="container-noticias">
                                        {arrayComponents}
                                </div>
                        </Layout>
                </div>
        )
}

export default Home;

