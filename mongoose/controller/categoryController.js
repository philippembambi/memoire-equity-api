const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
    await Category.find()
            .then(categories => {
                if(categories.length == 0){
                    console.log("Categories are empty");

                    res.json({
                        "api_response": "Empty"
                    })
                }
                else{
                    res.json({
                        "api_response": "Loaded",
                        "catList": categories
                    });
                }
            })
}

exports.fillDefaultCategories = (req, res) => {
    Category.insertMany({
        cat_name: 'Article vestimentaire',
        cat_desc: "Les articles d'habillement pour tous les genres et catégories"
    });

    Category.insertMany({
        cat_name: 'Produit alimentaire',
        cat_desc: "Une alimentation pour tous"
    });

    Category.insertMany({
        cat_name: 'Accessoire éléctronique',
        cat_desc: "Pour les consommables éléctronique et informatique"
    });

    res.redirect('/category/get-categories');
}
