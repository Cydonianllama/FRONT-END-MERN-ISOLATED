import {
    GET_HEADLINE_REQUEST,
    GET_HEADLINE_SUCESS,
    GET_HEADLIME_FAIL    
} from '../utils/constNews'

export const getHeadline = () => async (dispatch) => {
    console.log('estoy queriendo despachar')
    dispatch({type : GET_HEADLINE_REQUEST})
    const url = 'http://localhost:3500/new/getHeadline?date=nomeimportaporahora'
    const parametersHTTP = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    let response
    let data 
    try { 
        response = await fetch(url, parametersHTTP)
        data = await response.json()
        console.log(data)
        dispatch({type : GET_HEADLINE_SUCESS , data : data})
    }
    catch(err){
        console.error(err)
        dispatch({type : GET_HEADLIME_FAIL , error : err})
    }
}

export const getAllNews = async () => {
    const url = 'http://localhost:3500/new/getAll'
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    let data = await response.json()
    console.log(data)
    return data
}

export const getNewsByType = async (paramURLtypeNew) => {
    let uriRequest = `http://localhost:3500/home/${paramURLtypeNew}`
    let response = await fetch(uriRequest, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await response.json()
    let dataTypeData = []
    data.forEach((item, index) => {
        if (item.tags[0].url) dataTypeData.push(item)
    })
    return data
}

export const getCompleteInformationNew = async (titleURL) => {
    let dataBody = RemoveDecorateURl(titleURL)
    let jsonRequest = {
        title: dataBody
    }
    let urlComplete = `http://localhost:3500/getnew`
    let response = await fetch(urlComplete, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        body: JSON.stringify(jsonRequest),
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
    let responseJSON = await response.json()
    return responseJSON
}

export function getMetricsNew(){

}

export function likeNew(){

}

export function dislikeNew(){

}

export function commentNew(){

}

export function deleteCommentNew(){

}

export function updateCommentNew(){
    
}