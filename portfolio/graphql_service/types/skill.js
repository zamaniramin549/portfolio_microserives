import { gql } from 'apollo-server-express';

const skillType = gql`
    type Skills {
        _id: String
        name: String
        content: String
        image: String
        publishDate: String
    }

    type Mutation {
        addSkill(name:String!, content:String!, image:String!):Skills
        deleteSkill(id:String!):Skills
        editSkill(id:String!, name:String!, content:String!, image:String!):Skills
    }

    type Query {
        getSkills: [Skills]
        getSingleSkill(id:String!):Skills
    }
`;

export default skillType;


