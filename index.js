const express = require('express');
const morgan = require('morgan');
const movieRouter = require('./routers/movies.router');
const userRouter = require('./routers/users.router');
require('./utils/mongoConnection');

const app = express();
const port = 3003;
app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send("Bienvenido a la Libreria API");
});

app.use(express.json({limit: '50mb'}));
app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.listen(port, ()=>{
    console.log("Servidor iniciado en http://localhost:"+port);
});