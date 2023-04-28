const Category = require('../../models/category');

const deleteCategory = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const categoryId = req.body.id;
    Category.findByIdAndDelete(categoryId).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteCategory