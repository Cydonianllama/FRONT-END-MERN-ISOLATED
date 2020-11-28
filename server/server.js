const express = require('express')

const cors = require('cors')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

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

//functions and operations 

const dislike = async () => {

}

const likeNew = async () => {

}

const chargeNew = async ({title}) => {

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

/*
{
	"title" : "erick esta apendiendo a usar mongo",
	"emisisonDate" : "2020-11-27T16:00:00Z",
	"content" : "esta noticia no es mas que una nota recordando que esta funcionando mi request",
	"idAuthor" : "1",
	"urlImage" : "/images/noticia1.jpg",
	"tags" : [ {"name" : "variedades"} , {"name" : "nacionales"} ]
}
*/ 

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
