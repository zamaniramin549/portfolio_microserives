FROM node:18-alpine

RUN mkdir -p /category
WORKDIR /category

COPY package.json ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]