const resolvers = {
    Query: {
        getBlogs: async (_, __, {dataSources}) => {
            return await dataSources.BlogAPI.getBlog();
        },

        getSingleBlog: async (_, {id}, {dataSources}) => {
            return await dataSources.BlogAPI.getSingleBlog(id);
        }
    },

    Mutation:{
        deleteBlog: async (_, {id}, {dataSources}) => {
            return await dataSources.BlogAPI.deleteBlog(id);
        },

        addBlog: async (_, {image, summery, content, category, title}, {dataSources}) => {
            return await dataSources.BlogAPI.addBlog(image, summery, content, category, title);
        },

        editBlog: async (_, {id, image, summery, content, category, title}, {dataSources}) => {
            return await dataSources.BlogAPI.editBlog(id, image, summery, content, category, title);
        }
    },

    Blogs: {
        subCategory: async (parent, data, {dataSources}) => {
            const id = parent?.category;
            return await dataSources.CategoryAPI.getSingleCatgeory(id);
        }
    }
};

export default resolvers;

