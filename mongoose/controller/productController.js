const Product = require("../models/Product");
const Category = require("../models/Category");

exports.getProducts = (req, res) => {
    Product.find().then(products => {
        setTimeout(() => {
            res.json(products);
        }, 3000)
    })
}

exports.addProduct = (req, res) => {
    
    const cat = {
        id: ""
    };

    Category.findOne({cat_name: req.body.form.category}).then((singleCategory) => {
        if(singleCategory){
            cat.id = singleCategory._id
        }
        else{
            cat.id = "644a8f00e986cdea5b8491b5"
        }

    })

    setTimeout(() => {
        Product.insertMany({
            prod_label: req.body.form.label,
            prod_price: req.body.form.price,
            prod_categoryId: cat.id,
            prod_category: req.body.form.category,
            prod_details: req.body.form.details,
            prod_qte: req.body.form.qte,
            prod_image1: req.body.form.image1,
            prod_image2: req.body.form.image2
        });
        console.log("New Product : ", req.body.form.category + " '" + req.body.form.label + "' ajouté avec succès");
        res.json({
            'status': 'Opération effectuée',
            'response': req.body.form.category + " '" + req.body.form.label + "' ajouté avec succès",
        })
    }, 3000)
}