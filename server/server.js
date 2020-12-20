const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const app = express()

const corsOptions = {
    origin: 'http://localhost:5000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors(corsOptions))

app.use((req,res,next)=>{
    console.log(req.url)
    next()
})

/* // control allow origin , investigate for the future projects
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:5000")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
})
*/

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
    idUser : String ,
    username : String ,
    password : String 
})

const modelUser = mongoose.model('user',userSchema,'user')

const dataUserSchema = new Schema({
    idUser : String ,
    fullname : String , 
}) 

const modelDataUser = mongoose.model('dataUser',dataUserSchema,'dataUser')

const userEditorSchema = new Schema({
    idUser : String ,
    akaEditor : String 
})

const modelUserEditor = mongoose.model('editor',userEditorSchema,'editor')

const titularSchema = new Schema({
    title : String ,
    description : String 
})

const modelTitular = mongoose.model('titular',titularSchema,'titular')

const interactionsNewsSchema = new Schema({
    idNews : String,
    idUser : String,
    TypeIteraction : String
})

const modelInteractionNews = mongoose.model('interactionnew',interactionsNewsSchema,'interactionnew')

const replyCommentSchema = new Schema({
    idUser : String ,
    comment : String 
})

const commentsSchema = new Schema({
    idNew  : String,
    idUser : String,
    comment : String ,
    replycomment : [replyCommentSchema] 
})

const modelComments = mongoose.model('commentsnew',commentsSchema,'comentsnew')

const TagSchema = new Schema({
    name : String
})

const newsSchema = new Schema({
    title : String ,
    emisionDate: Date,
    content : String ,
    idAuthor : String ,
    urlImage : String ,
    tags: [TagSchema]
})

const modelNews = mongoose.model('newsone',newsSchema,'newsone')

const metricsNewSchema = new Schema({
    idnewsone : String,
    countvisitors : Number,
})

const modelMetricsNew = mongoose.model('metricsnew', metricsNewSchema,'metricsnew')

//functions and operations 

const dislike = async () => {

}

const likeNew = async () => {

}

const chargeNew = async ({title}) => {
    this.dataNewone = {}
    try{
        await modelNews.find({ title },(err , docs) =>{
            this.dataNewone = docs 
            console.log('hola' , docs)
        })
    }catch(err){
        console.log(err)
    }finally{
        return this.dataNewone
    }
    
}

const chargeNews = async () => {
    let dataNews = {}
    try{
        dataNews = await modelNews.find().limit(20)
    }catch(err){
        console.log(err)
        return err
    }
    return dataNews
}

const userToEditor = async () => {

}

const modifyDataUser = async() => {

}

const verifyUser = async ({usermame , password}) => {

}

const createUser = async ({username , password , fullname}) => {
    try{
        await new modelUser({ username, password }).save()
        this.countiduser = await modelUser.estimatedDocumentCount()
        await new modelDataUser({ fullname, idUser: this.countiduser }).save()
        return {isCreated : 'true'}
    }catch(err){
        return null
    }
}

const logout = async(req,res) => {

}

//obtener una noticia : req.body -> title (lo obtendremos por su titulo)
app.post('/getnew',async (req,res)=>{
    console.log(req.body)
    let data = await chargeNew(req.body)
    console.log('post hola :' , data)
    res.status(200).send(data)
})

app.post('/login',(req,res) => {

})

app.post('/', async (req,res)=>{
    let data = await chargeNews()
    if(data === null) res.send(404).send({notices : null})
    else res.status(200).send(data)
})

app.post('/register', async (req,res)=> {
    //fullname ,  username , password
    let responseDB = await createUser(req.body)
    res.send(responseDB)
})

app.get('/logout',logout)

app.post('user/Login',(req,res)=>{

})



//query para documentos embebidos
//db.newsone.find( { "tags": { $elemMatch: { name: 'nacionales' } } } )
const obteinNewsForType = async ({typenotice}) =>{
    let data = {}
    let dataa = {}
    let findData = typenotice
    try{
        data = await modelNews.find({ 'tags': { $elemMatch: { name: typenotice } } },(err ,docs) =>{ 
            dataa = docs ;  
        })
    }catch(err){
        console.log(err)
        return null
    }
    return dataa
}

app.post('/home/:typenotice',async (req,res)=>{
    let data = await obteinNewsForType(req.params)
    res.status(200).send(data)
})

const pruebasCrearNoticia = async ({title, emisionDate, content, idAuthor, urlImage, tags}) => {
   try{
       await new modelNews({title, emisionDate, content, idAuthor, urlImage, tags}).save()
        return true
    }catch(err){
        console.log(err)
        return false
   }
}

app.post('/add/notice', async (req,res) => {
    let isCreated = await pruebasCrearNoticia(req.body)
    if(isCreated === true) res.status(200).send({noticeCreated : 'true'})
    else res.status(200).send({noticeCreated : 'false'})
})


app.listen(3500,()=>{
    console.log('done')
})
