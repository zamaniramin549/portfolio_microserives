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
            return await dataSources.UserAPI.deleteUser(id);
        },

        createUser: async (_, {email, password}, {dataSources}) => {
            return await dataSources.UserAPI.createUser(email, password);
        },

        editUser: async (_, {id,fullName, email, password}, {dataSources}) => {
            return await dataSources.UserAPI.editUser(id, fullName, email, password);
        },

        authUser: async (_, {email, password}, {dataSources}) => {
            return await dataSources.UserAPI.authUser(email, password);
        }
    }
};

export default resolvers;

