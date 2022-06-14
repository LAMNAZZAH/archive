const express = require('express'); 
const cors = require('cors'); 


let corsOptions = {
    origin: 'http://localhost:3000', 
}

const apiRouter = ('./routes/api.routes');

require('dotenv').config(); 

const App = () => {
    const app = express(); 
    app.use(express.json()); 
    app.use(express.urlencoded({extended: false})); 
    app.use(cors(corsOptions)); 


    app.get('/', async (req, res) => {
        res.send({message: "Great, it's Working"})
    });

    app.use('/api', apiRouter);

    app.use('*', (req, res, next) => {
        next(createError.notFound()); 
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500); 
        res.send({
            status: err.status || 500,
            message: err.message || 'something went wrong please try again'
        }); 
    });

    return app; 
}

module.exports = App; 