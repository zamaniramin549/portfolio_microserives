FROM node:18-alpine

RUN mkdir -p /skills
WORKDIR /skills

COPY package.json ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]