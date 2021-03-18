import React,{useState,useEffect} from 'react'

import Layout from '../../layout/layout'
import ContnainerHeadline from '../../components/organism/containerHeadline/HeadlineContainer'
import MainNews from '../../components/organism/containerMainNews/MainNews'
import NewsFeatured from '../../components/organism/containerNewsFeatured/NewsFeatured'
import SelectionNews from '../../components/organism/containerSelectionNews/ContainerSelectionNews'

import {getHeadline,getAllNews} from '../../Actions/ActionsNews'
import {useDispatch, useSelector} from 'react-redux'

const Home = (props) =>  {

    const [arrayComponents ,setArrayComponentsState] = useState([])

    // const dispatch = useDispatch();
    // const dataHeadline = useSelector((state) => state.chargeHeadline)
    // const { loading, data, error } = dataHeadline
    
    useEffect(async ()=>{
        //dispatch(getHeadline())  
    },[])

    return (
        <>
            <Layout>
                <ContnainerHeadline/>
                <MainNews/>
                <NewsFeatured/>
                <SelectionNews/>
            </Layout>
        </>
    )

}

export default Home;

