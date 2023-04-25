import { gql } from 'apollo-server-express';

const userType = gql`
    type Users {
        _id: String
        fullName: String
        email: String
        password: String
        joinedDate: String
    }

    type Jwtoken {
        jwtoken: String
    }
    
    type Mutation {
        deleteUser(id:String!):Users
        createUser(fullName:String!, email:String!, password:String!):Users
        editUser(id:String!, fullName:String!, email:String!, password:String!):Users
        authUser(email:String!, password:String!):Jwtoken
    }


    type Query {
        getUsers: [Users]
        getSingleUser(id:String!):Users
    }
`;

export default userType;
