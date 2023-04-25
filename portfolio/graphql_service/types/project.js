import { gql } from 'apollo-server-express';

const projectType = gql`
    type ProjectCategories {
        _id:String
        name:String
        publishDate:String
    }

    type Projects {
        _id: String
        image: String
        title: String
        summary: String
        content: String
        category: [ProjectCategories]
        publishDate: String
    }


    type Mutation {
        addProject(image:String, title:String, summary:String, content:String, category:[String]):Projects
        addProjectCategory(name:String):ProjectCategories
        deleteProjectCategory(id:String):ProjectCategories
        deleteProject(id:String):Projects
        editProjectCategory(id:String, name:String):ProjectCategories
        editProject(id:String, image:String, title:String, summary:String, content:String, category:[String]):Projects
    }

    type Query {
        projects: [Projects]
        projectCategories: [ProjectCategories]
        getSingleProject(id:String):Projects
        getProjectsByCategory(categoryId:String):[Projects]
    }
`;

export default projectType;
