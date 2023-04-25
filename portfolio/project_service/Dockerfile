FROM node:18-alpine

RUN mkdir -p /projects
WORKDIR /projects

COPY package.json ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]