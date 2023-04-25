const Category = require('../../models/category');

const getCategories = (req, res) => {
    Category.find().then(result => {
        return res.status(200).json(result);
    })
};

module.exports = getCategories