const Category = require('../../models/category');

const deleteCategory = (req, res) => {
    if (!req.headers.authorization) {
        return res.send({success:'user should be logged in'})
    }
    const id = req.body.id;
    Category.findByIdAndDelete(id).then(result => {
        return res.status(200).json(result);
    })
};

module.exports = deleteCategory