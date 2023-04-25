import { gql } from 'apollo-server-express';

const categoryType = gql`
    type Categories {
        _id: String
        name: String
        publishDate: String
    }

    type Mutation{
        addCategory(name:String):Categories
        deleteCategory(id:String):Categories
        editCategory(id:String, name:String):Categories
    }

    type Query {
        categories: [Categories]
    }
`;

export default categoryType;