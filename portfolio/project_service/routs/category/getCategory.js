const category = require('../../models/category');

const getCategories = (req, res) => {
    category.find().then(result => {
        return res.status(200).json(result);
    })
};


module.exports = getCategories;