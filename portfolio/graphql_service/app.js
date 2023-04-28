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
import jwt from 'jsonwebtoken';
import util from 'util';
import jwksClient from 'jwks-rsa';
import { GraphQLError } from 'graphql';

let client = jwksClient({
  jwksUri: `${process.env.USER_SERVICE}/auth/jwt/jwks.json`,
});



async function getKey(header, callback) {
  client.getSigningKey(header?.kid, function (err, key) {
    let signingKey = key?.getPublicKey();
    callback(err, signingKey);
  });
}


async function startApolloServer() {
    const server = new ApolloServer({
      typeDefs:[typeDefs],
      resolvers: resolver,
    });
    const { url } = await startStandaloneServer(server, {
        context: async ({ req }) => {
          try {
            let user = {};
            let token = req.headers.authorization || null;
            if (token) {
              token = token.split(' ')[1]
              const verifyJwt = util.promisify(jwt.verify);
              const decoded = await verifyJwt(token, getKey, {});
              
              user = {
                id: decoded['user']['id'],
                token: token,
                email: decoded['user']['email'],
                uid: decoded.sub,
                roles: decoded["st-role"]?.v,
              };
            }
  
            return {
                dataSources: {
                  CategoryAPI: new Categories({ user, token }),
                  ProjectAPI: new Projects({ user, token }),
                  BlogAPI: new Blogs({ user, token }),
                  SkillAPI: new Skill({ user, token }),
                  UserAPI: new User({ user, token })
                },
                user
              };

          } catch(error) {
            if (error?.name?.includes("JsonWebTokenError")) {
              throw new GraphQLError("Invalid token", {
                extensions: {
                  code: "UNAUTHENTICATED",
                },
              });
            }
            throw new GraphQLError(error);
            }
          },
        listen: { port: 3004 },
      });
    console.log('graphql servise port 3004');
}

startApolloServer()