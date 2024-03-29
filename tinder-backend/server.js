import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors'

// App Config
const app = express();
const port = process.env.PORT || 8001
const connectionUrl = `mongodb+srv://ahtisham:1234@cluster0.d7z0z4n.mongodb.net/?retryWrites=true&w=majority`;

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true
}).then(() => {
    console.log('connection Successful')
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Ahtisham!!"))

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })

})

app.get('/tinder/cards', (req, res) => {

    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })

})

// Listener
app.listen(port, () => {
    console.log("Server is running on " + port)
})