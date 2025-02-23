const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const FLAG = process.env.ENVIRONMENT;

app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    const item = {
        page_title : "Home",
        flag : FLAG
    };

    res.render('./extensions/index.ejs', item);
});

app.listen(port, () => console.log(`In ascolto su: ${port}.`));