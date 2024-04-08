const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const authorRouter = require('./routers/authorRouter');
const productRouter = require('./routers/productRouter');
const mysql = require('./configs/mysql');
const mongo = require('./configs/mongo');
mongo();
const Products = require('./models/product');

Products.find().then((data) => {
    console.log(data);
});

const PORT = process.env.PORT;


const dataProduct = {
    "name": "sti",
    "title": "uong",
    "description": "",
    "photo": "default.jpg",
    "price": 2000,
    "shopkeeper": "KHU",
    "category": "drinks"
};
Products.create(dataProduct);
const dataProduct_update = {
    "name": "haha",
    "title": "uong",
    "description": "",
    "photo": "default.jpg",
    "price": 5000,
    "shopkeeper": "KHU",
    "category": "drinks"
};
Products.findByIdAndUpdate(id,dataProduct_update);


const id = '66135f5590cbb9671dd56446';
Products.findByIdAndDelete(id);


// mysql.getConnection((err) => {
//     if (err) {
//         console.error('Lỗi kết nối: ' + err.stack);
//         return;
//     }
//     console.log('Kết nối mysql thành công');
// });

// mysql.query("SELECT * FROM users WHERE age > ?",[18], (error, result) => {
//     if (error) return console.log("error: ",error);;
//     console.log(result);
// })




app.set('views', path.join(__dirname, 'views'));
app.use('/author', authorRouter);
app.use('/product', productRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
