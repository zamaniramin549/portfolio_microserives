import pkg from 'lodash';
const { merge } = pkg;

import categories from './category.js';
import projects from './project.js';
import blog from './blog.js';
import skill from './skill.js';
import user from './user.js';

export default merge({},
    categories,
    projects,
    blog,
    skill,
    user
);

