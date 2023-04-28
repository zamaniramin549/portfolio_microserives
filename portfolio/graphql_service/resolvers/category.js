const resolvers = {
    Query: {
        categories: async (_, __, {dataSources}) => {
            const result = await dataSources.CategoryAPI.getCategories();
            return result;
        }
    },

    Mutation:{
        addCategory: async (_, {name}, {dataSources}) => {
            if (dataSources.CategoryAPI.token){
                const result = await dataSources.CategoryAPI.addCategory(name);
                return result;
            }
        },
        deleteCategory: async (_, {id}, {dataSources}) => {
            if (dataSources.CategoryAPI.token){
                const result = await dataSources.CategoryAPI.deleteCategory(id);
                return result;
            }
        },
        editCategory: async (_, {id, name}, {dataSources}) => {
            if (dataSources.CategoryAPI.token){
                const result = await dataSources.CategoryAPI.editCategory(id, name);
                return result;
            }
        }
    }
};

export default resolvers;

