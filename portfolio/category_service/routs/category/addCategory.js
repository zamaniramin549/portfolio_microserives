const Category = require('../../models/category');

const addCategory = (req, res) => {
    const name = req.body.name;
    const saveCategory = new Category({
        name: name
    });
    saveCategory.save().then(result => {
        return res.status(200).json(result);
    })
};


module.exports = addCategory