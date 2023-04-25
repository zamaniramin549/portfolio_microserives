const resolvers = {
    Query: {
        projects: async (_, __, {dataSources}) => {
            return await dataSources.ProjectAPI.getProjects();
        },
        projectCategories: async (_, __, {dataSources}) => {
            return await dataSources.ProjectAPI.getCategories();
        },
        getSingleProject: async (_, {id}, {dataSources}) => {
            return await dataSources.ProjectAPI.getSingleProject(id);
        },
        getProjectsByCategory: async (_, {categoryId}, {dataSources}) => {
            return await dataSources.ProjectAPI.getProjectsByCategory(categoryId);
        }
    },

    Mutation:{
        addProject: async (_, {image, title, summary, content, category}, {dataSources}) => {
            return await dataSources.ProjectAPI.addProject(image, title, summary, content, category);
        },
        addProjectCategory: async (_, {name}, {dataSources}) => {
            return await dataSources.ProjectAPI.addProjectCategory(name);
        },
        deleteProjectCategory: async (_, {id}, {dataSources}) => {
            return await dataSources.ProjectAPI.deleteProjectCategory(id);
        },
        deleteProject: async (_, {id}, {dataSources}) => {
            return await dataSources.ProjectAPI.deleteProject(id);
        },
        editProjectCategory: async (_, {id, name}, {dataSources}) => {
            return await dataSources.ProjectAPI.editProjectCategory(id, name);
        },
        editProject: async (_, {id, image, title, summary, content, category}, {dataSources}) => {
            return await dataSources.ProjectAPI.editProject(id, image, title, summary, content, category)
        }
    },
};

export default resolvers;
