const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const cokieSession = require('cookie-session');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductRouter = require('./routes/admin/products');
const router = require('./routes/admin/auth');
const productRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['frsfr3s51fr31fs53f1r35sv1r6f1s53f1']
}));

app.use(authRouter);
app.use(productRouter);
app.use(adminProductRouter);
app.use(cartsRouter);

app.listen(3000, () => {
    console.log('Listening');
});