FROM node:latest

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . .

RUN yarn build

ARG DEFAULT_PORT=80

ENV PORT=${DEFAULT_PORT}

EXPOSE ${PORT}

CMD [ "yarn", "start:dev" ]