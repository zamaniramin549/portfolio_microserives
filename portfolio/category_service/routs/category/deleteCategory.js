const Category = require('../../models/category');

const deleteCategory = (req, res) => {
    const id = req.body.id;
    Category.findByIdAndDelete(id).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteCategory