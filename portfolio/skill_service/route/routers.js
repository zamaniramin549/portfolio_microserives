const express = require('express');
const routs = express.Router()
const getSkills = require('./skills/getSkills');
const addSkill = require('./skills/addSkill');
const deleteSkill = require('./skills/deleteSkill');
const getSingleSkill = require('./skills/getSingleSkill');
const editSkill = require('./skills/editSkill');

routs.get('/get-skills', getSkills);
routs.get('/get-skill/:id', getSingleSkill);
routs.post('/add-skill', addSkill);
routs.delete('/delete-skill', deleteSkill);
routs.put('/edit-skill/:id', editSkill);



module.exports = routs;