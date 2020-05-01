const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const port = 5000;
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(urlencodedParser);

const uri = process.env.ATLAS_URI;
const usersUri = process.env.USERS_URI;
//Первый Connection к инструментам
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true });
//Второй - к пользователям
mongoose.createConnection(usersUri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true });

const connections = mongoose.connections;
const connection = connections[0];
const userconnection = connections[1];

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
  console.log("Collections: ", Object.keys(connections[0].collections), " \n",
      Object.keys(connections[1].collections));
});

const instrumentScheme = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    name: String,
    species: String,
    description: String,
    price: Number,
    image: mongoose.Schema.Types.ObjectID
}, { versionKey: false });

const guitarScheme = instrumentScheme.clone().set('collection', 'guitars');
const bassGuitarScheme = instrumentScheme.clone().set('collection', 'bass-guitars');
const drumScheme = instrumentScheme.clone().set('collection', 'drums');
const synthScheme = instrumentScheme.clone().set('collection', 'synthesizers');

const Guitar = mongoose.model("Guitar", guitarScheme);
const Drum = mongoose.model("Drum", drumScheme);
const BassGuitar = mongoose.model("BassGuitar", bassGuitarScheme);
const Synthesizer = mongoose.model("Synthesizer", synthScheme);
const Instrument = mongoose.model("Instrument", instrumentScheme);

const errorInstrument = {_id:-1, species: 'Ошибка', name: 'Ошибка', description: 'Ошибка', price: 0, image: null};

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    goods: { type: Array, default: []}
}, { versionKey: false, collection: 'users' });

const User = userconnection.model("User", userSchema);

app.get('/', (req, res)=>{
    res.send('Hello');
    console.log("Main page");
});

app.get('/guitars', (req, res)=>{
    console.log("Guitars");
    Guitar.find({}, (err, docs) => {
        if (err) res.json(errorInstrument);
        else {
            res.json(docs);
        }
    });
});

app.get('/bass-guitars', (req, res)=>{
    console.log("Bass-Guitars");
    BassGuitar.find({}, (err, docs) => {
        if (err) res.json(errorInstrument);
        else {
            res.json(docs);
        }
    });
});

app.get('/drums', (req, res)=>{
    console.log("Drums");
    Drum.find({}, (err, docs) => {
        if (err) res.json(errorInstrument);
        else {
            res.json(docs);
        }
    });
});

app.get('/synthesizers', (req, res)=>{
    console.log("Synthesizers");
    Synthesizer.find({}, (err, docs) => {
        if (err) res.json(errorInstrument);
        else {
            res.json(docs);
        }
    });
});

app.get('/instr', (req, res) => {
    Promise.all(Object.keys(connection.collections).map(col =>
            mongoose.model(col, instrumentScheme.set('collection', col)).find())
    ).then(result=>res.json(result.flatMap(x => x)))

    console.log("Instruments");
});

app.get('/instrument/:id', (req, res) => {
    console.log(`Instrument id:${req.params.id}`)

    Promise.all(Object.keys(connection.collections).map(col =>
        mongoose.model(col, instrumentScheme.set('collection', col)).findById(req.params.id))
    ).then(result=>{
        res.json(result.flatMap(x => x).filter(x => (x!=null))[0])
    })
});

app.post('/register', bodyParser.json(), (req, res) => {
    console.log(req.body);
    if (!req.body) res.status(400).json({code: 1, reg: false});
    else{
        if(req.body.firstName === "" || req.body.lastName === "" ||
            req.body.username === "" || req.body.password === "") res.status(400).json({code: 2, reg: false});
        else {
            const user = new User({firstName: req.body.firstName, lastName: req.body.lastName,
            username: req.body.username, password: req.body.password});
            user.save((err) => {
                if (err) {
                    console.log(err.code);
                    res.status(400).json({code: err.code, reg: false});
                }
                else res.status(200).json({code: 0, reg: true});
            })

        }
    }
});

app.post('/login', bodyParser.json(), (req, res) => {
    console.log(req.body);
    if (!req.body) res.status(400).json({code: 1, reg: false});
    else{
        if(req.body.username === "" || req.body.password === "") res.status(400).json({code: 2, reg: false});
        else {
            User.findOne({username: req.body.username, password: req.body.password}, (err, doc) => {
                if (err) {
                    console.log(err.code);
                    res.status(400).json({code: err.code, reg: false});
                }
                else {
                    console.log(doc);
                    res.status(200).json({code: 0, reg: true});
                }
            });
        }
    }
});

app.post('/user-wishlist', bodyParser.json(), (req, res) => {
    console.log(req.body);
    if (!req.body) res.status(400).json({code: 1});
    else if(req.body.username === "") res.status(400).json({code: 2})
    else {
        User.findOne({username: req.body.username}, (err, doc) => {
            if (err) {
                console.log(err.code);
                res.status(400).json({code: err.code});
            }
            else {
                console.log(doc);
                res.status(200).json({code: 0, goods: doc.goods});
            }
        });
    }
});

app.post('/add-to-wishlist', bodyParser.json(), (req, res) => {
    if (!req.body) res.status(400).json({code: 1});
    else {
        console.log(req.body);
        User.findOne({username: req.body.username}).then(doc => {
            //console.log(doc);
            let wishItem = doc.goods.findIndex(item => item.instrument === req.body.instrument);
            console.log(wishItem)
            if (wishItem !== -1) {
                doc.goods[wishItem]["number"] = doc.goods[wishItem]["number"] + 1;
            }
            else doc.goods.push({number: 1, instrument: req.body.instrument});
            doc.save();
            console.log(doc);
            res.sendStatus(200);
        })
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});