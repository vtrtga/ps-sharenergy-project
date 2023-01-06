FROM node:19.2.0

WORKDIR /app-backend

COPY package*.json .

RUN npm install

COPY . .

RUN chown node:node /app-backend

USER node

RUN [ "npm", "run", "dev" ]
