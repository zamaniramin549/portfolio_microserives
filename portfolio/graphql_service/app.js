import express from 'express';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './types/index.js';
import resolver from './resolvers/index.js'
import Categories from './datasources/categoryData.js';
import Projects from './datasources/projectData.js';
import Blogs from './datasources/blogData.js';
import Skill from './datasources/skillData.js';
import User from './datasources/userData.js';


async function startApolloServer() {
    const server = new ApolloServer({
      typeDefs:[typeDefs],
      resolvers: resolver,
    });
    const { url } = await startStandaloneServer(server, {
        context: async ({ req }) => {
          return {
              dataSources: {
                CategoryAPI: new Categories(),
                ProjectAPI: new Projects(),
                BlogAPI: new Blogs(),
                SkillAPI: new Skill(),
                UserAPI: new User()
               }
            };
          },
        listen: { port: 3004 },
      });
    console.log('graphql servise port 3004');
}

startApolloServer()