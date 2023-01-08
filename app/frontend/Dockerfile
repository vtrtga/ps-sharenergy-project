FROM node:19.2.0

USER node
WORKDIR /app-frontend

COPY --chown=node:node package.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]