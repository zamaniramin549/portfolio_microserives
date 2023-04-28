const Category = require('../../models/category');

const editCategory = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.params.id;
    const newName = req.body.name;
    Category.findById(id).then(category => {
        category.name = newName;
        category.save().then(result => {
            return res.status(200).json(result);
        })
    })
};

module.exports = editCategory