FROM node:19.2.0

USER node

WORKDIR /home/app-backend

COPY --chown=node:node package*.json ./

RUN ["npm", "i"] 

COPY --chown=node:node . .

EXPOSE 3001

CMD ["npm", "run", "dev"]