const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors')
const Schema = mongoose.Schema

//db

const connectDB = async () => {
    await mongoose
        .connect('mongodb://localhost/mongonoticias',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            }
        )
        .then(() => console.log('conexion exitosa a mongoDB'))
        .catch(err => console.log(err))
}
connectDB()

const userSchema = new Schema({
    idUser: String,
    username: String,
    password: String
})

const dataUserSchema = new Schema({
    idUser: String,
    fullname: String,
})

const userEditorSchema = new Schema({
    idUser: String,
    akaEditor: String
})

const titularSchema = new Schema({
    title: String,
    description: String,
    dateTitular : Date
})

const interactionsNewsSchema = new Schema({
    idNews: String,
    idUser: String,
    TypeIteraction: String
})

const replyCommentSchema = new Schema({
    idUser: String,
    comment: String
})

const commentsSchema = new Schema({
    idNew: String,
    idUser: String,
    comment: String,
    replycomment: [replyCommentSchema]
})

const TagSchema = new Schema({
    name: String
})

const newsSchema = new Schema({
    title: String,
    emisionDate: Date,
    content: String,
    idAuthor: String,
    urlImage: String,
    tags: [TagSchema]
})

const metricsNewSchema = new Schema({
    idnewsone: String,
    countvisitors: Number,
})

const modelDataUser     = mongoose.model('dataUser', dataUserSchema, 'dataUser')
const modelUser         = mongoose.model('user', userSchema, 'user')
const modelUserEditor   = mongoose.model('editor', userEditorSchema, 'editor')
const modelTitular      = mongoose.model('titular', titularSchema, 'titular')
const modelInteractionNews  = mongoose.model('interactionnew', interactionsNewsSchema, 'interactionnew')
const modelComments         = mongoose.model('commentsnew', commentsSchema, 'comentsnew')
const modelNews             = mongoose.model('newsone', newsSchema, 'newsone')
const modelMetricsNew       = mongoose.model('metricsnew', metricsNewSchema, 'metricsnew')

//middlewares
const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 
}
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors(corsOptions))


// superuser
const SU_createTITULAR = async (req,res) =>{
    const processRequest = async ({title,description,dateTitular}) =>{
        var isCreateTitular
        try { isCreateTitular = await new modelTitular({ title, description, dateTitular }).save()}
        catch(err){console.error(err)}
        return isCreateTitular
    }
    if(req.body === null || req.body === undefined) res.status(200).send({success : false})
    let response = await processRequest(req.body)
    res.send(response)
}
const SU_createNEW = async (req,res) =>{
    const processRequest = async ({title,emisionDate,content,idAuthor,urlImage,tags}) => {
        let isCreateNew
        try { isCreateNew = await new modelNews({title,emisionDate,content,idAuthor,urlImage,tags})}
        catch(err){console.error(err)}
        return isCreateNew
    }
    if (req.body === undefined || req.body === null) res.status(200).send({success : false})
    let response = await processRequest(req.body)
    res.send(response)
}
const SU_createUSER = async (req,res) => {
    const processRequest = async({idUser,username,password}) =>{
        let isCreateUser 
        try {isCreateUser = await new modelUser({idUser,username,password}).save()}
        catch(err){console.error(err)}
        return isCreateUser
    }
    if(req.body === null || req.body === undefined) res.status(200).send({success : false})
    let response = await processRequest(req.body)
    res.status(200).send(response)
}

app.post('/su/createTitular',SU_createTITULAR)
app.post('/su/createNew',SU_createNEW)
app.post('/su/createUSER',SU_createUSER)

//pages

//user

const signIn = (req,res) => {

}

const signout = (req,res) =>{

}

const registerUser = (req,res) =>{

}

const modifyUserInfo = (req,res) =>{

}

const deleteAccount = (req,res) =>{

}

app.post('/user/signin', signIn)
app.post('/user/signout', signout)
app.post('/user/register', registerUser)
app.post('/user/modify', modifyUserInfo)
app.post('/user/delete', deleteAccount)

//editor


//new

const getHeadline = async (req, res) => {
    let processPetition = async ({date}) =>{
        let response
        try { response = await modelTitular.find().limit(1)}
        catch(err) {console.error(err)}
        return response
    }
    if (req.query.date === null || req.query.date === undefined) res.status(200).send({success : false})
    let sendHeadline = await processPetition(req.query)
    console.log(sendHeadline)
    res.send(sendHeadline)
}

const getAllNews = async (req, res) => {
    let processPetition = async() => {
        let response 
        try{response  = await modelNews.find().limit(15)}
        catch(err){console.error(err); res.status(200).send({success : false})}
        return response
    }
    let response = await processPetition()
    res.status(200).send(response)
}

const getNewsByType = async (req, res) => {
    let processPetition = async ({tagname}) => {
        let response 
        try { response = await modelNews.find({ 'tags': { $elemMatch: { name: tagname } } })}
        catch(err){console.error(err) ; res.status(200).send({success : false , err : err})}
        return response
    }
    if(req.query.tagname === undefined || req.query.tagname === null) res.status(200).send({success : false , type : 'no tagname'})
    let response = await processPetition(req.query)
    res.status(200).send(response) 
}

const getCompleteInformationNew = async (req, res) => {
    let processPetition = async ({titleParam}) => {
        let response 
        try { response = await modelNews.findOne({ title: titleParam })}
        catch(err){console.error(err); res.status(200).send({success : false , type : err})}
        if(response === null) return {success : false , type : 'no news with this title'}
        return response
    }
    if(req.params.titleParam === undefined || req.params.titleparam === null) res.status(200).send({success : false , type : 'no params added'})
    let response = await processPetition(req.params)
    res.status(200).send(response)
}

const getMetricsNew = (req, res) => {

}

const likeNew = (req, res) => {

}

const dislikeNew = (req, res) => {

}

const commentNew = (req, res) => {

}

const deleteComment = (req, res) => {

}

const updateComment = (req, res,) => {

}

app.get('/new/getHeadline?:date', getHeadline)
app.get('/new/getAll', getAllNews)
app.get('/new/getByType?:tagname', getNewsByType)
app.get('/new/getComplete/:titleParam', getCompleteInformationNew)
app.post('/new/getMetrics', getMetricsNew)
app.post('/new/setLike', likeNew)
app.post('/new/setDislike', dislikeNew)
app.post('/new/setDislike', commentNew)
app.post('/new/deleteComment', deleteComment)
app.post('/new/updateComment', updateComment)

// final operations

const NotFoundCallback = (req,res) =>{
}
app.get('*',NotFoundCallback)
function callbackListenApp(err){
    if(err) console.log(err)
    else console.log('connect')
}
app.listen(3500,callbackListenApp)