FROM node:19.2.0

WORKDIR /app-backend

COPY package*.json ./

RUN chmod -R 777 /app-backend

RUN ["npm", "i"] 

COPY . .

RUN chown node:node /app-backend

USER node

CMD ["npm", "run", "dev"]