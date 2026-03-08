const express = require('express');
const { use } = require('react');
const app = express();
const port = 3004;


app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});


app.post('/login', (req, res) => {
    username = req.body.username;
    password = req.body.password;
    if (username === 'vinayksgowda123@gmail.com' && password === 'vinay@123') {
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
});



app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});




app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/signup.html');
});

app.post('/signup', (req, res) => {
    use = req.body.username;
    pass = req.body.password;
    if (use === "vinayksgowda123@gmail.com" && pass === "vinay@123") {
        res.redirect('/home');
    } else {
        res.redirect('/signup');
    }
});

app.get('/reset', (req, res) => {
  res.sendFile(__dirname + '/public/reset.html');
});

app.get('/cart', (req, res) => {
  res.sendFile(__dirname + '/public/cart.html');
});

app.get('/payment', (req, res) => {
  res.sendFile(__dirname + '/public/payment.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});