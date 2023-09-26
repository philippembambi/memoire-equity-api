'use strict';
const rootPath = require('../helpers/path')
const path = require('path');

const categoryRouter = require('../routes/categoryRouter');
const productRouter = require('../routes/productRouter');
const adminRouter = require('../routes/adminRouter');

module.exports = (app) => {
    
    app.get('/', (request, response) => {
        response.sendFile(path.join(rootPath, 'view', 'register.html'))
    });

    app.get('/login/:data', (req, res) => {
        console.log(req.params.data);
        res.json({
            "data": req.params.data
        })
    });

    app.use('/admin', adminRouter);
    app.use('/category', categoryRouter);
    app.use('/product', productRouter);

      /*  Handle 404 Error */
    app.use((req, res, next) => {
        res.status(404).send("<h1>404 Error : Ressource Not Found</h1>");
    });

};