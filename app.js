const express =  require('express');
const app =  express();
const bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); 

app.get('/', (req, res)=>{
    res.render('index');
});

app.get('/home', (req, res)=>{
    res.render('index');
});

app.get('/contact', (req, res)=>{
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res)=>{
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', (req, res)=>{
    let data = {
        age: 27, hobbies: ['reading','eating','dreaming']
    };
    res.render('profile', {person: req.params.name, data:data});
});

app.listen(3000);
