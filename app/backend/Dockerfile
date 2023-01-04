FROM node

WORKDIR /app-backend

COPY package*.json .

RUN ["npm", "i"]

COPY . .

RUN chown node:node /app-backend

USER node

CMD [ "npm", "run", "dev" ]
