const resolvers = {
    Query: {
        getSkills: async (_, __, {dataSources}) => {
            return await dataSources.SkillAPI.getSkills();
        },

        getSingleSkill: async (_, {id}, {dataSources}) => {
            return await dataSources.SkillAPI.getSingleSkill(id);
        },
    },

    Mutation: {
        addSkill: async (_, {name, content, image}, {dataSources}) => {
            if (dataSources.SkillAPI.token){
                return await dataSources.SkillAPI.addSkill(name, content, image);
            }
        },

        deleteSkill: async (_, {id}, {dataSources}) => {
            if (dataSources.SkillAPI.token){
                return await dataSources.SkillAPI.deleteSkill(id);
            }
        },

        editSkill: async (_, {id, name, content, image}, {dataSources}) => {
            if (dataSources.SkillAPI.token){
                return await dataSources.SkillAPI.editSkill(id, name, content, image);
            }
        },

    }
};

export default resolvers;

