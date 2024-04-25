const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors =require('cors');

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use (cors({origin:true, credentials: true}));
app.get('/', (req,res) => res.send('Hello World!'));
app.use(express.json({extended:false})); //required line

const conn_str = 'mongodb+srv://sahaj:helloworld@cluster0.4w3xybo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery',false);
mongoose.connect(conn_str).then(()=>{
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...')
})
.catch(err => {
    console.log('Error in DB connection');
});

const items = require('./routes/api/items');
app.use('/api/items', items);

const users = require('./routes/api/users');
app.use('/api/users', users);

