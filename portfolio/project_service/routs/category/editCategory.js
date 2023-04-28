const Category = require('../../models/category');

const editCategory = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const categoryId = req.params.id;
    const newName = req.body.name;
    Category.findById(categoryId).then(category => {
        category.name = newName;
        category.save().then(result => {
            return res.status(200).json(result);
        })
    })
};

module.exports = editCategory;