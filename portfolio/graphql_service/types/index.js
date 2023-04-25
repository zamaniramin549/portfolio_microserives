import { mergeTypeDefs } from '@graphql-tools/merge';  
import categoryType from './category.js';
import projectType from './project.js';
import blogType from './blog.js';
import skillType from './skill.js';
import userType from './user.js';


const types = [
    categoryType,
    projectType,
    blogType,
    skillType,
    userType
];

export default mergeTypeDefs(types);