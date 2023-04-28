import { gql } from 'apollo-server-express';

const userType = gql`
    type Users {
        _id: String
        fullName: String
        email: String
        password: String
        joinedDate: String
    }

    type User {
        email: String
        id: String
        timeJoined: String
    }

    type Success {
        success: String
    }

    type Token {
        token: String
    }
    
    type Mutation {
        deleteUser(id:String!):Success
        createUser(email:String!, password:String!):User
        editUser(id:String!, email:String!, password:String!):Success
        authUser(email:String!, password:String!):Token
    }


    type Query {
        getUsers: [Users]
        getSingleUser(id:String!):Users
    }
`;

export default userType;
