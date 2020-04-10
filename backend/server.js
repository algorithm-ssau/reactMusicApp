const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

app.get('/', (req, res)=>{
    res.send('Hello');
    console.log("Main page");
});

//Чисто для примера
app.get('/instr', (req, res) => {
    res.json([
        {id:1, species: 'Гитара', name: 'Fender Stratocaster HSS', price: 150000},
        {id:2, species: 'Бас-гитара', name: 'Fender Precision Bass', price: 120000},
        {id:3, species: 'Укулеле', name: 'Flight', price: 3000},
        {id:4, species: 'Синтезатор', name: 'Roland SY-300', price: 70000}
    ]);
    console.log("Instruments");
});

app.get('/instrument/:id', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
