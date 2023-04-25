import { gql } from 'apollo-server-express';

const blogType = gql`
    type Blogs {
        _id: String
        title: String
        image: String
        summery: String
        content: String
        category: String
        subCategory: Categories
        publishDate:String
    }

    type Mutation{
        deleteBlog(id:String!):Blogs
        addBlog(image:String, summery:String!, content:String!, category:String!, title:String!):Blogs
        editBlog(id:String!, image:String, summery:String!, content:String!, category:String!, title:String!):Blogs
    }

    type Query {
        getBlogs: [Blogs]
        getSingleBlog(id:String):Blogs
    }
`;

export default blogType;

