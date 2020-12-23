import {
    GET_NEWS_REQUEST,
    GET_NEWS_REQUEST_FAIL,
    GET_NEWS_REQUEST_SUCESS,
    GET_NEW_COMPLETE_FAIL,
    GET_NEW_COMPLETE_REQUEST,
    GET_NEW_COMPLETE_SUCESS,
    NEW_COMMENT_FAIL,
    NEW_COMMENT_NOUSER,
    NEW_COMMENT_REQUEST,
    NEW_COMMENT_SUCESS,
    NEW_CREATE_FAIL,
    NEW_CREATE_REQUEST,
    NEW_CREATE_SUCESS,
    NEW_LIKE_FAIL,
    NEW_LIKE_NOUSER,
    NEW_LIKE_REQUEST,
    NEW_LIKE_SUCESS,
    NEW_DISLIKE_FAIL,
    NEW_DISLIKE_NOUSER,
    NEW_DISLIKE_REQUEST,
    NEW_DISLIKE_SUCESS,
    NEW_UPDATE_FAIL,
    NEW_UPDATE_REQUEST,
    NEW_UPDATE_SUCESS,
    GET_HEADLIME_FAIL,
    GET_HEADLINE_REQUEST,
    GET_HEADLINE_SUCESS,
    GET_NEW_BY_TPYE_FAIL,
    GET_NEW_BY_TPYE_REQUEST,
    GET_NEW_BY_TPYE_SUCESS,
    GET_METRICS_FAIL,
    GET_METRICS_REQUEST,
    GET_METRICS_SUCESS,
    DELETE_COMMENT_FAIL,
    DELETE_COMMENT_REQUEST,
    DELETE_COMMENT_SUCESS,
    UPDATE_COMMENT_FAIL,
    UPDATE_COMMENT_REQUEST,
    UPDATE_COMMENT_SUCESS    
}
from '../utils/constNews';

export const getHeadlineReducer = (state = {},action) =>{
    switch(action.type){
        case GET_HEADLINE_REQUEST :
            return {loading : true}
        case GET_HEADLINE_SUCESS :
            console.log('si funciiono',action.data)
            return {loading : false , data : action.data}
        case GET_HEADLIME_FAIL:
            return {loading : false , error : action.data}
        default:
            return { loading: false, data: 'unknow error' }
        }
        
}

export const getAllNewsReducer = (state = {},action) =>{
    switch(action.type){
        case GET_NEWS_REQUEST:
            return {lodaing : true}
        case GET_NEWS_REQUEST_SUCESS :
            return {loading : false , data : action.data}
        case GET_NEWS_REQUEST_FAIL :
            return {loading : false , error : action.data}
        default:
            return { loading: false, action: 'unknow error' }
    }
}

export const getNewsByTypeReducer = (state,action) =>{
    switch(action.type){
        case GET_NEW_BY_TPYE_REQUEST:
            return {loading : true}
        case GET_NEW_BY_TPYE_SUCESS :
            return {loading : false , data : action.data}
        case GET_NEW_BY_TPYE_FAIL :
            return {loading : false , error : action.data}
    }
}

export const getCompleteInformationNewReducer = (state,action) =>{
    switch(action.type){
        case GET_NEW_COMPLETE_REQUEST:
            return {loading : true}
        case GET_NEW_COMPLETE_SUCESS:
            return {loading : false , data : action.data}
        case GET_NEW_COMPLETE_FAIL:
            return {loading : false , error : action.data}
    }
}

export const getMetricsNewReducer = (state, action) =>{
    switch(action.type){
        case GET_METRICS_REQUEST:
            return {loading : true}
        case GET_NEWS_REQUEST_SUCESS:
            return {loading : false , metrics : action.data}
        case GET_NEWS_REQUEST_FAIL:
            return {loading : false , error : action.data}
    }
}

export const likeNewReducer = (state, action) => {
    switch(action.type){
        case NEW_LIKE_REQUEST:
            return {loading : true}
        case NEW_LIKE_SUCESS:
            return {loading : false , success : true}
        case NEW_LIKE_FAIL :
            return {loading : false , success : false}
    }
}

export const dislikeNewReducer = (state, action) =>{
    switch(action.type){
        case NEW_DISLIKE_REQUEST:
            return {loading : true}
        case NEW_DISLIKE_SUCESS:
            return {loading : false , success : true}
        case NEW_DISLIKE_FAIL:
            return {loading : false , success : false}
    }
}

export const commentNewReducer = (state, action) => {
    switch(action.type){
        case NEW_COMMENT_REQUEST:
            return {loading : true}
        case NEW_COMMENT_SUCESS:
            return {loading : false , success : true}
        case NEW_COMMENT_FAIL:
            return {loading : false , success : false}
    }
}

export const deleteCommentNewReducer = (state, action) =>{
    switch(action.type){
        case DELETE_COMMENT_REQUEST:
            return {loading : true}
        case DELETE_COMMENT_SUCESS:
            return {loading : false , success : true}
        case DELETE_COMMENT_FAIL:
            return {loading : false , success : false}
    }
}

export const updateCommentNewReducer = (state, action) =>{
    switch(action.type){
        case UPDATE_COMMENT_REQUEST:
            return {loading : true}
        case UPDATE_COMMENT_SUCESS:
            return {loading : false , success : true}
        case UPDATE_COMMENT_FAIL:
            return {loading : false , success : false}
    }
}