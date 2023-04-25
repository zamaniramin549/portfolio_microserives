FROM node:18-alpine

RUN mkdir -p /blog
WORKDIR /blog

COPY package.json ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]