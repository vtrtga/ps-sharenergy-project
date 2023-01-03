FROM node

WORKDIR /app-backend

COPY package*.json .

RUN ["npm", "i"]

COPY . .

RUN chown node:node /app-backend

EXPOSE 3001

CMD [ "npm", "run", "dev"]