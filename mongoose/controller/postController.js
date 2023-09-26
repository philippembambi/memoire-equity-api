/*
const Post = require('../models/postModel');

exports.createTable = (req, res) => {

    const title = req.body.title
    const category = req.body.category
    const content = req.body.content
    const createdDate = req.body.createdDate

    const post = new Post({title: "title", category: "category", content: "content", createdDate: "createdDate"});
    post.save().then(reqult => {

            console.log("Post created successfully !");
            res.send("Post created successfully !")

    }).catch(err => {
        console.log(err);
    })
}
*/