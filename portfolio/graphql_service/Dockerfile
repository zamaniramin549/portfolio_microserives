FROM node:18-alpine

RUN mkdir -p /graphql
WORKDIR /graphql

COPY package.json ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]