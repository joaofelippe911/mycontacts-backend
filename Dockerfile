FROM node:latest

RUN npm install -g yarn --force

WORKDIR /api

COPY package*.json .

RUN yarn

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ]