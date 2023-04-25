const Category = require('../../models/category');

const deleteCategory = (req, res) => {
    const categoryId = req.body.id;
    Category.findByIdAndDelete(categoryId).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteCategory