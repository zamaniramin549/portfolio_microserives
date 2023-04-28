const resolvers = {
    
    Query: {
        getUsers: async (_, __, {dataSources}) => {
            return await dataSources.UserAPI.getUsers();
        },

        getSingleUser: async (_, {id}, {dataSources}) => {
            return await dataSources.UserAPI.getSingleUser(id);
        },

    },

    Mutation: {
        deleteUser: async (_, {id}, {dataSources}) => {
            if (dataSources.UserAPI.token){
                const userId = dataSources.UserAPI.user.id;
                if (id === userId) {
                    return await dataSources.UserAPI.deleteUser(userId);
                } 
            }
        },

        createUser: async (_, {email, password}, {dataSources}) => {
            return await dataSources.UserAPI.createUser(email, password);
        },

        editUser: async (_, {id, email, password}, {dataSources}) => {
            if (dataSources.UserAPI.token){
                if (dataSources.UserAPI.user.id === id){
                    return await dataSources.UserAPI.editUser(id, email, password);
                }
            }
        },

        authUser: async (_, {email, password}, {dataSources}) => {
            return await dataSources.UserAPI.authUser(email, password);
        }
    }
};

export default resolvers;

