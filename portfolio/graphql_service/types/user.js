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
    
    type Mutation {
        deleteUser(id:String!):Users
        createUser(email:String!, password:String!):User
        editUser(id:String!, fullName:String!, email:String!, password:String!):Users
        authUser(email:String!, password:String!):User
    }


    type Query {
        getUsers: [Users]
        getSingleUser(id:String!):Users
    }
`;

export default userType;
