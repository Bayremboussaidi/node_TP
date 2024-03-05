const express = require('express');
const voiture = require ('./routes/voiture');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const mongoose = require('mongoose');

const app = express();
const dotenv = require ('dotenv'); //pour lire les variables d'environnements
dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.port || 9000
//const port = 3000;
app.use(express.json());
app.use('/voiture',voiture)

//http://localhost:9000/hola/?name=John&age=30
app.get('/hola',(req,res)=>{
    res.send(`hello i'm ${req.query.name} and i'm ${req.query.age} years old .`)
})

//http://localhost:9000/test/john/30
app.get('/hola/:name/:age',(req,res)=>{
    res.send(`hello i'm ${req.query.name} and i'm ${req.query.age} years old .`)
})

//construire un path
app.get('/',(req,res)=>{
    //res.send('Hello World') => l'affichage de l'interface sous forme de chaine de caractére
    //res.json({message: 'Hello World'}) //objet

    // return file : page html
    res.sendFile(__dirname+'/index.html')

    //redirection vers un lien
    res.redirect('https://www.google.com')
})

//connect to the database
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Connected to the database')
    app.listen(PORT,()=>{
        console.log(`Server is running on  ${PORT}`)
    })
}).catch(err=>{
    console.log('Error connecting to database: ',err.message)
})

/*app.listen(9000,()=>{
console.log('Server is running on port 9000 ...')})*/





