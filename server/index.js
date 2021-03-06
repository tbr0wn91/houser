const express = require('express');
// const session = require('express-session');
const massive = require('massive');
const controller = require('./controller');
const app = express();
require('dotenv').config();
app.use(express.json());
const PORT = 4200;


const {CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);

    console.log("connected to the db")
});


app.get('/api/houses', controller.getAllHouses);

app.post('/api/house', controller.addHouse);

app.delete('/api/house/:id', controller.deleteHouse)

app.listen(PORT, () => console.log(`listening in on port ${PORT}`))