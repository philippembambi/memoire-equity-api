//Adding Parameters to Routes

let products = [
    {"name":"television", "price":112.34, "brand":"samsung"},
    {"name":"washing machine", "price": 345.34, "brand": "LG"},
    {"name":"Macbook", "price": 3454.34, "brand": "Apple"}
  ];
  
  // handle get request for fetching products
  // belonging to a particular brand
  app.get('/products/:brand', (request, response) => {
    // read the captured value of route parameter named: brand
    const brand = request.params.brand  
    console.log(`brand ${brand} `)
    
    const productsFiltered = products.filter(product=> product.brand == brand)               
    response.json(productsFiltered)
  });





  // routes.js
const express = require('express')

const router = express.Router()

// handle get request for path /products
router.get('/products', (request, response) => {
});

// handle get request for path /products/:brand
router.get('/products/:brand', (request, response) => {
});

module.exports = router



// server.js
const express = require('express')
const routes = require('./routes');

const app = express()
const PORT = process.env.PORT || 3000


app.use(routes)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})


//Adding Middleware for Processing Requests

//Middleware functions take three arguments: the request object (request), the response object (response), and optionally the next() middleware function :

function middlewareFunction(request, response, next){
  next()
}


//Adding Middleware for a Single Route
// middleware.js

const requireJsonContent = (request, response, next) => {
    if (request.headers['content-type'] !== 'application/json') {
      response.status(400).send('Server requires application/json')
    } else {
      next()
    }
}
module.exports = { requireJsonContent }


//Our route for the HTTP POST method with the requireJsonContent() middleware function attached will look like this:

// handle post request for path /products
router.post('/products', 
  
  // first function in the chain will check for JSON content
  requireJsonContent,  
  
  // second function will process the request if first function detects JSON 
  (request, response) => {  
                           
  // process json request
  response.json(
    {productID: "12345", 
    result: "success"}
  )  
}
  
  );
