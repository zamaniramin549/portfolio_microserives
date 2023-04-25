FROM node:18-alpine

RUN mkdir -p /user
WORKDIR /skills

COPY package.json ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]